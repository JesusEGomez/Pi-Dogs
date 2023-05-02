import "./index.css"
import Card from "../Card"
const Cards = (props)=>{
    const {dogs,itemsPerPage,currentPage} = props
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedDogs = dogs.slice(startIndex, endIndex);
    
    return(
        <div>
            {displayedDogs.map((element)=>{
                return <Card 
                key={element.id} 
                name={element.name}
                image={element.image.url}
                weight={element.weight.metric}
                temperament={element.temperament} />
            })}
        </div>
    )
    
}
export default Cards