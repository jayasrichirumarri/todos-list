import {Component} from 'react'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

import './App.css'

class App extends Component {
  state = {todoItems: []}

  componentDidMount() {
    this.getTodoData()
  }

  getTodoData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1/todos'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const getTodoData = await response.json()
    console.log(getTodoData)
    this.setState({todoItems: getTodoData})
  }

  checkUp = id => {
    const {todoItems} = this.state
    const updateData = todoItems.map(eachItem => {
      if (eachItem.id === id) {
        return {
          id: eachItem.id,
          title: eachItem.title,
          completed: !eachItem.completed,
        }
      }

      return eachItem
    })
    this.setState({todoItems: updateData})
  }

  render() {
    const {todoItems} = this.state
    return (
      <>
        <h1 className="heading">Todo Application</h1>
        <AddTodo />
        <TodoList todoItems={todoItems} checkUp={this.checkUp} />
      </>
    )
  }
}

export default App
