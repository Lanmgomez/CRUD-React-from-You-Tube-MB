// hooks
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
// sass
import "./SearchBar.sass"
// icon
import { BiSearchAlt2 } from "react-icons/bi"

const SearchBar = () => {

    const [query, setQuery] = useState()
    const navigate = useNavigate()

    const handleSubmitSearch = async (e) => {
        await e.preventDefault()
        await navigate(`/search?q=${query}`)
    }

  return (
    <form onSubmit={handleSubmitSearch} className="search-bar">
        <input 
            type="text" 
            placeholder='Faça uma busca...'
            onChange={(e) => setQuery(e.target.value)}
            className="search-bar-input"
        />
        <button className='btn-search'>
            <BiSearchAlt2 className='icon-search' />
        </button>
    </form>
  )
}

export default SearchBar