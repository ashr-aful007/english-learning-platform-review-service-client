import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import useTitle from '../../Hooks/UseTaitel'
import DitlsSection from '../../Shared/Header/DitlsSection'
import Showheaderservice from '../Showheaderservice/Showheaderservice'
import './Home.css'
import Information from './Information'

function Home() {
  const services = useLoaderData()
  useTitle('Home')
  
  return (
    <div>
      <div className='bg-img'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <h1 className='text-6xl text-white mb-5 text-center'>Ashik'S English support</h1>
        <p className='text-white text-center font-semibold'>Hello, I'm here your English teacher. I'm helping your all types of English related problem .<br/> chose your service what your need. </p>
        </div>
      </div>
      <div>
      <div className="space-y-2 text-center mt-10 mb-10">
			<h2 className="text-3xl font-bold">My all services</h2>
			<p className="font-serif text-sm dark:text-gray-400">Explore my all services and chose your best one!</p>
		</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-14 m-2'>        
        {
          services.map(servic => <Showheaderservice
            servic={servic}
            key={servic._id}
          ></Showheaderservice>)
        }
      </div>  
      <div className="flex justify-center mt-4 mb-6">
    <Link to='/services'><button className="btn btn-outline btn-primary">see all services</button></Link> 
     <div>
      {/* detils section */}
     </div>   
     </div> 
     <DitlsSection></DitlsSection>
     <Information></Information>  
    </div>
  )
}

export default Home