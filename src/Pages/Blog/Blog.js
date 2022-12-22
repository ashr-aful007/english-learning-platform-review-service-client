import React from 'react'
import useTitle from '../../Hooks/UseTaitel'

function Blog() {
	useTitle('Blog')
  return (
	<div>
    <div className='my-9 m-3'>
     <div className="w-full p-6 overflow-hidden rounded-lg shadow bg-gray-300">
	<article>
		<h2 className="text-xl font-bold">Difference between SQL and NoSQL ?</h2>
		<p className="mt-4 dark:text-gray-400">SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries.</p>
		<div className="flex items-center mt-8 space-x-4">
		
		</div>
	</article>
</div>
     <div className="w-full p-6 overflow-hidden rounded-lg shadow bg-gray-300 my-9">
	<article>
		<h2 className="text-xl font-bold">What is JWT, and how does it work?</h2>
		<p className="mt-4 dark:text-gray-400"> This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.</p>
		<div className="flex items-center mt-8 space-x-4">
		
		</div>
	</article>
</div>
     <div className="w-full p-6 overflow-hidden rounded-lg shadow bg-gray-300 my-9">
	<article>
		<h2 className="text-xl font-bold">What is the difference between javascript and NodeJS?</h2>
		<p className="mt-4 dark:text-gray-400">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
		<div className="flex items-center mt-8 space-x-4">
		
		</div>
	</article>
</div>
     <div className="w-full p-6 overflow-hidden rounded-lg shadow bg-gray-300 my-9">
	<article>
		<h2 className="text-xl font-bold">How does NodeJS handle multiple requests at the same time?</h2>
		<p className="mt-4 dark:text-gray-400">Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
		No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.</p>
		<div className="flex items-center mt-8 space-x-4">
		
		</div>
	</article>

	</div>
    </div>
    </div>
  )
}

export default Blog