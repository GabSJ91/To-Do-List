



//Atalho 'racfe'
const todo = ({ todo, removeTodo, completeTodo  }) => {
  return (
    <div key={todo.id} className='toDo' style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
    <div className='content'>
      <p>{todo.text}</p>
       <p className='category'>
         <p>({todo.category})</p>
       </p>
    </div>
    
    <div>
      <button onClick={() => completeTodo(todo.id)}>Completar</button>
      <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  </div>
  )
}

export default todo