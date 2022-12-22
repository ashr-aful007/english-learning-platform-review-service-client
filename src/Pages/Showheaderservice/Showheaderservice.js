import React from 'react'
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function Showheaderservice({servic}) {
     const {description,img,name,price,_id,} = servic;
  return (
     <div className="card w-full bg-base-100 shadow-xl">
          <PhotoProvider>
      <PhotoView src={img}>
      <figure><img className='w-full h-15' src={img} alt="Shoes" /></figure>
      </PhotoView>
    </PhotoProvider>    
     <div className="card-body">
       <h2 className="card-title">{name}</h2>
       <p>{description?.slice(0,100)}</p>
       <div className="card-actions mt-3">
        <p className='font-semibold'>price: ${price}</p>
        <Link to={`/servicesDetails/${_id}`}><button className="btn btn-primary">view details</button></Link> 
       </div>
     </div>    
   </div>
  )
}

export default Showheaderservice