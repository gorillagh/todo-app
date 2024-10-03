import { useState } from 'react'
import './App.css'
import AddTodo from './pages/AddTodo'
import Todos from './pages/Todos'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {index:true, element:<Todos />}, 
        {path:"/add", element:<AddTodo />}, 
      ]
    }
  ])

  return (
    <>
    <ToastContainer />
    <RouterProvider router={router}/>
    </>
  )
}

export default App
