import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";

export const UserLogin = () => {
  const [userValue, setUserValue] = useState({
    username: "",
    password: "",
  });

  const handleUserInput = ({ target }) => {
    setUserValue({
      ...userValue,
      [target.name]: target.value,
    });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    console.log(userValue);
  };

  return (
    <form
      onSubmit={handleUserSubmit}
      className=" bg-tin-white user-form flex flex-col h-fit pt-[2.5rem]  pb-[3rem]  w-[90%] md:w-[50%] lg:w-[40%] left-[50%] top-[50%] translate-y-[-50%]  translate-x-[-50%] p-4 relative rounded-2xl gap-[2rem] "
    >
      <h1 className="text-center mt-3 text-2xl">User Sign In</h1>
      <fieldset className="fieldset">
        <legend className="px-2">username</legend>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={userValue.username}
          autoComplete="off"
          onChange={handleUserInput}
          className=" text-black rounded-full w-full h-[2.5rem] -ml-1 pl-5"
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="px-2">password</legend>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userValue.password}
          onChange={handleUserInput}
          autoComplete="off"
          className=" text-black rounded-full w-full h-[2.5rem] -ml-1 pl-3"
        />
      </fieldset>

      <div className="flex justify-center items-center">
        <input type="checkbox" name="" id="" />
        <p className="ml-2">Remember Me</p>
      </div>
      <p cla>Don't have an account? <Link to="/dashboard/profile/user-register" className="text-chill-green hover:underline">Sign up</Link></p>
      <button
        type="submit"
        className=" h-[3rem] w-full  self-center bg-chill-green text-tin-white hover:bg-[#0A0523] transition-all"
      >
        Sign In
      </button>
    </form>
  );
};

export const DjLogin = () => {
  const [djLoginValue, setDjLoginValue] = useState({
    username: "",
    password: "",
  });

  const handleUserInput = ({ target }) => {
    setDjLoginValue({
      ...djLoginValue,
      [target.name]: target.value,
    });
  };

  const handleDjSubmit = (e) => {
    e.preventDefault();       
    console.log(djLoginValue);
  };
  return (
    <form
      onSubmit={handleDjSubmit}
      className="dj-form flex flex-col bg-tin-white gap-6 md:w-[60%] lg:w-[40%] relative left-[50%] translate-x-[-50%] mt-[6rem] lg:mt-[10rem] px-4 py-6 rounded-xl"
    >
      <p className="text-center">Login as Dj</p>

       <fieldset className="fieldset">
        <legend>Username</legend>
        <input
          type="text"
          id="dj-login"
          placeholder="username"
          value={djLoginValue.username}
          name="username"
          className="h-[2.5rem] rounded-full mt-2 pl-3 w-full"
          autoComplete="off"
          onChange={handleUserInput}
        />
       </fieldset>
       <fieldset className="fieldset flex">
        <legend className="px-2">Password</legend>
        <input
          type="text"
          placeholder="password"
          name="password"
          value={djLoginValue.password}
          autoComplete="off"
          onChange={handleUserInput}
          className=" text-black rounded-full w-full h-[2.5rem] -ml-1 pl-5"
        />
      </fieldset>
      
      <p cla>
        Don't have a DJ id?
        <Link to="/dashboard/profile/dj-register" className="text-chill-green">
        Get id
        </Link>
      </p>
      <button
        type="submit"
        className="h-[3rem] w-full  self-center bg-chill-green text-tin-white hover:bg-[#0A0523] transition-all"
      >
        Submit
      </button>
    </form>
  );
};
