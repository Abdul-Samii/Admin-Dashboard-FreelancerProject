import './App.css';
import {RedirectWithoutLogin } from './components';
import { Dashboard, Login, Registration } from './pages';
import { Routes, Route } from "react-router-dom";
import Ejecutivos from './pages/Recursos/Ejecutivos';
import { CCTVDashboard, Diurno, Historial, Nocturno } from './pages/CCTV';
import {clearToast} from './store/actions'
import { Toast } from './components';
import { connect } from 'react-redux';
import GrupoFamiliar from './pages/Recursos/GrupoFamiliar';
import VehicleEjectivos from './pages/Recursos/VehicleEjectivos';
import Protectores from './pages/Recursos/Protectores';
import VehicleProtectores from './pages/Recursos/VehicleProtectores';
import Lugares from './pages/Recursos/Lugares';
import { HistorialMovimiento } from './pages/TRS';

function App(props) {


  return (
    <div className="bg-slate-100 h-full ">
      {props.isToastShowing && <Toast 
                    {...props.toastConfig} 
                    isToastShowing={props.isToastShowing}
                    clearToast={() => props.clearToast()} 
                    />}
    {/* HEADER */}
    {/* <Header/> */}
    {/* <LoginOption/> */}
    {/* <Login/> */}
    
    
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Registration/>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='ejecutivos' element={<Ejecutivos/>} />
        <Route path='grupofamiliar' element={<GrupoFamiliar/>}/>
        <Route path='vehiculosejecutivos' element={<VehicleEjectivos/>}/>
        <Route path='protectores' element={<Protectores/>}/>
        <Route path='vehiculosprotectores' element={<VehicleProtectores/>}/>
        <Route path='lugares' element={<Lugares/>}/>


        {/* TRS */}
        <Route path='historialhovimiento' element={<HistorialMovimiento/>} />
        

        <Route path='cctvdashboard' element={<CCTVDashboard/>} />
        <Route path='cctv/diurno' element={<Diurno/>} />
        <Route path='cctv/nocturno' element={<Nocturno/>}/>
        <Route path='cctv/historial' element={<Historial/>}/>

      </Routes>
    </div>
  );
}

const mapStateToProps = props =>{
  // // console.log(" props===========================", props)
  return{
    isToastShowing :props.toast.isToastShowing,
    toastConfig:props.toast.config

  }
}

export default connect(mapStateToProps, {clearToast})(App)