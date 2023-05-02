import "./index.css"
import { useState } from "react"
const SearchBar = ({ onSearch }) => {
    let [name, setName] = useState("")

    const handleChange = (event) => {
        setName(
            name = event.target.value
        )
    }
    return (
        <div>
            <input type='search' onChange={handleChange} name={name} value={name} />
            <button className="searchBar-container-button" onClick={()=>onSearch(name)}>Buscar</button>
        </div>
    )

}
export default SearchBar