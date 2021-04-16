const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  
  return (
    <div>
      <h3>Todo List</h3>
      {todos.map((todo, index)  => (
        <div key={todo.id}>
           <p>{todo.text}</p>
           <button onClick={() => deleteTodo(index)}>Delete</button>
           <button onClick={() => updateTodo(todo.id)}>Update</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList