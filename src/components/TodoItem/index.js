import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {eachItem, selected, checkUp} = this.props
    const {id, title, completed} = eachItem

    const isCheckedTodo = () => {
      checkUp(id)
    }

    return (
      <>
        <li className="list-container">
          <input
            type="checkbox"
            className="checkbox"
            checked={`${selected}`}
            id="todoItem"
            onClick={this.isCheckedTodo}
          />
          <label className="label" htmlFor="todoItem">
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
