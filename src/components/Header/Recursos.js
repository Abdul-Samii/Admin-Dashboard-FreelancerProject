import React, { useState } from 'react';
import { ICONS } from '../constants';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));


const Recursos=()=>{


  const [open,setOpen] = useState(false)

  const toogleTooltip=()=>{
    setOpen(!open)
  }



    return(
        <HtmlTooltip
        open={open}
        enterDelay={0} leaveDelay={200}
        title={
          <React.Fragment>
            <ul className=" w-44 space-y-4">
                
                <li className="flex space-x-4 hover:cursor-pointer hover:bg-slate-200 h-10 ">
                    {/* <ICONS.PencilAltIconS className="h-4 mt-3 ml-3" color="blue"/> */}
                    <p className="text-sm mt-3 ml-3">Ejecutivos</p>
                </li>
                
                <li className="flex space-x-4 hover:cursor-pointer hover:bg-slate-200 h-10 ">
                    {/* <ICONS.LogoutIconO className="h-4 mt-3 ml-3" color="blue"/> */}
                    <p className="text-sm mt-3 ml-3">Grupo Familiar</p>
                </li>

                <li className="flex space-x-4 hover:cursor-pointer hover:bg-slate-200 h-10 ">
                    {/* <ICONS.LogoutIconO className="h-4 mt-3 ml-3" color="blue"/> */}
                    <p className="text-sm mt-3 ml-3">Vehículos de Ejecutivos</p>
                </li>

                <li className="flex space-x-4 hover:cursor-pointer hover:bg-slate-200 h-10 ">
                    {/* <ICONS.LogoutIconO className="h-4 mt-3 ml-3" color="blue"/> */}
                    <p className="text-sm mt-3 ml-3">Protectores</p>
                </li>
                
                <li className="flex space-x-4 hover:cursor-pointer hover:bg-slate-200 h-10 ">
                    {/* <ICONS.LogoutIconO className="h-4 mt-3 ml-3" color="blue"/> */}
                    <p className="text-sm mt-3 ml-3">Vehículos de Protectores</p>
                </li>

                <li className="flex space-x-4 hover:cursor-pointer hover:bg-slate-200 h-10 ">
                    {/* <ICONS.LogoutIconO className="h-4 mt-3 ml-3" color="blue"/> */}
                    <p className="text-sm mt-3 ml-3">Lugares</p>
                </li>

            </ul>
          </React.Fragment>
        }
      >
        <div onClick={()=>toogleTooltip()} onBlur={()=>setOpen(false)} tabIndex={0} 
          className="flex hover:bg-blue-500 hover:cursor-pointer hover:text-white 
            space-x-2 p-3 -mt-1 md:mt-0 md:rounded-full ">
            <ICONS.HomeIconO className="md:h-8 h-5 mt-[1.5px] md:mt-0"/>
            <h2 className="md:text-xl">Recursos</h2>
            <ICONS.ChevronDownIconO className="h-3 mt-2"/>
        </div>
      </HtmlTooltip>
    )
}

export default Recursos