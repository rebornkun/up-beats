import { Navigate, Route, Routes } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SplashScreen from '../components/SplashScreen/SplashScreen';
import DashBoard from "../pages/Dashboard/DashBoard";
import "./App.css";
import io from 'socket.io-client';
import { useEffect, useState } from "react";
import upbeatDataService from "../services/upbeatApi";
import appContext from '../context/AppContext.js'
const socket = io.connect("http://localhost:5000")
console.log(socket)

// https://www.youtube.com/watch?v=djMy4QsPWiI&ab_channel=PedroTech
function App() {

  const [userData, setUserData] = useState()
  useEffect(()=>{
    // localStorage.clear();
    let guestcode = localStorage.getItem('guestCode');
    let userData = localStorage.getItem('userData');
    if (userData){
      setUserData(userData)
      console.log('userData exist')
    }else if(guestcode){
      setUserData(guestcode)
      console.log('guest exist')
    }else{
      getGuestCode()
      console.log('none exists')
    }

    // socket.emit()
  },[])
  console.log(userData)

  const getGuestCode = async () => {
     let res = await upbeatDataService.getGuestCode()
     const guestcode = res.data.code 
     localStorage.setItem('guestCode', guestcode);
  }
  
  return (
    <appContext.Provider values={{userData, setUserData}}>
      <div className="App">
        <div className="body">
          <header className="fixed w-full top-0 bg-midnight z-[1000] py-2">
            <Navbar />
          </header>

          <div className="myContainer">
            <nav className="">
              <Sidebar />
            </nav>
            <section>
              <Routes>
                <Route path="/" element={<Navigate to="dashboard" replace={true} />} />
                <Route path="dashboard/*" element={<DashBoard />} />
                <Route path="*" element={<Navigate to="dashboard" replace={true} />} />
              </Routes>
            </section>
          </div>
        
        </div>

        <SplashScreen />
      </div>
    </appContext.Provider>
  );
}

export default App;
