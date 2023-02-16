import Card from '../../components/Card/Card';
import './UserDashBoard.css'
import key1 from '../../assets/svg/Vector (1).svg'
import key2 from '../../assets/svg/music_stroke.svg'
import music from '../../assets/svg/music.svg'
import profile from "../../assets/svg/profile.svg";


const UserDashBoard = () => {

    const users = [
        {
            dj: 'DJ MENT',
            song: 'i wanna knack you by reborn kun'
        },
        {
            dj:'DJ FILLA',
            song: 'FELON by anderson kun'
        },
        {
            dj:'DJ FILLA',
            song: 'FELON by anderson kun'
        },
        {
            dj:'DJ FILLA',
            song: 'FELON by anderson kun'
        },
        {
            dj:'DJ FILLA',
            song: 'FELON by anderson kun'
        },
        {
            dj:'DJ FILLA',
            song: 'FELON by anderson kun'
        }
    ]

    return (
        <div className="ml-0 md:ml-40 lg:ml-50 2xl:w-60 mt-40">
            {users.map(user=>(
                <Card>
                  <div className="flex items-center">
                    <img src={profile} alt="" />
                 <div className="">
                 <div className="flex my-4 space-x-0 md:space-x-2">
                    <h3 className='font-bold text-white'>{user.dj}</h3>
                    <img src={key1} alt="" />
                    <img src={key2} alt="" />
                    <img src={music} alt="" />
                    </div>
                    <p>{user.song}</p>
                 </div>
                  </div>
                </Card>
            ))}
        </div>
    );
}

export default UserDashBoard;