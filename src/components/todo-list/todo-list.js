import React from 'react'
import TodoListItem from '../todo-list-item'

import './todo-list.css'

export default ( { items, onDelated,
                   onToggleImportant,
                   onToggleDone } ) => {

  const elements = items.map( ({ id, ...item }) => {
    return (
      <li  key={ id } className="list-group-item">
        <TodoListItem
          { ...item }
          onDelated={ ()=> onDelated(id) }
          onToggleImportant={ ()=> onToggleImportant(id) }
          onToggleDone={ ()=> onToggleDone(id) }
        />
      </li>
    )
} )

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
}