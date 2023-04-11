import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/Home/Home';
import Shop from './components/shop/Shop';
import Order from './components/Order/Order';
import Manage from './components/Manage/Manage';
import Login from './components/Login/Login';
import cartLoader from './loader/cartLoader';
import Checkout from './components/CHeckOut/Checkout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
path:'/',
element:<Shop></Shop>
      },
      {
path:'/order',
element:<Order></Order>,
loader:cartLoader,
      },
      {
path:'/manage',
element:<Manage></Manage>
      },
      {
path:'/checkout',
element:<Checkout></Checkout>
      },
      

      {
path:'/login',
element:<Login></Login>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
