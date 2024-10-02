import React, { useState } from 'react'

const TodoTile = ({title}) => {
    const [textDec, settextDec] = useState('none')

    const handleTodoCheck = (e)=>{
        if(e.target.checked){
            settextDec("line-through")
        }else{
            settextDec("none")
        }
    }
  return (
    <div >
        <input type="checkbox" onChange={handleTodoCheck} />
        <span style={{textDecoration:textDec}}>{title}</span>
    </div>
  )
}

export default TodoTile