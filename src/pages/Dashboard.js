import React from 'react'
import { Header, Piechart, TRSTable } from '../components'

const Dashboard = () =>{
    return(
        <>
            <Header/>
            <div className=' pt-9  grid md:grid-cols-3 grid-cols-none  gap-20 md:pl-20 '>
                <div className=''>
                    <Piechart/>
                </div>
                <div className='w-full'>
                    <TRSTable/>
                </div>
            </div>
        </>
    )
}

export default Dashboard