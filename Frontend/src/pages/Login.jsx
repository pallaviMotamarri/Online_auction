import { login } from "@/store/slices/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated, loading]);

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033]">
        <div className="bg-gradient-to-r from-[#2606f822] via-[#05e92822] to-[#eb101033] border-4 border-dashed border-stone-400 mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md sm:w-[600px] sm:h-[450px]">
          <h1
            className={`text-[#d6482b] text-3xl font-bold mb-2 min-[480px]:text-3xl md:text-3xl xl:text-3xl 2xl:text-3xl`}
          >
            Login
          </h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-500">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-500">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
              />
            </div>
            <button
              className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto my-4"
              type="submit"
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
