import React from "react";

const Login = () => {
  return (
    <section className="bg-chill-green text-white h-[50vh] md:h-[45vh] p-4 w-[100%] md:w-[40%] md:left-[30%] rounded-2xl absolute top-16">
      <div className="">
        <h1 className="text-center mt-3 text-2xl">Sign In</h1>
        <input
          type="text"
          placeholder="Username"
          className="my-4 text-black rounded-full md:w-[80%] p-2 pl-4 mx-auto block"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 text-black rounded-full md:w-[80%] p-2 pl-4 mx-auto block"
        />
        <div className="flex justify-center">
          <input type="checkbox" name="" id="" />
          <p className="ml-2">Remember Me</p>
        </div>
        <button type="submit" className="my-4 rounded-full p-2 mx-auto block bg-midnight px-8">
          Sign In
        </button>
      </div>
    </section>
  );
};

export default Login;
