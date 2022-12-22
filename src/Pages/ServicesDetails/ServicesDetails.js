import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider'
import CatagoryComment from '../CatagoryComment/CatagoryComment'
import './ServicesDetails.css'

function ServicesDetails() {
    //  const [reviws, Setreviws] = useState('')
    //  const [reviewsData, SetreviewsData] = useState('')
     
     const {user} = useContext(AuthContext)
     const {email} = user;

     const serviceDetails = useLoaderData()
     const {description,img,name,price,_id} = serviceDetails
 

     const handleOnsubmit = event =>{
           event.preventDefault() 
           const from = event.target;
           const reviewInput = from.reviewInput.value  
           const reviewsdata ={
            serviceId: _id,
            name,
            email,
            reviws: reviewInput,
            
           }      
           fetch('https://english-learning-platform-service-review-server.vercel.app/reviews',{
            method: 'POST',
            headers:{
              'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewsdata)
          })
          .then(res => res.json())
          .then(data => {
            if(data.acknowledged === true){
               from.reset()
               toast.success('Revew add successfuly')
            }
          })  
     }
      
  return (
    <div className='mb-5 m-3'>
        <div className='my-16 text-center'>
        <h1 className='text-3xl font-bold font-serif'>Explore services details!</h1>
        <p>Explore services details and check reviews! and chose your best one!</p>
      </div>   
        <div className='details-section m-3'>
          <div>
          <div className="card mx-auto shadow-xl rounded-lg">
          <figure><img className='w-full' src={img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Course: {name}</h2>
            <p>{description}</p>
            <div className="card-actions">
              <p className='font-semibold'>price: ${price}</p>
              <button className="btn btn-primary">Join now</button>
            </div>
          </div>
        </div>
          </div>       
          <div>  
              <CatagoryComment _id={_id}></CatagoryComment>
            {/* share data for comment section */}          
           <div className=''>
            {
              user?.email ? <>
              <form onSubmit={handleOnsubmit} className="flex overflow-hidden ml-2 w-full flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Provide your reviews!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-center">How was your experience?</span>
                </div>
                <div className="flex flex-col w-full">
                  <textarea name='reviewInput' rows="3" placeholder="reviews..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" required></textarea>
                  <button className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Write your experience!</button>
                </div>
              </div>
              <div className="flex items-center justify-center">
               <button className='btn'>submit</button>
              </div>
            </form>
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