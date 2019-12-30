import React from 'react'
import ReactDom from 'react-dom'

const TodoList = () => {

  const items = ['Learn React', 'Build Apps']
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  )
}

const AppHeader = () => {
    return (
      <h1>Toto list</h1>
    )
  }

const SearchPanel = () => {

    const searchText = 'Type here'
    const searchStyle = {
      fontSize: '20px'
    }
    return (
      <input style={ searchStyle } placeholder={searchText} />
    )
  }

const App = () => {

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}
  
ReactDom.render(<App />, document.getElementById('root'))