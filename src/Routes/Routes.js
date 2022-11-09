import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main/Main'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/Home/Home'
import Service from '../Pages/Service/Service'
import ServicesDetails from '../Pages/ServicesDetails/ServicesDetails'
import Showheaderservice from '../Pages/Showheaderservice/Showheaderservice'

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
                    path: '/services',
                    element: <Service></Service>
               },
               {
                    path:'/servicesDetails/:id',
                    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                    element: <ServicesDetails></ServicesDetails>
               }
          ]
     }
])

export default Routes