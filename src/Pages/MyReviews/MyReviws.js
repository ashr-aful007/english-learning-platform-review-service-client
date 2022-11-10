import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider'
import ShowModal from '../ShowModal/ShowModal'
import ShowMyRevies from '../ShowMyReview/ShowMyRevies'

function MyReviws() {
      
     const [myReviews,SetmyReviews] = useState([])

     const {user} = useContext(AuthContext)
     useEffect(()=>{
       fetch(`http://localhost:5000/reviews?email=${user?.email}`)  
       .then(res => res.json())
       .then(data => SetmyReviews(data)) 
     }, [])


     const  handleDelete = id =>{
      const porssid = window.confirm('Are you sure you want to delete it!')
      if(porssid){
           fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
                if(data.deletedCount > 0){
                     alert('deleted sucessfully')
                     const remaining = myReviews.filter(i => i._id !== id)
                     SetmyReviews(remaining)
                }
           })
      }
 }

  const handleUpdate = myreview =>{

    const proccid = window.confirm('Do you sure you want to update')
    if(proccid){
      fetch(`http://localhost:5000/reviews/${myreview._id}`,{
        method: 'PATCh',
        headers: {
           'content-type' : 'application/json'
        },
        body: JSON.stringify({status : 'Approved'})
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
         if(data.modifiedCount > 0){
           const remainig = myReviews.filter(rev => rev._id !== myreview._id);
           const approving = myReviews.find(rev => rev._id === myreview._id );
           approving.status = 'Approved'

           const newComent = [approving, ...remainig];
           SetmyReviews(newComent)
         }
      })
    }

  }

  return (
    <div >
      {
        myReviews.map(data => <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
          <h3 className="font-bold text-lg">{data.name}</h3>
          <h3 className="font-bold text-lg">{data.email}</h3>
          <p className="py-4">{data.reviws}</p>
          <div className="modal-action">
               <label htmlFor="my-modal-6" className="btn">Yay!</label>
          </div>
          </div>
          </div>
        </div>)
      }

  
    <div className='h-full'>
          {
            myReviews.map(myreview => <ShowMyRevies 
              handleDelete={handleDelete}
              myreview={myreview}
              key={myreview._id}
              handleUpdate={handleUpdate}              
            ></ShowMyRevies>)
          }
    </div>
    </div>
  )
}

export default MyReviws