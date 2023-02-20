import React from 'react'
import {Routes, Route } from 'react-router';
import LoginOption from './LoginOption';
import {DjSignUp, UserSignup} from './Signup';
import { UserLogin, DjLogin } from './Login';
export default function ProfileDashboard() {
  return (
    <div className='w-full relative'>
      <Routes>
                <Route index element={<LoginOption />}/> 
                <Route path="login/user" element={<UserLogin />} /> 
                <Route path="login/dj" element={<DjLogin />} /> 
                <Route path="dj-register" element={<DjSignUp />} /> 
                <Route path="user-register" element={<UserSignup />} /> 






       </Routes>
    </div>
  )
}
