

const Search = ({search, setSearch}) => {
  return (
    <div>
        <h3>Pesquisar :</h3>
        <input
         className="search"
         type="text"
         value={search} 
         onChange={(e) => setSearch(e.target.value)}
         placeholder="Digite para Pesquisar"
         ></input>
    </div>
  )
}

export default Search