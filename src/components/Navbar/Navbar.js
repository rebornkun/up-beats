import React from "react";
import disk from "../../assets/svg/disk.svg";
import vector from "../../assets/svg/Vector.svg";
import Subtarct from "../../assets/svg/Subtract.svg";
import Iconly from "../../assets/svg/Iconly.svg";
import music from "../../assets/svg/musiccap.svg";
import profile from '../../assets/svg/profile.svg'

const Navbar = () => {
  return (
    <div className=" sm:block fixed top-32 sm:top-24 lg:top-40 z-20 ml-8">
      <div className="bg-chill-green rounded-full p-2 mb-8">
        <img src={disk} alt="" className="my-[2em] mx-auto block" />
        <div className="my-[2em]">
          <img src={music} alt="" className=" mx-auto block" />
          <img src={vector} alt="" className=" mx-auto block" />
        </div>
        <img src={profile} alt="" className='my-[2em] mx-auto block' />
      </div>

      <div className="bg-chill-green rounded-full p-2">
        <img src={Subtarct} alt="" className="my-[2em] mx-auto block" />
        <img src={Iconly} alt="" className="my-[1em] mx-auto block" />
      </div>
    </div>
  );
};

export default Navbar;
