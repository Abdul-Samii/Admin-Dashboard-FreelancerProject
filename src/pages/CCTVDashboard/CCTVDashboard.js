import React from 'react'
import { CCTVTable, Header, ICONS, LineChart } from '../../components'

const CCTVDashboard = () =>{
    return(
        <div className='h-full w-full'>
            <Header items="cctv"/>
            <div className='flex items-center bg-slate-100 shadow-sm py-2'>
                 <ICONS.HomeIconS className="h-6 ml-10 text-gray-600"/>
            </div>


            <div className='flex justify-evenly'>
                    <div className='w-1/2 '>
                        <div className=' space-x-4 '>
                            <div className=' bg-white mt-4 md:ml-24 shadow-sm rounded-md'>
                                <LineChart/>
                            </div>

                        </div>

                        <div className='md:ml-24 mt-4 bg-white p-6 shadow-sm rounded-md'>
                            <h2 className='font-semibold'>GUARDIA DE PROTECCIÓN GUARDIA</h2>
                            <ol>
                                <li>1 - Pedro Sanchez</li>
                                <li>2 - Luis Alberto</li>
                                <li>3 - Santiago Gutierrez</li>
                                <li>4 - Alfredo Alma</li>
                            </ol>
                        </div>

                        <div className='md:ml-24 mt-4 bg-white  p-6 shadow-sm rounded-md'>
                            <h2 className='font-semibold'>GRUPO DE TRABAJO</h2>
                            <ol>
                                <li>1 - Alberto López</li>
                                <li>2 - Roberto Sol</li>
                                <li>3 - Mauricio Rosa</li>
                                <li>4 - Alfredo Alma</li>
                            </ol>
                        </div>

                        </div>

                        <div className='md:w-fit w-screen space-y-4 mt-4'>
                            <CCTVTable height={600}/>
                        </div>
                </div>



        </div>
    )
}

export default CCTVDashboard