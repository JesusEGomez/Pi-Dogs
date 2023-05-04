import "./index.css"

const Filters = ({temperaments,filterTempHandler,sortByName,sortByWeight})=>{
    return(
        <div>
            <label autoComplete="off" name="temperament">Temperamento:</label>
                <select onChange={filterTempHandler}  name="temperament" >
                {temperaments.map((element)=>{
                    return <option key={element.id} value={element.name}>
                        {element.name}
                    </option>
                })}
                </select>

            <label autoComplete="off" name="ordenamiento-raza">Nombres de razas</label>
            <select onChange={sortByName} >
                <option value=""></option>
                <option value="descendente">descendente</option>
                <option value="ascendente">ascendente</option>
            </select>
            <label autoComplete="off" name="ordenamiento-peso">Peso</label>
            <select onChange={sortByWeight} >
                <option value=""></option>
                <option value="descendente">descendente</option>
                <option value="ascendente">ascendente</option>
            </select>
                
        </div>
    )
}
export default Filters