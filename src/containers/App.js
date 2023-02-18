import { Navigate, Route, Routes } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SplashScreen from '../components/SplashScreen/SplashScreen';
import DashBoard from "../pages/Dashboard/DashBoard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="body">
        <header className="fixed w-full top-0 bg-midnight z-[1000] py-2">
          <Navbar />
        </header>

        <div className="myContainer">
          <nav className="">
            <Sidebar />
          </nav>
          <section>
            <Routes>
              <Route path="/" element={<Navigate to="dashboard" replace={true} />} />
              <Route path="dashboard/*" element={<DashBoard />} />
              <Route path="*" element={<Navigate to="dashboard" replace={true} />} />
            </Routes>
          </section>
        </div>
       
      </div>

      <SplashScreen />
    </div>
  );
}

export default App;
