import "./index.css"

const Filters = ({temperaments,filterTempHandler,sortByName,sortByWeight,filterByOrigin})=>{
    return(
        <div className="principalFilter-container">
            <div className="filter-container" >
                <h3 className="filter-title">Filtrar por: </h3>
                    <select onChange={filterTempHandler}  name="temperament" >
                    <option value="" hidden >
                        Temperamento
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

                <select onChange={filterByOrigin} >
                    <option value="" hidden >
                        Origen
                    </option>
                    <option value="todos">Todos</option>
                    <option value="api">Api</option>
                    <option value="creados">Creados</option>
                </select>
            </div>
            <div className="orden-container">
            <h3 className="filter-title">Ordenar por: </h3>
                <select onChange={sortByName} >
                <option value="" hidden >
                        Raza
                    </option>
                    <option value="descendente">A-Z</option>
                    <option value="ascendente">Z-A</option>
                </select>

                <select onChange={sortByWeight} >
                    <option value="" hidden >
                        Peso
                    </option>
                    <option value="descendente">Descendente</option>
                    <option value="ascendente">Ascendente</option>
                </select>
            </div>
                
        </div>
    )
}
export default Filters