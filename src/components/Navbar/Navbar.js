import React, { Fragment } from "react";
import icon from "../../assets/svg/icon.svg";
import Reception from "../../assets/svg/reception-3.svg";
import User from "../../assets/svg/user.svg";

import { HiMenu } from "react-icons/hi";
import MusicNote from "../General/MusicNote";
const MenuIcon = ()=>{
  return (
    <div className="w-[2rem] h-[2rem] flex flex-col relative justify-between">
      <div className="bg-tin-white h-[15%]"></div>
      <div className="bg-tin-white h-[15%]"></div>
      <div className="bg-tin-white h-[15%]"></div>

    </div>
  )
}

const Navbar = () => {
  return (
    <div className="flex items-end  relative pr-3">
      
      <div className="h-[3rem] md:h-[5rem] relative flex gap-2 items-end">
        <img src={icon} alt="" className="h-[100%]"  />
        <img src={Reception} alt="" className="h-[60%]" />
      </div>
      <div className="flex gap-2 items-center relative min-h-[2rem] ml-auto">
        
        <div className="text-[.7rem] md:text-[1.5rem] text-tin-white font-bold ">Rebornkun</div>
        <div className=" relative min-h-[.2rem] min-w-[.5rem] md:max-h-[1rem]">
          <MusicNote notes={3} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
