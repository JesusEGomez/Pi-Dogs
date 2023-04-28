import "./index.css"
import { Link } from "react-router-dom"
const LandingPage = ()=>{
    return(
        <div>
            <h1>Esta es la LandingPage</h1>
            <Link to="/home"><button>Go Home</button></Link>
        </div>
    )
    
}

export default LandingPage