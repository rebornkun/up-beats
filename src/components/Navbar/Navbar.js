import React, { Fragment } from "react";
import icon from "../../assets/svg/icon.svg";
import key1 from "../../assets/svg/Vector (1).svg";
import key2 from "../../assets/svg/music_stroke.svg";
import music from "../../assets/svg/music.svg";

const Navbar = () => {
  return (
    <Fragment>
    <div className="flex justify-between fixed">
        <img src={icon} alt="" />
    </div>
    </Fragment>
  );
};

export default Navbar;
