import Card from '../../components/Card/Card';
import './UserDashBoard.css'
import key1 from '../../assets/svg/music-note-purple.svg'
import key2 from '../../assets/svg/music-note-yellow.svg'
import music from '../../assets/svg/music-note-blue.svg'
import profile from "../../assets/svg/profile.svg";


const UserDashBoard = () => {

    const users = [
        {
            dj: 'DJ MENT',
            song: 'i wanna knack you by reborn kun',
            id: 1,
        },
        {
            dj:'DJ FILLA',
            song: 'FELON by anderson kun',
            id: 2,
        },
        {
            dj:'DJ FILLA',
            song: 'FELON by anderson kun',
            id: 3,
        },
        {
            dj:'DJ FILLA',
            song: 'FELON by anderson kun',
            id: 4,
        },
        {
            dj:'DJ FILLA',
            song: 'FELON by anderson kun',
            id: 5,
        },
        {
            dj:'DJ FILLA',
            song: 'FELON by anderson kun',
            id: 6,
        }
    ]

    return (
        <div className="userdashboard w-[100%]">
            {users.map((user)=>{
                return(
                    <Card key={user.id}>
                  <div className="flex items-center">
                    <img src={profile} alt="" />
                 <div className="">
                 <div className="flex space-x-0 md:space-x-2">
                    <h3 className='font-bold text-white'>{user.dj}</h3>
                    <img src={key1} alt="" />
                    <img src={key2} alt="" />
                    <img src={music} alt="" />
                    </div>
                    <p>{user.song}</p>
                 </div>
                  </div>
                </Card>
                )
                
})}

        </div>
    );
}

export default UserDashBoard;