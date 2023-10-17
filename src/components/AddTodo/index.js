import {Component} from 'react'
import './index.css'

class AddTodo extends Component {
  state = {todoItem: ''}

  addingTodo = event => {
    this.setState({
      todoItem: event.target.value,
    })
  }

  render() {
    const {todoItem} = this.state
    return (
      <>
        <div>
          <input
            type="text"
            className="userInput"
            value={todoItem}
            onChange={this.addingTodo}
          />
          <button type="button" className="addButton">
            Add
          </button>
        </div>
      </>
    )
  }
}

export default AddTodo
