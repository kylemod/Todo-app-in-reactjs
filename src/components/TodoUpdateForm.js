const TodoUpdateForm = ({ saveUpdate, updateTodoText, setUpdateTodoText }) => {
  return (
    <div>
      <h3>Todo Update</h3>
      <form onSubmit={saveUpdate}>
        <input 
          type="text" 
          value={updateTodoText}
          onChange={(e) => setUpdateTodoText(e.target.value)} 
        />
        <button type="submit">Save Update</button> 
      </form>
    </div>
  )
}

export default TodoUpdateForm