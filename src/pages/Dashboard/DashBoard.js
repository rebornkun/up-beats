import { useEffect, useState } from 'react';
import {Routes, Route } from 'react-router';
import DjDashboard from '../DjDashboard/DjDashboard';
import ProfileDashboard from '../ProfileDashboard/ProfileDashboard';
import Landing from './Landing';
import UserDashBoard from '../UserDashBoard/UserDashBoard';
import './DashBoard.css'

const DashBoard = () => {

    // const [socket, setSocket] = useState(null);

    // useEffect(() => {
    //     const newSocket = io(`https://localhost:5000/api/v1/upbeats`);
    //     setSocket(newSocket);
    //     socket.emit('connection');
    //     return () => newSocket.close();
    // }, [setSocket]);

    return (
        <div className='dashboard flex relative w-[100%] min-h-[100%]'>
            <Routes>
                <Route index element={<Landing />}/>
                <Route path='/dj-dashboard' element={<DjDashboard />} />
                <Route path='/profile/*' element={<ProfileDashboard />} />
            </Routes>
            
           
        </div>
    );
}

export default DashBoard;