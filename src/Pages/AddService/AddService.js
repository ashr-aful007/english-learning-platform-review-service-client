import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/UseTaitel';

function AddService() {
   useTitle('Add service')
	const {user} = useContext(AuthContext)
	const [ services, SetServiceData] = useState()
	const {email} = user


	let service
	let photoUrl
	let drescreaption

	const handleOnsubmit = event =>{
		event.preventDefault()
		const from = event.target;
		 service = from.service.value
		 photoUrl = from.photoUrl.value
		 drescreaption = from.drescreaption.value
		 
	}
	
	const reviewsdata ={
		service,
		email,
		photoUrl,
		drescreaption
	    }

	useEffect(() =>{
		fetch('https://english-learning-platform-service-review-server.vercel.app/addservices',{
		  method: 'POST',
		  headers:{
		    'content-type' : 'application/json'
		  },
		  body: JSON.stringify(reviewsdata)
		})
		.then(res => res.json())
		.then(data => SetServiceData(data))
	  },[])
	  
	


  return (
    <div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Add your requre service</h1>
			<p className="pt-2 pb-4">Provide valide information for your expectations service.</p>
			<div className="space-y-4">
				<p className="flex items-center">	

				</p>
				<p className="flex items-center">
				</p>
				<p className="flex items-center">
				</p>
			</div>
		</div>
		<form onSubmit={handleOnsubmit}  className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1">Service name</span>
				<input name='service' type="text" placeholder="Service name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" required/>
			</label>
			<label className="block">
				<span className="mb-1">Price</span>
				<input name='price' type="text" placeholder="Price" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" required/>
			</label>
			<label className="block">
				<span className="mb-1">Photo URL</span>
				<input name='photoUrl' type="text" placeholder="Photo URL" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" required/>
			</label>
			<label className="block">
				<span className="mb-1">Description</span>
				<textarea name='drescreaption' rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" required></textarea>
			</label>
			<button type="btn" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
		</form>
	</div>
</section>
    </div>
  )
}

export default AddService