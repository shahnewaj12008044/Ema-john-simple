import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop.jsx';
import Home from './Components/Layout/Home/Home.jsx';
import Order from './Components/Order/Order.jsx'
import Login from './Components/Login/Login.jsx';
import Inventory from './Components/Inventory/Inventory.jsx'
import CartProductsLoader from './Loaders/CartProductsLoader.js';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
         path:'/',
         element:<Shop></Shop>
      },{
        path:'/order',
        element:<Order></Order>,
        loader:CartProductsLoader
      },{
        path:'/login',
        element:<Login></Login>
      },{
        path:'/inventory',
        element:<Inventory></Inventory>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>,
)
