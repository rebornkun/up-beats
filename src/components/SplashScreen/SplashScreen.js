import './SplashScreen.css'
import icon from '../../assets/svg/splash_icon.svg'

const SplashScreen = () => {
    return (
        <div className="splash_container">
            <img src={icon} alt='icon' />
        </div>
    );
}

export default SplashScreen;