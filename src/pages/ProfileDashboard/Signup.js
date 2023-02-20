import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

export const UserSignup = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    username: "",
    password: "",
  });

const handleInput =({target})=>{
setUserInput({
  ...userInput,
  [target.name]: target.value
})
}
  const handleUserSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
  };
  return (
    <form onSubmit={handleUserSubmit} className="bg-tin-white relative left-[50%] translate-x-[-50%] md:w-[70%] lg:w-[40%] mt-[2rem] md:mt-[3rem] lg:mt-[5rem] flex flex-col gap-4 px-4 py-4 rounded-lg">
      <p className="text-center font-bold">User Registration</p>
      <Input label="Email" type="email" name="email" id="user-email" value={userInput.email} onChange={handleInput}/>
      <Input label="Username" type="text" name="username" id="username" value={userInput.username} onChange={handleInput}/>
      <Input label="Password" type="password" name="password" id="password" value={userInput.password} onChange={handleInput}/>
      <p>have an account? <Link to="/dashboard/profile/login/user" className="text-chill-green hover:underline">Sign in</Link></p>
      <button type="submit" className="h-[3rem] bg-chill-green text-white hover:bg-midnight">
        Submit
      </button>
    </form>
  );
};

export const DjSignUp = () => {
  const [djInputs, setDjInputs] = useState({
    firstname: "",
    surname: "",
    email: "",
    djId: "",

  })
  const handleInput =({target})=>{
    setDjInputs({
      ...djInputs,
      [target.name]: target.value
    })
    }

    const handleDjSubmit = (e)=>{
      e.preventDefault()
      console.log(djInputs);
    }

    const generateId = ()=>{
      if(djInputs.firstname !== ""){
      const id =Math.floor( Math.random()*(99999 - 10000))
      setDjInputs({
        ...djInputs,
        djId: djInputs.firstname + id
        
      })}
    }
  return (
    <form onSubmit={handleDjSubmit} className="bg-tin-white relative left-[50%] translate-x-[-50%] md:w-[70%] lg:w-[40%] mt-[2rem] md:mt-[3rem] lg:mt-[5rem] flex flex-col gap-4 px-4 py-4 rounded-lg">
      <p className="text-center font-bold">Dj Registration</p>
      <Input label="FirstName" type="text" name="firstname" id="firstname" value={djInputs.firstname} onChange={handleInput}/>
      <Input label="Surname" type="text" name="surname" id="surname" value={djInputs.surname} onChange={handleInput}/>

      <Input label="Email" type="email" name="email" id="user-email" value={djInputs.email} onChange={handleInput}/>
      <div className="flex">
       <div className="w-full"><Input type="text" readonly={true} name="djId" value={djInputs.djId} /></div>
        <button className="px-3 py-2" onClick={generateId} type="button">Generate</button>
      </div>
      <p>Have an id? <Link to="/dashboard/profile/login/dj" className="text-chill-green hover:underline">sign in</Link></p>
      <button type="submit" className="h-[3rem] bg-chill-green text-white hover:bg-midnight">
        Submit
      </button>
    </form>
  );
};
