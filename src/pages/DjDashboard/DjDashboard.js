import React from "react";
import key1 from "../../assets/svg/music-note-purple.svg";
import key2 from "../../assets/svg/music-note-yellow.svg";
import music from "../../assets/svg/music-note-blue.svg";
import profile from "../../assets/svg/profile.svg";
import Union from "../../assets/svg/Union.svg";
import deleteIcon from "../../assets/svg/Subtract.svg";
import Card from "../../components/Card/Card";

export default function DjDashboard() {
  const requested_music = [
    {
      user: "Rebornkun",
      song: "Fly away by 21 savage",
      id: 1,
    },
    {
      user: "Guest 495",
      song: "i wanna knack you by reborn kun",
      id: 2,
    },
    {
      user: "Rebornkun",
      song: "Fly away by 21 savage",
      id: 3,
    },
    {
      user: "Rebornkun",
      song: "Fly away by 21 savage",
      id: 4,
    },
    {
      user: "Rebornkun",
      song: "Fly away by 21 savage",
      id: 5,
    },
    {
      user: "Rebornkun",
      song: "Fly away by 21 savage",
      id: 6,
    },
  ];

  return (
    <div className="userdashboard w-[90%]">
      {requested_music.map((musics) => {
        return (
          <Card key={musics.id}>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={profile} alt="" />
                <div className="">
                  <div className="flex space-x-0 md:space-x-2">
                    <h3 className="font-bold text-white">{musics.user}</h3>
                    <img src={key1} alt="" />
                    <img src={key2} alt="" />
                    <img src={music} alt="" />
                  </div>
                  <p>{musics.song}</p>
                </div>
              </div>
              <div className="flex">
                <div className="sm:bg-green sm:p-8 sm:my-[-2rem]">
                  <img src={Union} alt="" className="block mt-4 w-[60%] sm:w-full" />
                </div>
                <div className="sm:bg-red sm:p-8 sm:my-[-2rem] rounded-tr-2xl rounded-br-2xl">
                  <img src={deleteIcon} alt="" className="block mt-4 w-[60%] sm:w-full" />
                </div>
              </div>
            </div>
          </Card>
        );
      })}
      
    </div>
  );
}
