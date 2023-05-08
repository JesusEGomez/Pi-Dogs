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
        <div className="searchBar-container">
            <input type='search' className="searchBar" onChange={handleChange} name={name} value={name} />
            <button className="searchBar-button" onClick={()=>onSearch(name)}>Buscar</button>
        </div>
    )

}
export default SearchBar