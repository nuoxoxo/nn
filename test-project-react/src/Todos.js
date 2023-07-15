import React from 'react'
import Todo from './Todo'

export default function Todos ({ todos }) {

  return (
    todos.map(e => {
      console.log(e)
      return <Todo key = {e} todo = {e} />
    })
  )
}
