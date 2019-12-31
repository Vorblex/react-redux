import React, { Component } from 'react'

import './todo-list-item.css'

export default class extends Component {

  render() {

    const { label, onDelated,
            onToggleImportant,
            onToggleDone,
            important, done } = this.props

    let classNames = 'todo-list-item'

    if(done) {
      classNames += ' done'
    } else {
      let res = classNames.split(' ')
      res = res.splice(res.indexOf('done'))
      classNames = res.join()
    }

    if(important) {
      classNames += ' important'
    } 
    // else {
    //   let res = classNames.split(' ')
    //   res = res.splice(res.indexOf('important'))
    //   classNames = res.join()
    // }
    
    return (
      <span className={ classNames }>
        <span 
          className="todo-list-item-label"
          onClick={ onToggleDone }>
          { label }
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ onToggleImportant }>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ onDelated }>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    )
  }
}