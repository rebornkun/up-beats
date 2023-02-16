import './SplashScreen.css'
import icon from '../../assets/svg/icon.svg'

const SplashScreen = () => {
    return (
        <div className="splash_container">
            <img src={icon} alt='icon' className='w-[45%] sm:w-[30%] md:w-[20%]'/>
        </div>
    );
}

export default SplashScreen;