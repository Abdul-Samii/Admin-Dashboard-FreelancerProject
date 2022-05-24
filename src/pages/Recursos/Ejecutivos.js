import React from 'react'
import { EjectivosTable, Header, ICONS } from '../../components'

const Ejecutivos = () =>{
    return(
        <div className='h-screen bg-white'>
            <Header/>
                <div className='flex items-center bg-slate-50 shadow-sm py-2'>
                    <ICONS.HomeIconS className="h-6 ml-10 text-gray-600"/>
                    <p className=' ml-1'>Recursos</p>
                    <ICONS.ChevronRightIconO className='h-3  ml-1'/>
                    <p className=' ml-1'>Ejecutivos</p>
                </div>


                <div className='flex ml-11 mt-4'>
                    <h4 className='font-semibold'>Ejectivos</h4>
                    <ICONS.ChevronDoubleRightIconO className="h-3 mt-1.5 ml-1"/>
                </div>

                <h3 className='ml-11 mt-3 bg-blue-500 w-32 text-center font-semibold rounded-sm
                 text-white's>Crear Ejecutivo</h3>
                 
                 <div className='flex justify-end mr-16'>
                    <p className="text-blue-500">Export as PDF</p>
                    <ICONS.ChevronDownIconO className="h-3 mt-1.5 mr-4" color="blue"/>
                    <input
                        placeholder='Buscar'
                        className='border-[1px] outline-none pl-3 rounded-sm'
                    />
                    <ICONS.SearchIconS className="h-5 pr-2 mt-0.5 absolute text-gray-400"/>
                </div>


            <div className=' pt-4 w-screen p-16 flex flex-col justify-center  '>
                {/* <div className='md:w-fit w-screen justify-center'> */}
                    <EjectivosTable/>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Ejecutivos