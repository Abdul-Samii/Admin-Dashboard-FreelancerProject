import React,{useEffect, useState} from 'react'
import { ICONS } from '../components/constants'
import authImage from '../assets/auth-image.jpg'
import authDecorator from '../assets/auth-decoration.png'
import logo from '../assets/logo.png'
import { Route, useNavigate,Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setToast, UserLogin } from '../store/actions'
import { RedirectWithLogin, Toast } from '../components'

const Registration = (props) =>{

    const [username,setUsername] = useState()
    const [name,setName] = useState()
    const [surname,setSurname] = useState()
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()

    let navigate = useNavigate()

    var token
    var tipo


    const handleRegister=async dispatch=>{
        
        const obj={
            username,
            password
        }
        if(username&&password&&name&&surname&&email)
        {
            if(password!==confirmPassword)
            {
                   alert("[ERROR]. Password donot match!")
            }
            else{
            // await props.UserLogin(obj)
            // token = window.localStorage.getItem('token')
            // tipo = window.localStorage.getItem('tipo')
            // if(token)
            // {
            //     if(tipo==='1')
            //     {

            //         navigate('/dashboard')
            //     }
            //     else if(tipo==='2')
            //     {
            //         navigate('/cctvdashboard')
            //     }
            //     else if(tipo==='3'){
            //         navigate('/cctvdashboard')
            //     }
            // }
                alert("[SUCCESS]. Reg completed")
        }
        }
        else{
            alert("[ERROR]. Fill all Fields")
        }
    }




    return(
        <div className='bg-white  flex h-screen w-screen justify-center overflow-hidden'>
            <RedirectWithLogin />
            {/*  CARD */}
            <div className='flex bg-white shadow-md border-2 lg:px-52 -mt-32 md:mt-0   flex-col justify-center'>
            
            <div className='h-fit flex flex-col items-center'>
            <img
                src={logo}
                className="h-24 -mt-10"
            />
            </div>
            
           
            <div className='items-center mx-8'>
                <h1 className='text-2xl font-semibold text-center'>Completa tu registro para ingresar a EMSECOR</h1>

            <div className='items-center flex flex-col mt-8'>
                    {/* User */}
                    <div className='mt-1'>
                        <p className='font-medium'>Usuario</p>
                        <input
                            className='border-[1px] border-neutral-300 pl-2 rounded-md py-2 w-96 focus:border-blue-500 outline-none'
                            value={username}
                            onChange={(item)=>setUsername(item.target.value)}
                    />
                    </div>

                
                    {/* NAME */}
                    <div className='mt-1'>
                        <p className='font-medium'>Nombres</p>
                        <input
                            className='border-[1px] border-neutral-300 pl-2 rounded-md py-2 w-96 focus:border-blue-500 outline-none'
                            value={name}
                            onChange={(item)=>setName(item.target.value)}
                    />
                    </div>


                    {/* SURNAME */}
                    <div className='mt-1'>
                        <p className='font-medium'>Apellidos</p>
                        <input
                            className='border-[1px] border-neutral-300 pl-2 rounded-md py-2 w-96 focus:border-blue-500 outline-none'
                            value={surname}
                            onChange={(item)=>setSurname(item.target.value)}
                    />
                    </div>



                    {/* EMAIL */}
                    <div className='mt-1'>
                        <p className='font-medium'>Email</p>
                        <input
                            className='border-[1px] border-neutral-300 pl-2 rounded-md py-2 w-96 focus:border-blue-500 outline-none'
                            type='email'
                            value={email}
                            onChange={(item)=>setEmail(item.target.value)}
                    />
                    </div>


                    {/* Contraseña */}
                    <div className='mt-1'>
                        <p className='font-medium'>Contraseña</p>
                        <input
                            className='border-[1px] border-neutral-300 pl-2 rounded-md py-2 w-96 focus:border-blue-500 outline-none'
                            type='password'
                            value={password}
                            onChange={(item)=>setPassword(item.target.value)}
                    />
                    </div>


                    {/* Repite la Contraseña */}
                    <div className='mt-1'>
                        <p className='font-medium'>Repite la Contraseña</p>
                        <input
                            className='border-[1px] border-neutral-300 pl-2 rounded-md py-2 w-96 focus:border-blue-500 outline-none'
                            type='password'
                            value={confirmPassword}
                            onChange={(item)=>setConfirmPassword(item.target.value)}
                    />
                    </div>

                </div>



                <div className=' space-y-3 mt-1 flex flex-col items-center'>
                        <p className='ml-2 mt-2 flex flex-col justify-center text-lg hover:cursor-pointer 
                        hover:no-underline text-gray-600 md:w-[60vh] lg:w-[50vh]'>Al registrarte el administrador recibira tu información para aprobar tu registro.</p>
                    
                        <h4 onClick={()=>handleRegister()} className='bg-blue-600 hover:bg-blue-500 
                        text-white hover:cursor-pointer h-fit w-fit font-medium text-lg py-1 px-2 rounded-lg'>Registrarte </h4>
                </div>

                
                <div className='flex justify-center space-x-2 mt-2'>
                    <p className='text-gray-600'>¿Tienes ya tus credenciales?</p>
                    <p onClick={()=>navigate('/')} className='text-blue-600 font-medium hover:cursor-pointer hover:text-blue-700'>
                        Ingresar</p>
                </div>
            </div>
            </div>



        </div>
    )
}


const mapStateToProps=(props)=>{
    return{
        isLoading:props.auth.isLoading
    }
}



export default connect(mapStateToProps,{setToast}) (Registration)