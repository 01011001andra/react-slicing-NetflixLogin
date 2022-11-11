import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleForm = (data) => {
    console.info(data);
  };
  return (
    <div className="w-screen min-h-screen bg-black bg-cover lg:bg-[url('http://authors.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg')] lg:bg-right flex flex-col">
      <nav className="w-full h-12 flex items-center lg:h-[85px] lg:bg-gradient-to-b lg:from-black">
        <div className="h-full flex items-end ml-3">
          <img
            src="https://fontmeme.com/permalink/221029/88440f5318bc331d60a65eb92e36dc67.png"
            alt="netflix"
            className="w-[78px] lg:w-40"
          />
        </div>
      </nav>
      <div className="max-w-[330px] w-full mx-auto flex flex-col lg:bg-black lg:bg-opacity-80 lg:px-16 lg:py-10 rounded-md lg:max-w-md lg:mb-28">
        <form
          onClick={handleSubmit(handleForm)}
          className="w-full flex flex-col my-[18px] gap-6 mb-8 "
        >
          <h1 className="text-[32px] text-white">Sign In</h1>
          <div className="relative">
            <input
              {...register("email", {
                required: {
                  value: false,
                  message: "Please enter a valid email or phone number.",
                },
              })}
              type="text"
              id="email"
              className={`block rounded-lg ${
                errors?.email && "border-[2px] border-b-[#E87C03]"
              } px-5 pb-2.5 pt-5 w-full bg-[#333333] text-white text-sm appearance-none focus:outline-none focus:bg-[#454545] peer`}
              placeholder=" "
            />
            {errors?.email && (
              <small className="text-[#E87C03] ml-1 mt-1">
                {errors?.email.message}
              </small>
            )}
            <label
              htmlFor="email"
              className="absolute peer-placeholder-shown:text-sm text-base text-[#8C8C75] duration-300 transform -translate-y-4 scale-75 top-[18px] z-10 origin-[0] left-5 peer-focus:text-[#8C8C75] peer-focus:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:top-[18px] peer-focus:-translate-y-4"
            >
              Email or Phone number
            </label>
          </div>
          <div className="relative">
            <input
              {...register("password", {
                required: {
                  value: false,
                  message: "Please enter a valid password or phone number.",
                },
              })}
              type="text"
              id="password"
              className={`block rounded-lg ${
                errors?.password && "border-[2px] border-b-[#E87C03]"
              } px-5 pb-2.5 pt-5 w-full bg-[#333333] text-white text-sm appearance-none focus:outline-none focus:bg-[#454545] peer`}
              placeholder=" "
            />
            {errors?.password && (
              <small className="text-[#E87C03] ml-1 mt-1">
                {errors?.password.message}
              </small>
            )}
            <label
              htmlFor="password"
              className="absolute peer-placeholder-shown:text-sm text-base text-[#8C8C75] duration-300 transform -translate-y-4 scale-75 top-[18px] z-10 origin-[0] left-5 peer-focus:text-[#8C8C75] peer-focus:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:top-[18px] peer-focus:-translate-y-4"
            >
              Password
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-[#E50914] text-white px-4 py-3 rounded-md text-base mt-4">
              Sign In
            </button>
            <div className="w-full flex flex-row justify-between">
              <div>
                <input type="checkbox" id="remember" />
                <label
                  htmlFor="remember"
                  className="text-slate-300 text-xs font-extralight ml-1 "
                >
                  Remember Me?
                </label>
              </div>
              <Link className="text-white text-xs flex items-center">
                Need Help?
              </Link>
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-2 lg:mt-14 mb-[120px]">
          <h1 className="text-[#8C8C75]">
            New to Netflix?{" "}
            <span className="text-white text-md">Sign up now</span>.
          </h1>
          <p className="text-xs text-[#8C8C75]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="text-blue-500">Learn more.</span>
          </p>
        </div>
      </div>
      <footer className=" w-full flex flex-col lg:flex-wrap pb-5 lg:bg-black lg:bg-opacity-80 lg:px-16 rounded-md lg:w-full">
        <hr className="lg:hidden" />
        <div className="max-w-[330px] w-full mx-auto lg:max-w-[1060px]">
          <h1 className="text-md text-[#8C8C75] py-5 ">
            Question? Call Your Mom
          </h1>
          <div className="hidden sm:flex flex-col justify-between max-w-[280px] pb-7 lg:max-w-4xl text-[#8C8C75]">
            <div className="flex flex-row justify-between">
              <h1>FAQ</h1>
              <h1>Help Center</h1>
              <h1>Terms of Use</h1>
              <h1>Privacy</h1>
            </div>
            <div className="flex justify-between max-w-[398px]">
              <h1>Cookie Preferances</h1>
              <h1>Corporate Information</h1>
            </div>
          </div>
          <div className="flex flex-row justify-between max-w-[280px] pb-7 lg:pb-0 lg:max-w-4xl">
            <div className="flex flex-col gap-2 text-white lg:hidden">
              <h1 className="text-xs text-[#8C8C75]">FAQ</h1>
              <h1 className="text-xs text-[#8C8C75]">Terms of Use</h1>
              <h1 className="text-xs text-[#8C8C75]">Cookie Preferences</h1>
            </div>
            <div className="flex flex-col gap-2 text-white lg:hidden">
              <h1 className="text-xs text-[#8C8C75]">Help Center</h1>
              <h1 className="text-xs text-[#8C8C75]">Privacy</h1>
              <h1 className="text-xs text-[#8C8C75]">Corporate Information</h1>
            </div>
          </div>
        </div>
        <div className="max-w-[330px] w-full mx-auto lg:max-w-[1060px] ">
          <select
            name="language"
            id="language"
            className="px-6 py-3 bg-black text-[#8C8C75] border-[1px] border-[#8C8C75]"
          >
            <option value="ENGLISH">ENGLISH</option>
            <option value="INDONESIA">INDONESIA</option>
            <option value="GERMANY">Germany</option>
          </select>
        </div>
      </footer>
    </div>
  );
};

export default Login;
