import React, { useEffect, useState } from 'react'
import Showservices from '../Showservices/Showservices'

function Service() {
  const [services , setServices] = useState()
  useEffect(() =>{
     fetch('https://english-learning-platform-service-review-server.vercel.app/services')
     .then(res => res.json())
     .then(data => setServices(data))
     
  },[])
  
  return (
    <div>
      <div className='text-center my-12'>
        <h1 className='text-4xl font-serif font-bold'>My All Services</h1>
        <p className='font-serif'>Explore My All Services and check details. And chose your best one!</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 my-0 m-4'>
      {
      services?.map(servic => <Showservices
      servic={servic}
      key={servic._id}
      ></Showservices>)
     }
      </div>
    </div>
  )
}

export default Service