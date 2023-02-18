import React from 'react'
import {Routes, Route } from 'react-router';
import Login from './Login';
import SignUp from './Signup';
export default function ProfileDashboard() {
  return (
    <div>
      <Routes>
                <Route index element={<Login />}/>          
       </Routes>
    </div>
  )
}
