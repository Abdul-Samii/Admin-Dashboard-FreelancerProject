import './App.css';
import {RedirectWithoutLogin } from './components';
import { Dashboard, Login, Registration } from './pages';
import { Routes, Route } from "react-router-dom";
import Ejecutivos from './pages/Recursos/Ejecutivos';
import { CCTVDashboard, Diurno, Historial, Nocturno } from './pages/CCTV';
import {clearToast} from './store/actions'
import { Toast } from './components';
import { connect } from 'react-redux';

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