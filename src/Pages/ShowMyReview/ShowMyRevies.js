import React, { useState } from 'react'


function ShowMyRevies({myreview,handleDelete,modalButton}) { 
     const {name,reviws,email,displayName,_id} = myreview 
  return (
     <div>
          {myreview.length === 0 ? <>
          <h1 className='font-bold text-5xl h-full flex flex-col justify-center items-center'>No Revewis Yet!</h1>
          </> : <>
          <div className='mt-11 mb-7 h-screen'>
               <div className="container flex flex-col w-full  max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
          <div className="flex justify-between p-4">
               <div className="flex space-x-4">
                    <div>
                         <h4 className="font-bold">{email}</h4>
                         <span className="text-sm text-gray-400"> Course: {name}</span>
                    </div>
               </div>
               <p>Your review</p>
          </div>    
          <div className="p-4 space-y-2 text-sm text-gray-400">          
               {reviws}
          </div>
     <div className='flex justify-between pt-4'>
               <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-primary'>Delete</button>
               {/* <label htmlFor="my-modal-6" className='btn btn-outline btn-primary'>Edit</label> */}
          </div>
          </div>
          </div>

          </>}
     </div>
  )
}

export default ShowMyRevies