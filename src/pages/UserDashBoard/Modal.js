import React from "react";
import "./UserDashBoard.css";

export default function Modal({handleSubmit, handleModalDisplay}) {
  return (
    
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        
      <div>
        <label htmlFor="song-name" className="font-[600] text-midnight">What to listen to</label>
        <div>
          <input type="text" id="song-name" className="h-[3rem] w-full" />
        </div>
      </div>

      <div>
        <label htmlFor="dj-name" className="font-[600] text-midnight">Select Dj</label>
        <div>
          <input type="text" id="dj-name" className="h-[3rem] w-full" />
        </div>
       
      </div>
      <div className="self-end flex gap-3">
            <button type="button" className="px-4 py-2 " onClick={handleModalDisplay}>Cancel</button>
            <button type="submit" className="px-4 py-2 ">Request</button>
        </div>
    </form>
  );
}
