import React from 'react'
import { Link } from 'react-router-dom'

function Showservices({servic}) {
     const {description,img,name,price,_id} = servic   
  return (
    <div>
          <div className="card w-full h-5/6 border-5px bg-base-100 shadow-xl mt-0">
          <figure><img className='w-full h-full' src={img} alt="Shoes" /></figure>
          <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0,149)}</p>
          <div className="card-actions mt-4">
            <p className='font-semibold'>price: ${price}</p>
              <Link to={`/servicesDetails/${_id}`}><button className="btn btn-primary">See details</button></Link> 
          </div>
          </div>
          </div>
    </div>
  )
}

export default Showservices