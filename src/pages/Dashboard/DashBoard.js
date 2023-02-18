import {Routes, Route } from 'react-router';

import DjDashboard from '../DjDashboard/DjDashboard';
import ProfileDashboard from '../ProfileDashboard/ProfileDashboard';
import UserDashBoard from '../UserDashBoard/UserDashBoard';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div className='dashboard flex relative w-[100%] pl-3 min-h-[100%]'>
            <Routes>
                <Route index element={<UserDashBoard />}/>
                <Route path='/dj-dashboard' element={<DjDashboard />} />
                <Route path='/profile/*' element={<ProfileDashboard />} />
            </Routes>
            
           
        </div>
    );
}

export default DashBoard;