import "./index.css"
const Card = ({name,image,weight,temperament,clickHandler,id})=>{
    return(
        
    <main className="card-container">
        <div className = "card">
            <img className="dog-image" src={image} alt={name}/>
            <div className="card-content">
            <h2 className="dog-name">
                {name}
            </h2>
            <p className="dog-description">
                {`Peso: ${weight}Kg`} <br /> {`Temperamento: ${temperament}`}
            </p>
            <a  onClick={()=>clickHandler(id)} className="dog-button">
                Find out more 
                <span className="material-symbols-outlined">
                ➡️
                </span>
            </a>
            </div>
        </div>
    </main>
    )
    
}
export default Card
