import React from 'react';
import { ICONS } from '../constants';
import user from '../../assets/user.jpg'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

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
    return(
        <HtmlTooltip
        // disableTouchListener
        enterDelay={0} leaveDelay={200}
        title={
          <React.Fragment>
            <ul className=" w-80 space-y-4">
                
                <li className="flex space-x-4 hover:cursor-pointer hover:bg-slate-200 h-10 ">
                    {/* <ICONS.PencilAltIconS className="h-4 mt-3 ml-3" color="blue"/> */}
                    <p className="text-sm mt-3 ml-3">Historial Control de movimiento</p>
                </li>
                
                <li className="flex space-x-4 hover:cursor-pointer hover:bg-slate-200 h-10 ">
                    {/* <ICONS.LogoutIconO className="h-4 mt-3 ml-3" color="blue"/> */}
                    <p className="text-sm mt-3 ml-3">Historial Entrega y recepción de Turno</p>
                </li>

            </ul>
          </React.Fragment>
        }
      >
        <div className="flex hover:bg-blue-500 hover:cursor-pointer hover:text-white space-x-2 p-3 rounded-full">
            <ICONS.ViewBoardsIconO className="h-8"/>
            <h2 className="text-xl">TRS</h2>
            <ICONS.ChevronDownIconO className="h-3 mt-2"/>
        </div>
      </HtmlTooltip>
    )
}

export default TRS