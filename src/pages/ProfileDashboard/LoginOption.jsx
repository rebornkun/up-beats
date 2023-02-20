import React from "react";
import { useNavigate } from "react-router";
import "./profile.css";

export default function LoginOption() {
  const navigate = useNavigate();
  const handleLoginOption = (path, role) => {
    navigate(`/dashboard/profile/login/${path}`, { state: { role }, replace: true });
  };
  return (
    <div className="flex flex-col relative lg:w-[50%] gap-[3rem] text-tin-white left-[50%]  translate-x-[-50%] mt-[3rem] lg:mt-[8rem] ">
      <h3 className="text-center text-lg">Please Sign in</h3>

      <div className="flex flex-col md:flex-row justify-evenly gap-y-8 items-center">
        <button className="scaling bg-chill-green text-inherit font-bold text-lg lg:text-xl h-[8rem] w-[8rem] rounded-full flex items-center justify-center shadow-2xl shadow-sky-800" onClick={()=>handleLoginOption("user","user")}>
          User
        </button>
        <button className="scaling bg-chill-green text-inherit font-bold text-lg lg:text-xl h-[8rem] w-[8rem] rounded-full flex items-center justify-center shadow-2xl  shadow-sky-800" onClick={()=>handleLoginOption("dj", "dj")}>
          Dj
        </button>
      </div>
    </div>
  );
}
