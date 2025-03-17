import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        minLength: [3,"user name must contain atleast 3 characters"],
        maxLength: [40,"User name should not exceed 40 characters"],
    },
    password:{
        type: String,
        selected: false,
        minLength:[8," Password must contain atleast 8 characters"],
    },
    email: String,
    address: String,
    phone:{
        type: String,
        selected: false,
        minLength: [10,"Phone no. must contain exactly 10 digits"],
        maxLength: [40,"Phone no. should contain exactly 10 digits"],
    },
    profileImage:{
        public_id: {
            type:String,
            required:true,
        },
        url: {
            type:String,
            required:true,
        },
    },
    paymentMethods:{
        bankTransfer:{
            bankAccountNumber: String,
            bankAccountName:String,
            bankName: String,
            UPIID:String,
        },
    },
    role:{
        type:String,
        enum:["Auctioneer", "Bidder","Super Admin"],
        default:"Bidder",
    },
    unpaidCommission:{
        type:Number,
        default:0,
    },
    auctionsWon:{
        type:Number,
        default:0,
    },
    moneySpent:{
        type: Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});



userSchema.pre("save",async function(next) {
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
};


userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};


userSchema.methods.generateJsonwebToken =function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE,
})
}

export const User=mongoose.model("User",userSchema);