import "./index.css"
const Card = ({name,image,weight,temperament})=>{
    return(
        <div>
            <img src={image} alt={name} className="dog-image" />
            <h3>nombre: {name}</h3>
            <h3>Peso: {weight}</h3>
            <h3>Temperamento: {temperament}</h3>

        </div>
    )
    
}
export default Card