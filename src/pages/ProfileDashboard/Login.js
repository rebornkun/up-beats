import React from "react";

const Login = () => {
  return (
    <section className="bg-chill-green flex flex-col text-white h-fit pt-[2.5rem]  pb-[3rem]  w-[90%] md:w-[50%] lg:w-[40%] left-[50%] top-[50%] translate-y-[-50%]  translate-x-[-50%] p-4 relative rounded-2xl gap-[2rem] ">
      <h1 className="text-center mt-3 text-2xl">Sign In</h1>
      <div className="w-full ">
        <input
          type="text"
          placeholder="Username"
          className=" text-black rounded-full w-full h-[3rem] pl-5"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className=" text-black rounded-full w-full h-[3rem] pl-5"
        />
      </div>

      <div className="flex justify-center items-center">
        <input type="checkbox" name="" id="" />
        <p className="ml-2">Remember Me</p>
      </div>

      <button type="submit" className=" rounded-full flex bg-midnight hover:bg-[#0A0523] transition-all h-[3rem] items-center justify-center px-6">
        Sign In
      </button>
    </section>
  );
};

export default Login;
