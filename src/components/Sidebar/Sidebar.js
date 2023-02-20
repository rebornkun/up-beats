import React, { useEffect } from "react";
import { useLocation } from "react-router";
import "./Sidebar.css";
import { useNavigate } from "react-router";
import disk from "../../assets/svg/disk.svg";
import Wrench from "../../assets/svg/wrench.svg";
import Logout from "../../assets/svg/logout.svg";
import MusicLibrary from "../../assets/svg/music-library-2.svg";
import profile from "../../assets/svg/profile.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  const handleNavigation = (link) => {
    
    navigate(link);
  };

  const checkLink = (path) => {
    console.log(path);
    if (
      path == "/dashboard/profile" ||
      path == "/dashboard/profile/login/user" ||
      path == "/dashboard/profile/login/dj"||
      path == "/dashboard/profile/dj-register" ||
      path == "/dashboard/profile/user-register"
    ) {
      return 1
    }
  };
  return (
    <div className="sidebar_container relative">
      <div className="first_bar ">
        <div
          className={`w-[60%] ${pathname == "/dashboard" ? "active" : "none"} relative`}
          onClick={() => handleNavigation("/dashboard")}
        >
          <img src={disk} alt="" className="h-full w-full" />
        </div>
        <div
          className={`w-[60%] ${
            pathname == "/dashboard/dj-dashboard" ? "active" : "none"
          } relative`}
          onClick={() => handleNavigation("/dashboard/dj-dashboard")}
        >
          <img src={MusicLibrary} alt="" className="h-full w-full" />
        </div>

        <div
          className={`w-[60%] ${checkLink(pathname) ? "active" : "none"} relative`}
          onClick={() => handleNavigation("/dashboard/profile")}
        >
          <img src={profile} alt="" className="h-full w-full" />
        </div>
      </div>

      <div className="second_bar ">
        <div className={`w-[60%] ${pathname == "/dashboard/setting" ? "active" : "none"} relative`}>
          <img src={Wrench} alt="" className="w-full h-full" />
        </div>
        <div className="w-[60%] relative">
          <img src={Logout} alt="" className="w-full h-full" />
        </div>
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
