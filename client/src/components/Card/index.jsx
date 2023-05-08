import "./index.css"
const Card = ({name,image,weight,temperament,clickHandler,id})=>{
    return(
        
        <main className="card-container">
        <div onClick={()=>clickHandler(id)} className = "card">
        <img className="dog-image" src={image} alt={name}/>
        <div className="card-content">
            <h2 className="dog-name">
                {name}
            </h2>
            <div className="dog-description">
            <h3>{`Peso: ${weight}Kg`}</h3>
            <h3>{`Temperamento: ${temperament}`}</h3>
            </div>
            
        </div>
        

    </div>
    </main>

    )
    
}
export default Card
