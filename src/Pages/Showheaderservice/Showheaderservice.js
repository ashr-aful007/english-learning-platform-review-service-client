import React from 'react'
import { Link } from 'react-router-dom';

function Showheaderservice({servic}) {
     const {description,img,name,price,_id,} = servic;
  return (
     <div className="card w-full bg-base-100 shadow-xl">
     <figure><img className='w-full h-15' src={img} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">{name}</h2>
       <p>{description.slice(0,100)}</p>
       <div className="card-actions justify-end">
        <Link to='/servicesDetails'><button className="btn btn-primary">view details</button></Link> 
       </div>
     </div>    
   </div>
  )
}

export default Showheaderservice