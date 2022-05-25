import './App.css';
import {RoutesComponent } from './components';
import { Header } from './components/Header';
import { Dashboard, Login, LoginOption } from './pages';
import { Routes, Route, Link } from "react-router-dom";
import Ejecutivos from './pages/Recursos/Ejecutivos';
import { CCTVDashboard } from './pages/CCTVDashboard';

function App() {
  return (
    <div className="bg-slate-100 h-full ">
      
    {/* HEADER */}
    {/* <Header/> */}
    {/* <LoginOption/> */}
    {/* <Login/> */}
    

    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='ejecutivos' element={<Ejecutivos/>} />
        

        <Route path='cctvdashboard' element={<CCTVDashboard/>} />

      </Routes>
    </div>
  );
}

export default App;
