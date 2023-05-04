import "./index.css"

const Filters = ({temperaments,filterHandler})=>{
    return(
        <div>
            <label autoComplete="off" name="temperament">Temperamento:</label>
                <select onChange={filterHandler}  name="temperament" >
                {temperaments.map((element)=>{
                    return <option key={element.id} value={element.name}>
                        {element.name}
                    </option>
                })}
                </select>
                
        </div>
    )
}
export default Filters