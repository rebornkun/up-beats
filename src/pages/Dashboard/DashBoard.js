import Sidebar from '../../components/Sidebar/Sidebar';
import UserDashBoard from '../UserDashBoard/UserDashBoard';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div className='dashboard'>
            
            <UserDashBoard />
        </div>
    );
}

export default DashBoard;