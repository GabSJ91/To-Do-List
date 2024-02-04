import { useState } from "react"


const TodoForm = ({ addTodo }) => {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    if ( !title || !category) return
    //se valor for preenchido vai adicionar 'todo' e limpar os campos
    addTodo(title, category)
    setTitle('')//isso limpa o input apos o envio
    setCategory('')//isso limpa o input apos o envio

  }


  return (
    <div className='todo__form'>
      <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>

           <input
            type='text'
            placeholder='Digite o título'
            onChange={(e) => setTitle (e.target.value)}
            value = {title}
            />

            <select onChange={(e) => setCategory (e.target.value)} value = {category}>
              <option value="">Selecione uma Categoria</option>
              <option value="Trbalho">Trabalho</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Estudos">Estudos</option>
            </select>

            <button type='submit'>Criar Tarefa</button>

        </form>
    </div>
  )
}

export default TodoForm