import React, { useRef, useState } from 'react';
import { ICONS } from '../constants';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { ClickOutSide } from '../clickOutside/ClickOutSide';
import { useNavigate } from 'react-router-dom';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 620,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));




const TRS=()=>{

  const navigate = useNavigate()


  const [open,setOpen] = useState(false)


  const wrapperRef = useRef(null);
  ClickOutSide(wrapperRef,setOpen);


  const toogleTooltip=()=>{
    setOpen(!open)
  }

  return(
        <HtmlTooltip
        open={open}
        enterDelay={0} leaveDelay={200}
        title={
          <React.Fragment>
            <ul className=" w-80 space-y-4" ref={wrapperRef}>
                
                <li onClick={()=>
                  {
                    if(window.location.href!==window.location.protocol + '//' + window.location.host+"/historialmovimiento")
                 { 
                    navigate('/historialmovimiento')
                 }
                  }} className="flex space-x-4 hover:cursor-pointer hover:bg-slate-200 h-10 ">
                    <p className="text-sm mt-3 ml-3">Historial Control de movimiento</p>
                </li>
                
                <li onClick={()=>
                  {
                    if(window.location.href!==window.location.protocol + '//' + window.location.host+"/recepcionturno")
                 { 
                    navigate('/recepcionturno')
                 }
                  }} className="flex space-x-4 hover:cursor-pointer hover:bg-slate-200 h-10 ">
                    <p className="text-sm mt-3 ml-3">Historial Entrega y recepción de Turno</p>
                </li>

            </ul>
          </React.Fragment>
        }
      >


        <div onClick={()=>toogleTooltip()} 
           className="flex hover:bg-blue-500 hover:underline hover:cursor-pointer hover:text-white space-x-2 
            p-3 -mt-1 md:mt-0 md:rounded-full">
            <ICONS.TruckIconO className="md:h-7 h-5 mt-[1.5px] md:mt-0"/>
            <h2 className="md:text-xl">TRS</h2>
            <ICONS.ChevronDownIconO className="h-3 mt-2"/>
        </div>


      </HtmlTooltip>
    )
}

export default TRS