import React from "react";
import logo from '../../assets/logo.png'
import CCTV from "./CCTV";
import Notification from "./Notification";
import Recursos from "./Recursos";
import RightImage from "./RightImage";
import TRS from "./TRS";

  

const Header = ({items}) =>{
    return(
        
<div>
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
            <RightImage/>
             
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



    </div>

    )
}

export default Header