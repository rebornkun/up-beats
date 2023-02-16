import { Navigate, Route, Routes } from 'react-router';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import DashBoard from '../pages/Dashboard/DashBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='body'>
      <nav>
        
      </nav>
      <section>
        <Routes>
          <Route path='/' element={<Navigate to='dashboard' replace={true} />} />
          <Route path='dashboard' element={<DashBoard />} />
          <Route path='*' element={<Navigate to='dashboard' replace={true} />} />
        </Routes>
      </section>

      </div>

      <SplashScreen />
    </div>
  );
}

export default App;
