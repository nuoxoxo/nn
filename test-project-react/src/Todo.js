import React from 'react'

export default function Todo ({ todo }) {

  return (
    <label>
      <input type='checkbox' checked={todo.checked} />
    </label>
    // <div>{ todo }</div>
  )
}
