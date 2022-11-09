import React, { useEffect, useState } from 'react'
import Showservices from '../Showservices/Showservices'

function Service() {
  const [services , setServices] = useState()
  useEffect(() =>{
     fetch('http://localhost:5000/services')
     .then(res => res.json())
     .then(data => setServices(data))
     
  },[])
  
  return (
    <div>
     {
      services?.map(servic => <Showservices
      servic={servic}
      key={servic._id}
      ></Showservices>)
     }
    </div>
  )
}

export default Service