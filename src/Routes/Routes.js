import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main/Main'
import AddService from '../Pages/AddService/AddService'
import Blog from '../Pages/Blog/Blog'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import MyReviws from '../Pages/MyReviews/MyReviws'
import Register from '../Pages/Register/Register'
import Service from '../Pages/Service/Service'
import ServicesDetails from '../Pages/ServicesDetails/ServicesDetails'
import PrivetRoute from './PriveteRoute/PrivetRoute'


const Routes = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
          children:[
               {
                    path: '/',
                    loader: () => fetch('https://english-learning-platform-service-review-server.vercel.app/fewservices'),
                    element: <Home></Home>
               },
               {
                    path: '/services',
                    element: <Service></Service>
               },
               {
                    path:'/servicesDetails/:id',
                    loader: ({params}) => fetch(`https://english-learning-platform-service-review-server.vercel.app/services/${params.id}`),
                    element: <ServicesDetails></ServicesDetails>
               },
               {
                    path:'/login',
                    element:<Login></Login>
               },
               {
                    path: '/register',
                    element:<Register></Register>
               },
               {
                    path: '/myReviews',
                    element: <PrivetRoute><MyReviws></MyReviws></PrivetRoute>
               },
               {
                    path: '/addService',
                    element: <PrivetRoute><AddService></AddService></PrivetRoute>
               },
               {
                    path: '/blog',
                    element: <Blog></Blog>
               },
          ]
     }
])

export default Routes