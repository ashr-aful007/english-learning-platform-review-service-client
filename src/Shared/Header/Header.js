import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider'

function Header() {
	const {user} = useContext(AuthContext)
	
  return (
    <div>
     <header className="p-3 dark:bg-gray-800 dark:text-gray-100 bg-purple-600">
	<div className="container flex justify-between h-16 mx-auto">
		<div className="flex">
			<Link to="/myReviews" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<div>
        user img
	   

      </div>
			</Link>
			<ul className="items-stretch hidden space-x-3 lg:flex">
      <li className="flex">
					<Link to='/' href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent font-semibold">Home</Link>
				</li>
				<li className="flex">
					<Link to='/blog' href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent font-semibold">Blog</Link>
				</li>
				<li className="flex">
					<Link to='/myReviews' href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 font-semibold">My reviews</Link>
				</li>
				<li className="flex">
					<Link to="/addServies" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent font-semibold">Add service</Link>
				</li>
				<li className="flex">
					<Link to="/services" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent font-semibold">Services</Link>
				</li>
			</ul>
		</div>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Log in</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    </div>
  )
}

export default Header