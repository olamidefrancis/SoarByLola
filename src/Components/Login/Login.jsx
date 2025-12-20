import './Login.css'
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f2e6c8] flex items-center justify-center align-center px-4">
      <div className="w-full flex flex-col md:flex-row md:justify-center justify-between md:gap-y-0 gap-y-16 gap-x-2 md:gap-x-2">

        {/* LEFT – LOGIN */}
        <div className="flex align-center flex-col justify-center md:w-[40vw] gap-y-4  p-6 padright">
          
          <h1 className="text-3xl md:text-4xl tracking-widest text-[#141414] mb-10 flex   justify-center md:justify-start">
            WELCOME BACK!
          </h1>

          {/* EMAIL */}
          <div className="mb-6 flex flex-col gap-y-2">
            <label className="block text-xl text-[#141414] mb-2">
              Email Address:*
            </label>
            <input
              type="email"
              className="w-full border border-[#141414]/20 px-4 py-3 rounded-md bg-white focus:outline-none focus:border-[#141414] h-[34px] text-xl padword"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4 flex flex-col gap-y-2">
            <label className="block text-xl text-[#141414] mb-2">
              Password:*
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-[#141414]/20 px-4 py-3 rounded-md bg-white focus:outline-none focus:border-[#141414] h-[34px] text-xl padword"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs tracking-widest text-[#141414]/70"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          {/* FORGOT PASSWORD */}
          <Link
            to="/forgot-password"
            className="text-xl underline text-[#141414] mb-8 md:w-fit w-full flex item-center justify-center"
          >
            Forgot Your Password?
          </Link>

          {/* SIGN IN BUTTON */}
          <button className="border border-[#141414] px-10 py-3 uppercase tracking-widest text-[#141414] hover:bg-[#141414] hover:text-[#f2e6c8] transitionmd:w-fit w-full flex item-center justify-center h-[24px]">
            Sign In →
          </button>
        </div>

        {/* RIGHT – CREATE ACCOUNT */}
        <div className="flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-[#141414]/20 pt-12 md:pt-0 gap-y-3 padleft ">

          <h2 className="text-2xl md:text-3xl tracking-widest text-[#141414] mb-10 ">
            DON'T HAVE AN ACCOUNT?
          </h2>

          <Link
            to="/register"
            className="border border-[#141414] px-14 py-6 uppercase tracking-widest text-[#141414] hover:bg-[#141414] hover:text-[#f2e6c8] transition pad"
          >
            Create an Account →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;


