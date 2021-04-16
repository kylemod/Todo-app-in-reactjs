import { useState } from 'react'
import TodoList from './TodoList'
import TodoUpdateForm from './TodoUpdateForm'

const TodoForm = () => {
  // our todos state
  const [todos, setTodos] = useState([])
  
  // todo state for creating new todo item
  const [todo, setTodo] = useState({})
  
  // show/hide our update form
  const [isUpdate, setIsUpdate] = useState(false)
  
  // for update todo id
  const [updateTodoId, setUpdateTodoId] = useState("")
  
  // new text for our todo update
  const [updateTodoText, setUpdateTodoText] = useState("")
  
  //creating todo function
  const createTodo = (e) => {
    // prevent from refreshing page
    e.preventDefault()
    
    // validate
    if(e.target[0].value.trim() === "") {
      alert('Text is required!')
    } else {
      // we cant use push so we use concat
      setTodos(todos => todos.concat(todo))
      // set to empty 
      e.target[0].value = ""
    }
  }
  
  // updating the todo
  const updateTodo = (id) => {
    // display our update form
    setIsUpdate(true)
    
    // we copy todos since its not recommended to directly change our todos from state
    let tempTodos = [...todos]
    // loop it for if else statement
    tempTodos.forEach(todo => {
      if(todo.id === id) {
        // set the update text
        setUpdateTodoText(todo.text)
        // we pass the id to use for saveUpdate function
        setUpdateTodoId(todo.id)
      }
    })
  }
  
  // for saving our update
  const saveUpdate = (e) => {
    e.preventDefault()
    let tempTodos = [...todos]
    tempTodos.forEach(todo => {
      if(todo.id === updateTodoId) {
        // we set the new value of update text
        todo.text = updateTodoText
      }
    })
    // we set the new todos
    setTodos(tempTodos)
    // hide the update form
    setIsUpdate(false)
  }
  
  // deleting todo
  const deleteTodo = (index) => {
    let tempTodos = [...todos]
    // we use splice for delete
    tempTodos.splice(index,1)
    // set the new todos
    setTodos(tempTodos)
  }
 
  return (
    <div>
      <h3>Todo form</h3>
      <form onSubmit={createTodo}>
        <input 
          type="text" 
          placeholder="Todo text..." 
          onChange={(e) => setTodo({ id: Date.now(), text: e.target.value })}
        />
        <button type="submit">Add todo</button> 
      </form>
      
      {isUpdate  && <TodoUpdateForm saveUpdate={saveUpdate} updateTodoText={updateTodoText} setUpdateTodoText={setUpdateTodoText} /> }
      
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoForm