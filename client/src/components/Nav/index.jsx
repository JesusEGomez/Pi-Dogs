import "./index.css"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar"
const Nav = ({onSearch})=>{
    return(
        <div className="navBar-container">
            <div className="buttons-container">
            <Link to="/home"><button className="link-buttons">Home</button></Link>
            <Link to="/form"><button className="link-buttons">Form</button></Link>
            </div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
    
}
export default Nav