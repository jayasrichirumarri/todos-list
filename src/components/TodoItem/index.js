import React, {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  isCheckedTodo = () => {
    const {eachItem, checkUp} = this.props
    const {id} = eachItem
    checkUp(id)
  }

  render() {
    const {eachItem, selected} = this.props

    return (
      <>
        <li className="list-container">
          <input
            type="checkbox"
            className="checkbox"
            checked={selected} // Use the selected prop directly for checked attribute
            id={`todoItem_${eachItem.id}`} // Unique ID for each checkbox
            onChange={this.isCheckedTodo} // Use onChange for checkboxes
          />
          <label className="label" htmlFor={`todoItem_${eachItem.id}`}>
            {eachItem.title}
          </label>
          <button type="button" className="edit-button">
            Edit
          </button>
          <button type="button" className="remove-button">
            Remove
          </button>
        </li>
      </>
    )
  }
}

export default TodoItem
