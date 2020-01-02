import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class extends Component {

  maxId = 1

  state = {
    filter: 'all',
    term: '',
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Learn React!'),
      this.createTodoItem('Best Apps'),
      this.createTodoItem('Be smarter')
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    } 
  }

  findIndex(arr, id) {
    return arr.findIndex( el => el.id === id )
  }

  delateItem = (id) => {
    this.setState(({todoData}) => {
      const ndx = this.findIndex( todoData, id)
      
      return {
        todoData: [
          ...todoData.slice(0, ndx),
          ...todoData.slice(ndx + 1)
        ]
      }
    })
  }

  addItem = (text) => {

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        this.createTodoItem(text)
      ]

      return {
        todoData: newArr
      }
    })
  }

  changeFilter = e => {
    this.setState({ filter: e })
  }

  toggleProperty(arr, id, key) {
    const newArr = [...arr],
          ndx =  this.findIndex( newArr, id),
          newItem = {...newArr[ndx]}

    newItem[key] = !newItem[key]
    newArr[ndx] = newItem

    return newArr
  }

  onToggleDone = (id) => {
    this.setState(({todoData})=> {
      return { todoData: this.toggleProperty(todoData, id, 'done') }
      // const ndx = this.findIndex(todoData, id),
      //       oldItem = todoData[ndx],
      //       newItem = { ...oldItem, done: !oldItem.done},
      //       newArr = [...todoData.slice(0, ndx), newItem, ...todoData.slice(ndx + 1)]
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData})=> {
      return { todoData: this.toggleProperty(todoData, id, 'important') }
    })
  }

  changeTerm = (term) => {
    this.setState({ term })
  }

  filteredTodos(todoData, filter) {
    if(filter === 'active') return todoData.filter( e => !e.done)
    if(filter === 'done') return todoData.filter( e => e.done)
    
    return todoData
  }

  search(items, term) {
    if(term.length === 0) return items

    return items.filter( el =>  ~el.label.toLowerCase().indexOf(term.toLowerCase()) )
  }

  render() {
    const { todoData, term, filter } = this.state,
          doneCount = todoData.filter( el => el.done ).length,
          todoCount = todoData.length - doneCount,
          visibleItems = this.search(this.filteredTodos(todoData, filter), term)

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />
  
        <div className="top-panel d-flex">
          <SearchPanel
            term={ term }
            onTermChange={ this.changeTerm } />
            
          <ItemStatusFilter
            filter={ filter }
            onFilterChange={ this.changeFilter }
          />
        </div>
  
        <TodoList 
          items={ visibleItems }
          onDelated={ this.delateItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />

        <ItemAddForm addItem={ this.addItem } />
      </div>
    )
  }
}