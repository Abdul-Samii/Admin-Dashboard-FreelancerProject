import React from "react";
import logo from '../../assets/Panel.png'
import { ICONS } from "../constants";
import CCTV from "./CCTV";
import Notification from "./Notification";
import Recursos from "./Recursos";
import RightImage from "./RightImage";
import TRS from "./TRS";

  

const Header = () =>{
    return(
        

        <div className='flex sticky top-0 z-50 h-20 bg-white items-center p-2 lg:px-5 shadow-md'>

{/* Left */}
        <div className='flex items-center '>
            <img
                src={logo}
                className="h-16 w-32 ml-6 -mt-1"
            />
        </div>




{/* Center */}
<nav className='justify-start flex h-14 rounded-full border-blue-200 ml-14 space-x-6'>
        
        <Recursos/>
        <TRS/>
        <CCTV/>
</nav>



{/* Right */}
        <div className='flex items-center sm:space-x-2 flex-grow justify-end md:pr-10 '>
        
            <Notification/>
            <RightImage/>

        <div className="md:hidden mt-3">
             <ICONS.MenuAlt1IconO className="h-8"/>
        </div>
             
        </div>


        </div>

    )
}

export default Header