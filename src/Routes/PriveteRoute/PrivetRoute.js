import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider'

function PrivetRoute({children}) {
    const {user,loading} = useContext(AuthContext)  

    const location = useLocation()

    if(loading){
     return <div className='h-screen flex flex-col justify-center items-center  w-full'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div></div>
    } 
    if(user){
      return children
    }
    return <Navigate to='/register' state={{from: location}} replace></Navigate>

    
 
}

export default PrivetRoute