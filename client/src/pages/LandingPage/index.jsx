import "./index.css"
import { Link } from "react-router-dom"
const LandingPage = ()=>{
    return(
        <div className="principal-container">
            <div className="landing-container">
            <h1 className="title"> Wiki Puppies</h1>
            <Link to="/home"><button className="home-button">Acceder</button></Link>
            </div>
            
        </div>
    )
    
}

export default LandingPage