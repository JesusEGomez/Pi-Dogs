import "./index.css"

const Filters = ({temperaments,filterTempHandler,sortByName,sortByWeight,filterByOrigin})=>{
    return(
        <div className="filter-container">
            <label autoComplete="off" name="temperament">Temperamento:</label>
                <select onChange={filterTempHandler}  name="temperament" >
                <option value="" hidden >
                    Seleccione una opción
                </option>
                <option value="todos" >
                    Todos
                </option>
                {temperaments.map((element)=>{
                    return <option key={element.id} value={element.name}>
                        {element.name}
                    </option>
                })}
                </select>

            <label autoComplete="off" name="origen">Origen</label>
            <select onChange={filterByOrigin} >
                <option value="" hidden >
                    Seleccione una opción
                </option>
                <option value="todos">Todos</option>
                <option value="api">Api</option>
                <option value="creados">Creados</option>
            </select>

            <label autoComplete="off" name="ordenamiento-raza">Nombres de razas</label>
            <select onChange={sortByName} >
            <option value="" hidden >
                    Seleccione una opción
                </option>
                <option value="descendente">Descendente</option>
                <option value="ascendente">Ascendente</option>
            </select>

            <label autoComplete="off" name="ordenamiento-peso">Peso</label>
            <select onChange={sortByWeight} >
                <option value="" hidden >
                    Seleccione una opción
                </option>
                <option value="descendente">Descendente</option>
                <option value="ascendente">Ascendente</option>
            </select>

                
        </div>
    )
}
export default Filters