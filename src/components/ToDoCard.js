import React, { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'

const ToDoCard = (props) => {
  const [color, setColor] = useState('#d9d9d9')

  return (
    <li className="toDoCard">

      <h2>
        {props.title}
      </h2>
      <FiTrash2 
        onMouseOver={() => setColor(!color)}
        onMouseOut={() => setColor(!color)}
        color={color ? '#d9d9d9' : 'red'}
        onClick={() => {props.clickToRemove(props.index)}}
      />
  </li>

  )
}

export default ToDoCard
