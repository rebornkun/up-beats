import React from "react";
import './Sidebar.css'
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
    <div className="sidebar_container">
      <div className="first_bar">
        <img src={disk} alt=""  className="w-[60%]"/>

        <img src={MusicLibrary} alt=""  className="w-[60%]" onClick={()=>handleNavigation("/dashboard/dj-dashboard")}/>

        <img src={profile} alt=""  className="w-[60%]" onClick={()=>handleNavigation("/dashboard/profile")}/>
      </div>

      <div className="second_bar">
        <img src={Wrench} alt=""  className="w-[60%]"/>
        <img src={Logout} alt=""  className="w-[60%]"/>
      </div>
      <div className="third_bar flex flex-col  gap-[1rem] mt-[2rem] w-full relative">
        {[...Array(3)].map((e, i) => {
          return <div key={i} className="min-h-[1.5rem] min-w-[auto] bg-chill-green"></div>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
