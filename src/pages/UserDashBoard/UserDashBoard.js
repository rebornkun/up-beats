import { useState,useRef } from "react";
import useClickAwayListener from "../../hooks/useClickAway";
import Card from "../../components/Card/Card";
import "./UserDashBoard.css";
import key1 from "../../assets/svg/music-note-purple.svg";
import key2 from "../../assets/svg/music-note-yellow.svg";
import music from "../../assets/svg/music-note-blue.svg";
import profile from "../../assets/svg/profile.svg";
import Mic from "../../assets/svg/mic.svg";
import Modal from "./Modal";

const users = [
  {
    dj: "DJ MENT",
    song: "i wanna knack you by reborn kun",
    id: 1,
  },
  {
    dj: "DJ FILLA",
    song: "FELON by anderson kun",
    id: 2,
  },
  {
    dj: "DJ FILLA",
    song: "FELON by anderson kun",
    id: 3,
  },
  {
    dj: "DJ FILLA",
    song: "FELON by anderson kun",
    id: 4,
  },
  {
    dj: "DJ FILLA",
    song: "FELON by anderson kun",
    id: 5,
  },
  {
    dj: "DJ FILLA",
    song: "FELON by anderson kun",
    id: 6,
  },
];

const UserDashBoard = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const ref = useRef(null)

  //yet to resolve it i don tire
//   useClickAwayListener(ref, ()=>{
//     setDisplayModal(false)
//   })

  const handleModalDisplay = ()=>{
    setDisplayModal(prev=> !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleModalDisplay()
  };
  return (
    <div className="userdashboard w-[90%]">
      {users.map((user) => {
        return (
          <Card key={user.id}>
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
          </Card>
        );
      })}
      <div className="fixed right-[10%] bottom-[5%] h-3rem w-3rem z-[500] bg-black rounded-full" onClick={handleModalDisplay}>
        <img src={Mic} alt="" />
      </div>
      {displayModal && (
        <div  className="fixed top-0 right-0 left-0 bottom-0 bg-overlay z-[2000] flex items-center justify-center">
            <div  className="relative bg-white w-[80%] md:w-[50%] lg:w-[40%]  px-[2rem] py-[4rem] ">
          <Modal  handleSubmit={handleSubmit} handleModalDisplay={handleModalDisplay}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashBoard;
