import React, { useEffect, useState } from 'react'
import ShowSingleReviws from '../ShowSIngleReviws/ShowSingleReviws'


function CatagoryComment({_id}) {
     const [catagoyRevews, SetCatagoryRevews] = useState([])
     
     
    useEffect(() =>{
       fetch(`http://localhost:5000/reviews/${_id}`)
       .then(res => res.json())
       .then(data => SetCatagoryRevews(data))
    },[])
    catagoyRevews.map(data => console.log(data))
  return (
    <div>
     {
       catagoyRevews.map(reviews => <ShowSingleReviws reviews={reviews}></ShowSingleReviws>)   
     }  
    </div>
  )
}

export default CatagoryComment