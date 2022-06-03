import React,{useState} from "react";
import { ICONS } from "../constants";

const CreateVehicle = (props) =>{
    const {Create,setCreate} = props
    const [nombre,setNombre] = useState()
    const [alias,setAlias] = useState()

    const handleCancel = () =>{
        setCreate(false)
    }

    const handleCreate=()=>{
        alert("[SUCCESS]. Created!!")
        setCreate(false)
    }

    return(
        <div>
        
                <div className="flex flex-row items-end justify-center mt-24 w-full z-50">
                <div className="mt-10 h-fit pb-8 rounded-md bg-white border-2 shadow-lg py-10 z-50 w-fit px-8 absolute">
                    <div className="border-b-[1px] z-50  pb-4 -mt-4 flex justify-between">
                        <h3 className="font-bold text-xl">Crear un Vehiculo</h3>
                        <ICONS.XCircleIconS className="h-6 hover:cursor-pointer pr-4" onClick={()=>handleCancel()}/>
                    </div>

                <p className="mt-2 pb-2">Aqui puedes editar los datos del vehiculo asociado a un Ejecutivo.</p>



                {/* INPUT */}
                    <div className="items-center flex flex-col border-b-[1px] pb-6">
                       {/* Nombre del vehiculo: */}
                        <div className='mt-3'>
                            <p className='font-medium'>Nombre del vehiculo:</p>
                            <input
                                className='border-[1px] border-neutral-300 pl-2 rounded-md py-1 w-96 focus:border-blue-500 outline-none'
                                onChange={(item)=>setNombre(item.target.value)}
                        />
                        </div>


                        {/* Placas (optional) */}
                        <div className='mt-3'>
                                <p className='font-medium'>Placas (optional):</p>
                            <input
                                className='border-[1px] border-neutral-300 pl-2 rounded-md py-1 w-96 focus:border-blue-500 outline-none'
                                onChange={(item)=>setAlias(item.target.value)}
                        />
                        </div>


                        {/* Alias */}
                        <div className='mt-3'>
                                <p className='font-medium'>Alias *:</p>
                            <input
                                className='border-[1px] border-neutral-300 pl-2 rounded-md py-1 w-96 focus:border-blue-500 outline-none'
                                onChange={(item)=>setAlias(item.target.value)}
                        />
                        </div>


                        {/* Tipo: */}
                        <div className='mt-3'>
                                <p className='font-medium'>Tipo::</p>
                            <input
                                className='border-[1px] border-neutral-300 pl-2 rounded-md py-1 w-96 focus:border-blue-500 outline-none'
                                onChange={(item)=>setAlias(item.target.value)}
                        />
                        </div>


                        {/* PROPIETARIO */}
                        <div className='mt-3'>
                                <p className='font-medium'>PROPIETARIO*:</p>
                            <input
                                className='border-[1px] border-neutral-300 pl-2 rounded-md py-1 w-96 focus:border-blue-500 outline-none'
                                onChange={(item)=>setAlias(item.target.value)}
                        />
                        </div>

                    </div>



                    <div className="flex justify-end pr-5 space-x-4 mt-4">
                        <h3 onClick={()=>handleCancel()} className="w-20 py-1 rounded-md text-center font-semibold hover:cursor-pointer
                            hover:bg-green-700 active:bg-slate-50 bg-green-900 text-white">Cancelar</h3>
                        <h3 onClick={()=>handleCreate()} className="bg-blue-500 w-20 py-1 rounded-md text-center font-semibold hover:cursor-pointer
                            hover:bg-blue-400 text-white active:bg-slate-50">Crea</h3>
                    </div>

                </div>
                </div>
            
        
</div>
    )
}

export default CreateVehicle