import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider'


function CommentSection({name, _id, reviws}) {
	 const {user} = useContext(AuthContext)
	 const [reviewsData, SetreviewsData] = useState([])
	 const {email,displayName} = user;
	 const reviews ={
		serviceId: _id,
		name,
		email,
		displayName,
		reviws,
		
	 }
	 
   useEffect(() =>{
	fetch('http://localhost:5000/reviews',{
		method: 'POST',
		headers:{
			'content-type' : 'application/json'
		},
		body: JSON.stringify(reviews)
	})
	.then(res => res.json())
	.then(data => SetreviewsData(data))
   },[reviws])

    
  return (
    <div>
     
    </div>
  )
}

export default CommentSection