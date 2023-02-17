import Sidebar from '../../components/Sidebar/Sidebar';
import UserDashBoard from '../UserDashBoard/UserDashBoard';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div className='flex relative w-full'>
            
            <UserDashBoard />
        </div>
    );
}

export default DashBoard;