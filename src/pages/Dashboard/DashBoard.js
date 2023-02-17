import {Routes, Route } from 'react-router';

import DjDashboard from '../DjDashboard/DjDashboard';
import ProfileDashboard from '../ProfileDashboard/ProfileDashboard';
import UserDashBoard from '../UserDashBoard/UserDashBoard';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div className='dashboard flex relative w-full'>
            <Routes>
                <Route index element={<UserDashBoard />}/>
                <Route path='/dj-dashboard' element={<DjDashboard />} />
                <Route path='/profile' element={<ProfileDashboard />} />
            </Routes>
            
           
        </div>
    );
}

export default DashBoard;