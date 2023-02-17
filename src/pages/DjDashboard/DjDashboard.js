import React from 'react'
import key1 from '../../assets/svg/music-note-purple.svg'
import key2 from '../../assets/svg/music-note-yellow.svg'
import music from '../../assets/svg/music-note-blue.svg'
import profile from "../../assets/svg/profile.svg";
import Card from '../../components/Card/Card';

export default function DjDashboard() {
  const requested_music = [
    {
        user: 'Rebornkun',
        song: 'Fly away by 21 savage',
        id: 1,
    },
    {
        user:'Guest 49574i54545',
        song: 'i wanna knack you by reborn kun',
        id: 2,
    },
    {
      user: 'Rebornkun',
      song: 'Fly away by 21 savage',
        id: 3,
    },
    {
      user: 'Rebornkun',
      song: 'Fly away by 21 savage',
        id: 4,
    },
    {
      user: 'Rebornkun',
      song: 'Fly away by 21 savage',
        id: 5,
    },
    {
      user: 'Rebornkun',
      song: 'Fly away by 21 savage',
        id: 6,
    }
]

return (
    <div className="userdashboard w-[90%]">
        {requested_music.map((musics)=>{
            return(
                <Card key={musics.id}>
              <div className="flex items-center">
                <img src={profile} alt="" />
             <div className="">
             <div className="flex space-x-0 md:space-x-2">
                <h3 className='font-bold text-white'>{musics.user}</h3>
                <img src={key1} alt="" />
                <img src={key2} alt="" />
                <img src={music} alt="" />
                </div>
                <p>{musics.song}</p>
             </div>
              </div>
            </Card>
            )
            
})}

    </div>
);
}
