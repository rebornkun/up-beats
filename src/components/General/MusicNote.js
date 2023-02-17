import React from "react";
import PurpleNote from "../../assets/svg/music-note-purple.svg";
import BlueNote from "../../assets/svg/music-note-blue.svg";
import YellowNote from "../../assets/svg/music-note-yellow.svg";

const musicNotes = [
  { image: PurpleNote, id: 1 },
  { image: BlueNote, id: 2 },
  { image: YellowNote, id: 3 },
];
export default function MusicNote({ notes }) {
  // function to only display a specific number of note
  const filtered = musicNotes.filter((item) => item.id <= notes);
  return (
    <div className=" flex gap-2 relative ">
      {filtered.map((item) => {
        return <img key={item.id} src={item.image} alt="" className="h-[100%] w-[100%]" />;
      })}
    </div>
  );
}
