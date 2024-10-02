import { useState } from 'react'
import './App.css'
import AddTodo from './pages/AddTodo'
import Todos from './pages/Todos'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'

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
    <RouterProvider router={router}/>
    </>
  )
}

export default App
