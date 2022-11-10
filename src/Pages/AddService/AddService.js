import React from 'react'

function AddService() {
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
		<form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1">Service name</span>
				<input type="text" placeholder="Service name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Price</span>
				<input type="email" placeholder="Price" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Description</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
		</form>
	</div>
</section>
    </div>
  )
}

export default AddService