import React, { Fragment } from "react";
import key from "../../assets/svg/note_keys.svg";
import './Navbar.css'
import MusicNote from "../General/MusicNote";
const MenuIcon = ()=>{
  return (
    <div className="w-[2rem] h-[2rem] flex flex-col relative justify-between">
      <div className="bg-tin-white h-[15%]"></div>
      <div className="bg-tin-white h-[15%]"></div>
      <div className="bg-tin-white h-[15%]"></div>

    </div>
  )
}

const Navbar = () => {
  return (
    <div className="navbar flex items-end  relative">
      
      <div className="h-[3rem] md:h-[5rem] relative flex gap-2 items-end">
      <div className='icon'>
          <div className='hand'>
              <svg width="126" height="185" viewBox="0 0 126 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.02571 158.508C0.425707 152.908 -0.14096 144.174 0.025707 140.508V43.5076C0.025707 41.1742 1.02569 36.3076 5.02563 35.5076C10.0256 34.5076 11.5256 38.5076 12.5256 41.0076C13.5256 43.5076 11.0256 144.508 13.5256 151.008C16.0256 157.508 19.0256 163.008 35.0256 169.008C47.8256 173.808 61.359 171.008 66.5256 169.008C73.0256 167.174 86.4256 160.308 88.0256 147.508C90.0256 131.508 86.0256 118.508 88.0256 104.008C90.0256 89.5076 89.5256 93.5076 93.0256 83.5076C95.8256 75.5076 104.859 66.1742 109.026 62.5076C113.359 59.0076 122.526 53.2076 124.526 58.0076C127.026 64.0076 124.526 65.0076 124.526 66.5076C124.526 68.0076 121.526 67.0076 113.026 75.5076C106.226 82.3076 101.526 94.6742 100.026 100.008C100.192 105.008 100.426 116.808 100.026 124.008C99.5256 133.008 102.526 148.508 97.5256 157.508C92.5256 166.508 91.5256 166.508 86.0256 171.508C80.5256 176.508 75.0256 179.008 72.0256 180.508C69.6256 181.708 60.359 183.341 56.0256 184.008H46.5256C39.359 183.008 23.1256 179.408 15.5256 173.008C6.02563 165.008 8.52571 165.508 4.02571 158.508Z" fill="#D9D9D9"/>
                  <path d="M22.5256 62.0076V122.508C23.5256 124.174 26.2256 127.408 29.0256 127.008C31.8256 126.608 33.859 123.841 34.5256 122.508V62.0076H22.5256Z" fill="#D9D9D9"/>
                  <path d="M65.5256 62.0076V122.508C66.5256 124.174 69.2256 127.408 72.0256 127.008C74.8256 126.608 76.859 123.841 77.5256 122.508V62.0076H65.5256Z" fill="#D9D9D9"/>
                  <path d="M43.5256 96.0076V6.00757C44.5256 3.54732 47.2256 -0.532776 50.0256 0.0576859C52.8256 0.648148 55.859 4.03937 56.5256 6.00757L55.5256 96.0076H43.5256Z" fill="#D9D9D9"/>
                  <path d="M22.5256 57.0076V18.866C23.5256 17.8152 26.2256 15.7768 29.0256 16.029C31.8256 16.2811 33.859 18.0254 34.5256 18.866V57.0076H22.5256Z" fill="#D9D9D9"/>
                  <path d="M65.5256 57.0076V18.866C66.5256 17.8152 69.2256 15.7768 72.0256 16.029C74.8256 16.2811 76.859 18.0254 77.5256 18.866V57.0076H65.5256Z" fill="#D9D9D9"/>
                  <path d="M43.5256 100.008V121.508C44.5256 122.2 44.5256 127.008 50.0256 126.993C54.0256 126.983 54.859 122.061 55.5256 121.508V100.008H43.5256Z" fill="#D9D9D9"/>
              </svg>
              <div className='keys'>
                  <img className='key leftkey' src={key} alt='key' />
                  <img className='key centerkey' src={key} alt='key' />
                  <img className='key rightkey' src={key} alt='key' />
              </div>
          </div>
        </div>
        <h1>p Beats</h1>
        <div className="bars">
          <div className="bar one"></div>
          <div className="bar two"></div>
          <div className="bar three"></div>
          <div className="bar four"></div>
        </div>
      </div>
      <div className="flex gap-2 items-center relative min-h-[2rem] ml-auto ">
        
        <div className="text-[.7rem] md:text-[1.5rem] text-tin-white font-bold ">Rebornkun</div>
        <div className=" relative min-h-[.2rem] min-w-[.5rem] md:max-h-[1rem]">
          <MusicNote notes={3} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
