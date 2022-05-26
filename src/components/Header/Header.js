import React,{useState} from "react";
import logo from '../../assets/logo.png'
import { DropDown } from "../constants";
import CCTV from "./CCTV";
import Notification from "./Notification";
import Recursos from "./Recursos";
import RightImage from "./RightImage";
import TRS from "./TRS";

  

const Header = ({items}) =>{

    const [modal,setModal] = useState(false)

    const handleModal=()=>{
        setModal(!modal)
    }



    return(
        
<div >
        <div className='flex sticky top-0 z-50 h-20 bg-white items-center p-2 lg:px-5 shadow-md'>

{/* Left */}
        <div className='flex items-center '>
            <img
                src={logo}
                className="h-16 w-32 ml-6 -mt-1"
            />
        </div>




{/* Center */}
<nav className='hidden justify-start md:flex h-14 rounded-full border-blue-200 ml-14 space-x-6'>
        
        {(items=="all"||items=="recursos")&&<Recursos item={items}/>}
        {(items=="all"||items=="trs")&&<TRS item={items}/>}
        {(items=="all"||items=="cctv")&&<CCTV item={items}/>}
</nav>



{/* Right */}
        <div className='flex items-center sm:space-x-2 flex-grow justify-end md:pr-10 '>
        
            <Notification/>
            <RightImage handleModal={handleModal}/>
             
        </div>


        </div>



{/* MOBILE */}
        <div>
            <nav className=' justify-center md:hidden flex h-10 bg-slate-200 border-blue-200  space-x-2'>
        
                <Recursos/>
                <TRS/>
                <CCTV/>

            </nav>
        </div>

        {
            modal&&
            <div className="flex justify-center w-full z-50 fixed">
            <div className="mt-10 h-fit pb-4 rounded-md bg-white border-2 shadow-md z-50 lg:w-1/3 absolute">
                <div className=" z-50 text-left pl-4 pt-2">
                    <h3 className="font-bold text-2xl">Estas por cerrar sesión</h3>
                </div>
                <p className="text-center mt-14">Debes escojer a tu compañero que relevara tu puesto:</p>

                <div className="justify-center flex -mt-12">
                    <DropDown/>
                </div>

                <div className="flex justify-center space-x-4 mt-4">
                    <h3 onClick={()=>handleModal()} className="border-2 w-20 rounded-md text-center font-semibold hover:cursor-pointer
                        hover:bg-slate-200 active:bg-slate-50">Salir</h3>
                    <h3 onClick={()=>handleModal()} className="border-2 w-20 rounded-md text-center font-semibold hover:cursor-pointer
                        hover:bg-slate-200 active:bg-slate-50">Cancelar</h3>
                </div>

            </div>
            </div>
        }


    </div>

    )
}

export default Header