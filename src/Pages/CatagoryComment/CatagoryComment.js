import React, { useEffect, useState } from 'react'
import ShowSingleReviws from '../ShowSIngleReviws/ShowSingleReviws'


function CatagoryComment({_id}) {
     const [catagoyRevews, SetCatagoryRevews] = useState([])
     
     
    useEffect(() =>{
       fetch(`http://localhost:5000/reviews/${_id}`)
       .then(res => res.json())
       .then(data => SetCatagoryRevews(data))
    },[])
    
  return (
    <div>
     {
       catagoyRevews.map(reviews => <ShowSingleReviws reviews={reviews}
          key={reviews._id}
       ></ShowSingleReviws>)   
     }  
    </div>
  )
}

export default CatagoryComment