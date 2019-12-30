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
    return (
      <input placeholder="search" />
    )
  }

const App = () => {

  const isLoggedIn = true
  const loginBox = <div>Log in</div>
  const welcomeBox = <div>Welcome</div>

  return (
    <div>
      <span>{ (new Date()).toString() }</span>
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}
  
ReactDom.render(<App />, document.getElementById('root'))