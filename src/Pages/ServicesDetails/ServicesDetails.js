import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CommentSection from '../CommentsSection/CommentSection'
import './ServicesDetails.css'

function ServicesDetails() {
     const serviceDetails = useLoaderData()
     const {description,img,name,price,_id} = serviceDetails
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
           <CommentSection name={name} _id={_id}/>
          </div>
         </div>
   </div>
  )
}

export default ServicesDetails