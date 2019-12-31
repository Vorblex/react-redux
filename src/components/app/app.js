import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.css'

export default () => {

  const todoData = [
    { id: 'e1', label: 'Drink Coffee', important: false},
    { id: 'e2', label: 'Learn React!', important: true},
    { id: 'e3', label: 'Best Apps', important: false}
  ]

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList 
        items={ todoData }
        onDelated={ id => console.log(id) } />
    </div>
  )
}