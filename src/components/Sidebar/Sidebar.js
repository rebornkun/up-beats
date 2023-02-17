import React from "react";
import {useNavigate } from "react-router";
import disk from "../../assets/svg/disk.svg";
import Wrench from "../../assets/svg/wrench.svg";
import Logout from "../../assets/svg/logout.svg";
import MusicLibrary from "../../assets/svg/music-library-2.svg";
import profile from "../../assets/svg/profile.svg";

const Sidebar = () => {
  const navigate = useNavigate()

  const handleNavigation = (link)=>{
    console.log(link);
    navigate(link)
  }
  return (
    <div className=" w-[70%] lg:w-[40%] relative md:flex flex-col items-center rounded-full justify-center fixed top-0 left-0">
      <div className=" gap-[2rem] md:gap-[3rem] bg-chill-green py-[2rem] rounded-full flex flex-col items-center mb-8 ">
        <img src={disk} alt=""  className="w-[60%]" onClick={()=>handleNavigation("/")}/>

        <img src={MusicLibrary} alt=""  className="w-[60%]" onClick={()=>handleNavigation("/dashboard/dj-dashboard")}/>

        <img src={profile} alt=""  className="w-[60%]" onClick={()=>handleNavigation("/dashboard/profile")}/>
      </div>

      <div className=" flex flex-col bg-chill-green w-full rounded-full gap-[2rem] md:gap-[3rem] py-[2rem] items-center justify-center">
        <img src={Wrench} alt=""  className="w-[60%]"/>
        <img src={Logout} alt=""  className="w-[60%]"/>
      </div>
      <div className="flex flex-col  gap-[1rem] mt-[2rem] w-full relative">
        {[...Array(3)].map((e, i) => {
          return <div key={i} className="min-h-[1.5rem] min-w-[auto] bg-chill-green"></div>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
