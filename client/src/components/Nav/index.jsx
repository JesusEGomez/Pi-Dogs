import "./index.css"
import { Link } from "react-router-dom"
const Nav = ()=>{
    return(
        <div className="navBar-container">
            <Link to="/home"><button>Home</button></Link>
            <Link to="/form"><button>Form</button></Link>
        </div>
    )
    
}
export default Nav