import "./index.css"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar"


const Nav = ({onSearch})=>{

    return(
        <div className="navBar-container">
            <div className="buttons-container">
            <Link to="/home"><button className="link-buttons">Inicio</button></Link>
            <Link to="/form"><button className="link-buttons">Crear</button></Link>
            </div>
            <SearchBar className="searchBar" onSearch={onSearch} />
        </div>
    )
    
}
export default Nav