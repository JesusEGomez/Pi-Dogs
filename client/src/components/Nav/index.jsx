import "./index.css"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar"
const Nav = ({onSearch})=>{
    return(
        <div className="navBar-container">
            <Link to="/home"><button>Home</button></Link>
            <Link to="/form"><button>Form</button></Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
    
}
export default Nav