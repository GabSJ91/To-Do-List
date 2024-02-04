import { useState } from 'react';
import Todo from './components/Todo';
import './App.css';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

function App() {
  const  [todos, setTodo]  = useState([
    {
      id: 1,
      text: "Trabalhar",
      category: "Trabalho",
      isCompleted: false,
    },

    {
    id: 2,
    text: "Ir para a Academia",
    category: "Pessoal",
    isCompleted: false,
    },

    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
      },
  ]);

  const [search, setSearch] = useState("")

  //Aqui sera criado novas tarefas
  const addTodo = (text, category) => {
    const newTodos = [...todos,{
      id: Math.floor(Math.random() * 10000),//Gerador de numeros aleatorios
      text,
      category,
      isCompleted: false,
    },
   ];
   setTodo(newTodos)
  };

  const removeTodo = (id) => { //função para remover tarefas
    const newTodos = [...todos];
      const filterTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
      setTodo(filterTodos);
  }


  const completeTodo = (id) => { //função para completar tarefas
    const newTodos = [...todos]
    newTodos.map((todo) =>  todo.id === id ? todo.isCompleted = !todo.isCompleted : todo )
    setTodo(newTodos)
  }



  return (
    <>
      <div className='app'>
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch}/>
          <div className='toDo__list'>
            {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
              <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
            ))}
          </div>
          <TodoForm addTodo={addTodo}/>
      </div>
    </>
  )
}

export default App
