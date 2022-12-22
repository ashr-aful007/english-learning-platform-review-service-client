import React, { useContext } from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider'
import useTitle from '../../Hooks/UseTaitel'

function Register() {
    
 const {createUser,setUser,loading} = useContext(AuthContext)
 const [error,setError] = useState('')



 //costom HOOks
 useTitle('Register')
   const Navigate = useNavigate()
      
     const handleSubmit = event =>{        
          event.preventDefault()
          setError('')
          const form = event.target;
          const email = form.email.value;
          const password = form.email.value;
          createUser(email, password)
          .then(result => {
               form.reset()
               const user = result.user
               toast.success('SignUp successfuly')
               setUser(user)
               Navigate('/')
          })
          .catch(err => setError(err.message))
          
     }
     if(loading){
          return <div className='h-screen flex flex-col justify-center items-center w-full'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div></div>
     }
     

  return (
     <div>
     <div>
    <div onSubmit={handleSubmit} className='h-screen mb-10 w-full sm:w-1/2 mx-auto mt-12'>
<div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-purple-600 dark:text-gray-100">
<h1 className="text-2xl font-bold text-center text-white">Sign Up</h1>
<form  action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
     <div className="space-y-1 text-sm">
          <label for="username" className="block text-gray-400">Username</label>
          <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>
     </div>
     <div className="space-y-1 text-sm">
          <label for="email" className="block text-gray-400">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>
     </div>
     <div className="space-y-1 text-sm">
          <label for="password" className="block text-gray-400">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>
          <div className="flex justify-end text-xs dark:text-gray-400">
               <Link className='text-gray-400' to='' href="#">Forgot Password?</Link>
          </div>
     </div>
     {error && <p className='text-red-400'>{error}</p>}
     <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-violet-400">Sign Up</button>
</form>
<p className="text-ms text-center sm:px-6 dark:text-gray-400">have an account?
     <Link to='/login' href="#" className="underline dark:text-gray-100"> login</Link>
</p>
</div>
</div>
</div>
   </div>
  )
}

export default Register