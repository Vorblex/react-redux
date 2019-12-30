import React from 'react'
import ReactDom from 'react-dom'
import TodoList from './components/todo-list'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false},
    { label: 'Learn React!', important: true},
    { label: 'Best Apps', important: false}
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList items={ todoData } />
    </div>
  )
}
  
ReactDom.render(<App />, document.getElementById('root'))