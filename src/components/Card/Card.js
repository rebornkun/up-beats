import React, { Fragment } from 'react'
import key1 from "../../assets/svg/music-note-purple.svg";
import key2 from "../../assets/svg/music-note-yellow.svg";
import music from "../../assets/svg/music-note-blue.svg";
import profile from "../../assets/svg/profile.svg";

const Card = ({user}) => {
  return (
   <Fragment>
    <div className=" bg-chill-green rounded-2xl py-4 px-2 mb-4">
    <div className="flex items-center">
              <img src={profile} alt="" />
              <div className="">
                <div className="flex space-x-0 md:space-x-2">
                  <h3 className="font-bold text-white">{user.dj}</h3>
                  <img src={key1} alt="" />
                  <img src={key2} alt="" />
                  <img src={music} alt="" />
                </div>
                <p>{user.song}</p>
              </div>
            </div>
    </div>
   </Fragment>
  )
}

export default Card