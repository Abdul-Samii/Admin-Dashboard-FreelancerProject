import React from 'react'
import { Header, ICONS } from '../../components'
import logo from '../../assets/logo.png'
import { MetaTags } from 'react-meta-tags'




const Diurno = () =>{
    return(
        <div className='bg-slate-50 h-full'>
            <Header items="cctv"/>

            <MetaTags>
                <meta name="viewport" content="width=1200, initial-scale=1" />
            </MetaTags>
            
            <div className='flex items-center bg-slate-100 shadow-sm py-2'>
                    <ICONS.HomeIconS className="h-6 ml-10 text-gray-600"/>
                    <p className=' ml-1'>CCTV</p>
                    <ICONS.ChevronRightIconO className='h-3  ml-1'/>
                    <p className=' ml-1'>Entrega y recepciónde turno</p>
                    <ICONS.ChevronRightIconO className='h-3  ml-1'/>
                    <p className=' ml-1'>Diurno</p>

            </div>

            <div className='flex ml-11 mt-4'>
                    <h4 className='font-semibold'>Diurno</h4>
                    <ICONS.ChevronDoubleRightIconO className="h-3 mt-1.5 ml-1"/>
            </div>

            <div className='flex justify-center'>
                <div className='bg-white px-4 border-2 hover:shadow-xl hover:border-2 shadow-sm w-1/2 h-fit pb-8'>

                    <div className='flex justify-evenly'>
                        <img src={logo} className="h-10"/> 
                        <h2 className='font-bold mt-2'>ENTREGA Y RECEPCION DE GUARDIA EMSECOR DIURNA</h2>
                    </div>

                    <div className='flex justify-between px-20'>
                        <p className='text-sm text-gray-500'>CENTRAL DE OPERACIONES DIURNA</p>
                        <p className='text-sm text-gray-500'>FETCHA</p>
                    </div>

            {/* FOUR LINES */}
                    <div className='flex mt-12'>
                    {/* LEFT */}
                        <div className='w-1/2'>
                            <h2 className='font-semibold text-center'>GRUPO DE PROTECCION GUARDIA</h2>
                            <div>
                                <ol style={{listStyleType:'number'}} className="pl-6">
                                    <li className='w-full border-[1px] border-gray-500 rounded-md mt-0.5'></li>
                                    <li className='w-full border-[1px] border-gray-500 rounded-md mt-0.5'></li>
                                    <li className='w-full border-[1px] border-gray-500 rounded-md mt-0.5'></li>
                                    <li className='w-full border-[1px] border-gray-500 rounded-md mt-0.5'></li>
                                </ol>
                            </div>
                        </div>

                    {/* RIGHT */}
                        <div className='w-1/2'>
                            <h2 className='font-semibold text-center'>GRUPO DE TRABAJO</h2>
                            <div>
                                <ol style={{listStyleType:'number'}} className="pl-6">
                                    <li className='w-full border-[1px] border-gray-500 rounded-md mt-0.5'></li>
                                    <li className='w-full border-[1px] border-gray-500 rounded-md mt-0.5'></li>
                                    <li className='w-full border-[1px] border-gray-500 rounded-md mt-0.5'></li>
                                    <li className='w-full border-[1px] border-gray-500 rounded-md mt-0.5'></li>
                                </ol>
                            </div>
                        </div>


                    </div>



                    {/* NEW SECTION */}
                    <div className='flex mt-12'>
                    {/* LEFT */}
                        <div className='w-1/2'>
                            <h2 className='font-semibold text-gray-500 text-center'>NOVEDADE ESPECIALES</h2>
                            <div>
                                <ol className="pl-2">
                                    <li className='w-full px-2 text-gray-500 border-[1px] border-gray-500 mt-0.5'>
                                        <b className='text-black'>16:04</b> But I must explain to you how all this mistaken idea of</li>
                                    <li className='w-full px-2 text-gray-500 border-[1px] border-gray-500 mt-0.5'>
                                        <b className='text-black'>16:04</b> But I must explain to you how all this mistaken idea of</li>
                                    <li className='w-full px-2 text-gray-500 border-[1px] border-gray-500 mt-0.5'>
                                        <b className='text-black'>16:04</b> But I must explain to you how all this mistaken idea of</li>
                                    <li className='w-full px-2 text-gray-500 border-[1px] border-gray-500 mt-0.5'>
                                        <b className='text-black'>16:04</b> But I must explain to you how all this mistaken idea of</li>
                                </ol>
                            </div>
                        </div>

                    {/* RIGHT */}
                        <div className='w-1/2'>
                            <h2 className='font-semibold text-gray-500 text-center'>CONSIGNAS ESPECIALES</h2>
                            <div>
                                <ol className="pl-2">
                                <li className='w-full px-2 text-gray-500 border-[1px] border-gray-500 mt-0.5'>
                                        <b className='text-black'>16:04</b> But I must explain to you how all this mistaken idea of</li>
                                    <li className='w-full px-2 text-gray-500 border-[1px] border-gray-500 mt-0.5'>
                                        <b className='text-black'>16:04</b> But I must explain to you how all this mistaken idea of</li>
                                    <li className='w-full px-2 text-gray-500 border-[1px] border-gray-500 mt-0.5'>
                                        <b className='text-black'>16:04</b> But I must explain to you how all this mistaken idea of</li>
                                    <li className='w-full px-2 text-gray-500 border-[1px] border-gray-500 mt-0.5'>
                                        <b className='text-black'>16:04</b> But I must explain to you how all this mistaken idea of</li>
                                </ol>
                            </div>
                        </div>
                    </div>


                    {/* FOOTER SECTION */}
                    <div>
                        <div className='flex mt-12 px-2 space-x-1'>
                            <p className='border-[1px] h-20 w-1/2 text-center border-gray-500'>CENTRALISTA DE OPERACIONES SALIENTE:</p>
                            <p className='border-[1px] h-20 w-1/2 text-center border-gray-500 '>CENTRALISTA DE OPERACIONES ENTRANTE:</p>
                        </div>

                        <div className='flex mt-1 px-2 space-x-1'>
                            <p className='border-[1px] h-20 w-1/2 border-gray-500 flex flex-col justify-end p-2'>FIRMA:</p>
                            <p className='border-[1px] h-20 w-1/2 border-gray-500 flex flex-col justify-end p-2'>HORA:</p>
                            <p className='border-[1px] h-20 w-1/2 border-gray-500 flex flex-col justify-end p-2'>FIRMA:</p>
                            <p className='border-[1px] h-20 w-1/2 border-gray-500 flex flex-col justify-end p-2'>HORA:</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Diurno