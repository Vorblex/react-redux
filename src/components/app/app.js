import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.css'

export default class extends Component {

  state = {
    todoData: [
      { id: 'e1', label: 'Drink Coffee', important: false},
      { id: 'e2', label: 'Learn React!', important: true},
      { id: 'e3', label: 'Best Apps', important: false}
    ]
  }

  delateItem = (id) => {
    this.setState(({todoData}) => {
      const ndx = todoData.findIndex( el => el.id === id )
      
      return {
        todoData: [
          ...todoData.slice(0, ndx),
          ...todoData.slice(ndx + 1)
        ]
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
  
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          items={ this.state.todoData }
          onDelated={ this.delateItem } />
      </div>
    )
  }
}