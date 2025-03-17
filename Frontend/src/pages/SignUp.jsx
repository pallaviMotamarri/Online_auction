import React from 'react';
import {register} from "@/store/slices/userSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("null");
  const [password, setPassword] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [UPI_ID,setUpiid]=useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileImagePreview, setProfileImagePreview] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("userName", userName);
  //   formData.append("email", email);
  //   formData.append("phone", phone);
  //   formData.append("password", password);
  //   formData.append("address", address);
  //   formData.append("profileImage", profileImage);
  //   formData.append("bankAccountName", bankAccountName),
  //   formData.append("bankAccountNumber", bankAccountNumber),
  //   formData.append("bankName", bankName),
  //   formData.append("UPI_ID",UPI_ID),
  //   dispatch(register(formData));
  // };

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("profileImage", profileImage);
    formData.append("bankAccountName", bankAccountName);
    formData.append("bankAccountNumber", bankAccountNumber);
    formData.append("bankName", bankName);
    formData.append("UPI_ID", UPI_ID);
  
    // 🚀 Debugging: Log form data
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    dispatch(register(formData));
  };
  

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, loading, isAuthenticated]);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfileImagePreview(reader.result);
      setProfileImage(file);
    };
  };
  return (
    <>
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]">
    <div className="border-4 border-dashed border-stone-400 mx-auto w-3/4 h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md bg-opacity-90 bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]">
        <h1
            className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl`}
        >
            Register Here...!
        </h1>
        <form
            className="flex flex-col gap-5 w-full"
            onSubmit={handleRegister}
        >
            <p className="font-semibold text-xl md:text-2xl">
              Personal Details
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-900">Full Name</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-900">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
                />
              </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-900">Phone</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
                />
                
              </div>
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-900">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-900">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col sm:flex-1">
                <label className="text-[16px] text-stone-900">Confirm Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-1 gap-2">
              <label className="text-[16px] text-stone-900">
                Profile Image
              </label>
              <div className="flex items-center gap-3">
                <img
                  src={
                    profileImagePreview
                      ? profileImagePreview
                      : "/imageHolder.jpg"
                  }
                  alt="profileImagePreview"
                  className="w-12 h-12 rounded-full"
                />
                <input type="file" onChange={imageHandler} />
              </div>
            </div>
            <hr className='mb-4 border-white'></hr>
            <div className="flex flex-col gap-4">
              <label className="font-semibold text-xl md:2xl flex flex-col">
                Payment Method Details{" "}
                
              </label>
              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-semibold text-stone-900">
                  Bank Details
                </label>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <select
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
                  >
                    <option value="">Select Your Bank</option>
                    <option value="HDFC">HDFC</option>
                    <option value="SBI">SBI</option>
                    <option value="Axis">Axis</option>
                    <option value="other">other</option>
                  </select>
                  <input
                    type="text"
                    value={bankAccountNumber}
                    placeholder="IFSC"
                    onChange={(e) => setBankAccountNumber(e.target.value)}
                    className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
                  />
                  <input
                    type="text"
                    value={bankAccountName}
                    placeholder="Bank Account UserName"
                    onChange={(e) => setBankAccountName(e.target.value)}
                    className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
                  />
                </div>
              </div>
              <div>
                <label className="text-[16px] text-stone-600 font-semibold">
                  UPI ID
                </label>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <input
                    type="string"
                    value={UPI_ID}
                    placeholder="Your UPI ID"
                    onChange={(e) => setUpiid(e.target.value)}
                    className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-[#d6482b] w-[420px] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto lg:w-[640px] my-4"
              type="submit"
              disabled={loading}
            >
              {loading && "Registering..."}
              {!loading && "Register"}
            </button>
        </form>

    </div>          
    </section>
    </>
  )
}

export default SignUp;