import ErrorHandler from "../middlewares/error.js";
import {User} from "../models/userSchema.js";
import { v2 as cloudinary } from "cloudinary";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { generateToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Profile Image required.", 400));

    }

    const { profileImage } = req.files;

    const allowedFormats = ["image/png", "image/jpeg", "image/jpg","image/webp"];
    if (!allowedFormats.includes(profileImage.mimetype)) {
        return next(new ErrorHandler("File format not supported.", 400));
    }

    const { 
        userName,
        email,
        password,
        phone,
        address,
        role,
        bankAccountNumber,
        bankAccountName,
        bankName,
        UPI_ID
    } = req.body;

    if (!userName || !email || !phone || !password || !address) {
        return next(new ErrorHandler("Please fill full form.", 400));
    }
    {
        if (!bankAccountNumber || !bankAccountName || !bankName) {
            return next(new ErrorHandler("Please provide your bank details", 400));
        }
        if (!UPI_ID) {
            return next(new ErrorHandler("Please provide your UPI Id", 400));
        }
    }

    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
        return next(new ErrorHandler("User already registered.", 400));
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(profileImage.tempFilePath, {
        folder: "Auction_PLatform_users",
    });

    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.error("Cloudinary error:",cloudinaryResponse.error || "Unknown cloudinary error.");
        return next(new ErrorHandler("Failed to upload profiled image to cloudinary.",500));
    }
    const user = await User.create({
        userName,
        email,
        password,
        phone,
        address,
        role,
        profileImage: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        },
        paymentMethods:{
            bankTransfer:{
                bankAccountNumber,
                bankAccountName,
                bankName,
            },
            online:{
              UPI_ID,
            },
        },
    });
    generateToken(user,"User Registered.",201,res);
});

// export const login = catchAsyncErrors(async (req, res, next) => {
//   const { email, password, role } = req.body;

//   if (!email || !password || !role) {
//       return next(new ErrorHandler("Please provide email, password, and role.", 400));
//   }

//   // Find user by email (role is not stored in DB)
//   const user = await User.findOne({ email }).select("+password");

//   if (!user) {
//       return next(new ErrorHandler("Invalid credentials.", 400));
//   }

//   // Check password
//   const isPasswordMatch = await user.comparePassword(password);
//   if (!isPasswordMatch) {
//       return next(new ErrorHandler("Invalid credentials.", 400));
//   }

//   // Include the selected role in the response
//   const tokenPayload = {
//       id: user._id,
//       email: user.email,
//       role: role,  // Role is assigned at login
//   };

//   generateToken(user, "Login successful.", 200, res);
// });

export const login = catchAsyncErrors(async (req, res, next) => {
    console.log("🔵 Login API Hit"); // Check if request reaches backend
    console.log("Request Headers:", req.headers);
    console.log("Request Body:", req.body);
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return next(new ErrorHandler("Please provide email, password, and role.", 400));
    }

    // Find user by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid credentials.", 400));
    }

    // Check password
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid credentials.", 400));
    }

    // Update user's role in the database (if needed)
    if (user.role !== role) {
        user.role = role;
        await user.save();
    }
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    // Generate token with updated role
    generateToken(user, "Login successful.", 200, res);
});




export const getProfile = catchAsyncErrors(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
      success: true,
      user,
    });
  });

  export const updateProfile = async (req, res) => {
    try {
      const { userName, email, phone, address } = req.body;
  
      const user = await User.findById(req.user.id);
      if (!user) return res.status(404).json({ message: "User not found" });
  
      // Update user details
      user.userName = userName || user.userName;
      user.email = email || user.email;
      user.phone = phone || user.phone;
      user.address = address || user.address;
  
      await user.save();
      res.json({ message: "Profile updated successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

export const logout = catchAsyncErrors(async (req, res, next) => {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logout Successfully.",
      });
});

export const fetchLeaderboard = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find({ moneySpent: { $gt: 0 } });
  const leaderboard = users.sort((a, b) => b.moneySpent - a.moneySpent);
  res.status(200).json({
    success: true,
    leaderboard,
  });
});