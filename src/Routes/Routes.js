import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main/Main'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/Home/Home'

const Routes = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
          children:[
               {
                    path: '/',
                    loader: () => fetch('http://localhost:5000/fewservices'),
                    element: <Home></Home>
               },
               {

               }
          ]
     }
])

export default Routes