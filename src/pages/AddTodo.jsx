import React, { useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom'

const AddTodo = () => {
const [todo, setTodo]=useState("")

const navigate = useNavigate()

const handleAddTodo = (e)=>{
  e.preventDefault()
  navigate("/") // Go to the homepage
console.log("Todo--->", todo);
}

  return (
    <div>
     <h1>Add a Todo</h1>
     <form action="" className='' onSubmit={handleAddTodo}>
      <input type="text" placeholder='Enter todo' className='border border-gray-700 rounded-full p-2' value={todo} onChange={(e)=>setTodo(e.target.value)} />
      <input type="submit" value="Add" className='p-2 border bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700' />
     </form>
      <Link to='/' className="p-2 border bg-green-500 text-white rounded-full shadow-md hover:bg-green-700">Todos</Link>

    </div>
  )
}

export default AddTodo