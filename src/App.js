import './App.css';
import {RoutesComponent } from './components';
import { Header } from './components/Header';
import { Dashboard, Login, LoginOption } from './pages';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-100 h-screen">
      
    {/* HEADER */}
    {/* <Header/> */}
    {/* <LoginOption/> */}
    {/* <Login/> */}
    

    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
