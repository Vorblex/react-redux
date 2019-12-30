import React from 'react'
import ReactDom from 'react-dom'
import TodoList from './components/todo-list'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'

const App = () => {

  const todoData = [
    { id: 'e1', label: 'Drink Coffee', important: false},
    { id: 'e2', label: 'Learn React!', important: true},
    { id: 'e3', label: 'Best Apps', important: false}
  ]

  return (
    <div className="container">
      <AppHeader />
      <SearchPanel />
      <TodoList items={ todoData } />
    </div>
  )
}
  
ReactDom.render(<App />, document.getElementById('root'))