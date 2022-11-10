import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider'
import CommentSection from '../CommentsSection/CommentSection'
import './ServicesDetails.css'

function ServicesDetails() {
     const [reviws, Setreviws] = useState('its good')
     const serviceDetails = useLoaderData()
     const {description,img,name,price,_id} = serviceDetails
     const {user} = useContext(AuthContext)

     const handleOnfoucs = event =>{
          const serviceReviwes = (event.target.value)
          if(serviceReviwes === ''){
              alert('Plz provide valid reviews')
          }
          else{
            Setreviws(serviceReviwes)
          }       
     }
     
  return (
    <div className='mb-5'>
        <div className='my-12 text-center'>
        <h1 className='text-3xl font-bold font-serif'>Explore services details!</h1>
        <p>Explore services details and check reviews! and chose your best one!</p>
      </div>   
        <div className='details-section'>
          <div>
          <div className="card w-full bg-base-100 shadow-xl rounded-sm m-1">
          <figure><img className='w-full' src={img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions">
              <p className='font-semibold'>price: ${price}</p>
              <button className="btn btn-primary">Join now</button>
            </div>
          </div>
        </div>
          </div>       
          <div>  

            {/* share data for comment section */}
           <CommentSection name={name} _id={_id} reviws={reviws}/>
           <div className=''>
            {
              user?.email ? <>
              <from className="flex overflow-hidden flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Provide your reviews!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-center">How was your experience?</span>
                  <div className="flex space-x-3">
                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <textarea onBlur={handleOnfoucs} name='reviewInput' rows="3" placeholder="reviews..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" spellcheck="false"></textarea>
                  <button className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Write your experience!</button>
                </div>
              </div>
              <div className="flex items-center justify-center">
               <button className='btn'>submit</button>
              </div>
            </from>
              </> : 
              <><Link to='/register'><button className='btn btn-outline btn-primary'>write your reviews</button></Link></>
            }
           </div>
          </div>
         </div>
   </div>
  )
}

export default ServicesDetails