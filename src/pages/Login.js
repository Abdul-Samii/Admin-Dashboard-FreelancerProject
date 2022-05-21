import React,{useState} from 'react'
import { ICONS } from '../components/constants'
import authImage from '../assets/auth-image.jpg'
import authDecorator from '../assets/auth-decoration.png'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
const Login = () =>{

    const [username,setUsername] = useState()
    const [password, setPassword] = useState()


    let navigate = useNavigate()

    const handleLogin=()=>{
        username&&password?navigate('/dashboard'):alert("Fill all fields!")
    }


    return(
        <div className='bg-white flex h-screen w-screen lg:justify-end justify-center overflow-hidden'>
            
            {/* LOGIN CARD */}
            <div className='flex ml lg:px-52 -mt-32 md:mt-0   flex-col justify-center'>
            
            <div className='flex items-center '>
            <img
                src={logo}
                className="h-16 w-32 ml-6 -mt-1"
            />
        </div>
            
            
            <div className='items-center mx-8'>
                <div className='flex space-x-2'>
                    <h1 className='text-4xl font-semibold'>¡Bienvenido de nuevo!</h1>
                    <ICONS.SparklesIconS className="h-10 pr-20 mt-0 md:mt-1 text-blue-600"/>
                </div>
                {/* EMAIL */}
                <div className='mt-10'>
                    <p className='font-medium'>Usuario</p>
                    <input
                        className='border-[1px] border-neutral-300 pl-2 rounded-md py-2 w-96 focus:border-blue-500 outline-none'
                        onChange={(item)=>setUsername(item.target.value)}
                   />
                </div>


                {/* PASSWORD */}
                <div className='mt-10'>
                    <p className='font-medium'>Contraseña</p>
                    <input
                        className='border-[1px] border-neutral-300 pl-2 rounded-md py-2 w-96 focus:border-blue-500 outline-none'
                        type='password'
                        onChange={(item)=>setPassword(item.target.value)}
                   />
                </div>

                <div className='flex justify-between mt-10 border-b-[1px] pb-8'>
                    <p className='ml-2 mt-2 underline text-lg hover:cursor-pointer hover:no-underline text-gray-600'>¿Olvidé mi contraseña?</p>
                    <h4 onClick={()=>handleLogin()} className='bg-blue-600 hover:bg-blue-500 text-white hover:cursor-pointer font-medium text-lg p-2 rounded-lg'>Ingresar </h4>
                </div>

                <div className='flex space-x-2 mt-10'>
                    <p className='text-gray-600'>¿No tienes una cuenta?</p>
                    <p className='text-blue-600 font-medium hover:cursor-pointer hover:text-blue-700'>Regístrate</p>
                </div>
            </div>
            </div>


            {/* RIGHT IMAGE */}
            <div className='hidden lg:flex' >
                <img src={authImage} className="h-[150vh] w-[170vh] pb-36"/>
                <div className='absolute -ml-28 flex flex-col justify-center items-center h-[100%]'>
                    <img src={authDecorator} className="h-[35%]  "/>
                </div>
            </div>

        </div>
    )
}

export default Login