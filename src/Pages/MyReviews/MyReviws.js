import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider'
import useTitle from '../../Hooks/UseTaitel'
import ShowMyRevies from '../ShowMyReview/ShowMyRevies'

function MyReviws() {
     //custom Hooks
      useTitle('My reviews')
     const [myReviews,SetmyReviews] = useState([])

     const {user} = useContext(AuthContext)
     useEffect(()=>{
       fetch(`https://english-learning-platform-service-review-server.vercel.app/reviews?email=${user?.email}`)  
       .then(res => res.json())
       .then(data => SetmyReviews(data)) 
     }, [])

//delete review 
     const  handleDelete = id =>{
      const porssid = window.confirm('Are you sure you want to delete it!')
      if(porssid){
           fetch(`https://english-learning-platform-service-review-server.vercel.app/reviews/${id}`,{
                method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
                if(data.deletedCount > 0){
                     toast.success('delete successfuly')
                     const remaining = myReviews.filter(i => i._id !== id)
                     SetmyReviews(remaining)
                }
           })
      }
 }




  return (
    <div >
      {
        // myReviews.map(data => <div>
          
        //     {/* Put this part before </body> tag */}
        //     <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        //   <form  className="modal modal-bottom sm:modal-middle">
        //   <div className="modal-box">
        //   <h3 className="font-bold text-lg">{data?.name}</h3>
        //   <h3 className="font-bold text-lg">{data?.email}</h3>
        //   <textarea  className='w-full' defaultValue={data?.reviws} name="" id="comment" cols="30" rows="10"></textarea>
        //   <div className="modal-action">
        //        <label type='submit' htmlFor="my-modal-6" className="btn">Done</label>
        //   </div>
        //   </div>
        //   </form>
        // </div>)
      }

  
    <div>
      {
        myReviews.length === 0 ?  <><h1 className='font-bold text-5xl flex flex-col h-screen justify-center items-center'>No review found</h1></> : <>
          <div className='h-full'>
          {
            myReviews.map(myreview => <ShowMyRevies 
              handleDelete={handleDelete}
              myreview={myreview}
              key={myreview._id}              
            ></ShowMyRevies>)
          }
    </div>
        </>
      }
    </div>
    </div>
  )
}

export default MyReviws