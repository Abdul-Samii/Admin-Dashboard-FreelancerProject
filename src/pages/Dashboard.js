import React from 'react'
import { AdminAuthorized, CCTVTable, Header, ICONS, Piechart, RedirectWithoutLogin, TRSTable } from '../components'

const Dashboard = () =>{
    return(
        <div className=''>
            <RedirectWithoutLogin/>
            {
                
                AdminAuthorized()==-1?
                <div className='z-50 h-screen bg-white flex flex-col justify-center'>
                    <h1 className='font-bold text-3xl text-center'>No tiene permisos para acceder a esta página</h1>
                </div>
            :
            <div>
            <Header items="all"/>
            
            <div className='flex items-center bg-slate-100 shadow-sm py-2'>
                 <ICONS.HomeIconS className="h-6 ml-10 text-gray-600"/>
            </div>

            
            <div className=' pt-4  grid md:grid-cols-3 grid-cols-none  gap-20 md:pl-28 '>
                <div className=''>
                    <Piechart/>
                </div>
                <div className='md:w-fit w-screen space-y-4'>
                    <TRSTable/>
                    <CCTVTable height={300}/>
                </div>
            </div>
            </div>
            }
        </div>
    )
}

export default Dashboard