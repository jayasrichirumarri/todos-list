import TodoItem from '../TodoItem'
import './index.css'

const TodoList = props => {
  const {todoItems, checkUp} = props

  return (
    <>
      <ul>
        {todoItems.map(eachItem => (
          <TodoItem
            eachItem={eachItem}
            selected={eachItem.completed}
            key={eachItem.id}
            checkUp={checkUp}
          />
        ))}
      </ul>
    </>
  )
}

export default TodoList
