import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider'

function Header() {
	const {user,logOut} = useContext(AuthContext)

	const handleLogOut = () =>{
		logOut()
	}
	const vanMenu = <>
   <li className='font-sans'><Link to='/'>Home</Link></li>
	 <li className='font-sans'><Link to='/blog'>Blog</Link></li>
	 {
		user?.email &&
		<><li className='font-sans'><Link to='myReviews'>My Reviwes</Link></li>
		<li className='font-sans'><Link to='addService'>Add Service</Link></li></>		
	 }
	</>
	
  return (
    <div>
	<div>
      <div className="navbar h-20 bg-purple-600">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {vanMenu}
      </ul>
    </div>
    <Link to="/" className="normal-case ">
      {
		user?.photoURL ? <><img src={user?.photoURL} alt=''></img></> : <><p className='text-sm'>{user?.email}</p></>
	 }
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {vanMenu}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user?.uid ? <><button className='text-sm p-5' onClick={handleLogOut} to='logout'>Log Out</button></> : <>
    <button className='font-sans'><Link to='/register'>Register</Link></button>
    </>
  }
  </div>
</div>
    </div>
    </div>
  )
}

export default Header