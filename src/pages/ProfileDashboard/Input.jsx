import React, { useState } from "react";
import "./profile.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function Input({ type, name, id, label,value, onChange, readonly }) {
  const [visible, setVisible] = useState(false);
  const setType = (type) => {
    if (type !== "password") {
      return type;
    }
    if (type == "password") {
      if (visible) {
        return "text";
      } else {
        return "password";
      }
    }
  };

  
  return (
    <div className="flex flex-col relative">
      <label htmlFor={id}>{label}</label>
      <div className="flex items-center w-full input-component pr-3">
        <input
          type={setType(type)}
          id={id}
          required
          value={value}
          onChange={onChange}
          name={name}
          readOnly={readonly}
          autoComplete="off"
          className=" h-[3rem] pl-4 caret-chill-green w-full border-none"
        />
        {type === "password" && (
          <div onClick={() => setVisible((prev) => !prev)}>
            {visible ? (
              <MdVisibility size={24} color="#2BD4A4" />
            ) : (
              <MdVisibilityOff size={24} color="#2BD4A4" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
