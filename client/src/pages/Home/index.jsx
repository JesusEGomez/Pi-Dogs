
import { useEffect,useState} from "react"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import { getDogs,getTemperaments } from "../../Redux/actions"
import { Cards,Filters } from "../../components"
import PaginationControls from "../../components/PaginationControls"

const Home = ({clickHandler})=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getDogs())
        dispatch(getTemperaments())
        
    },[])
    
    const state = useSelector(state=>state)
    const {dogs,currentPage, itemsPerPage,temperaments} = state

    const filterHandler =(event)=>{
        let newDogs=[]
        const filterTemp = event.target.value 
            dogs.forEach((dog)=>{
                let temperament = []
                if(dog.temperament)temperament= dog.temperament.split(",")
                let arraySinEspacios = temperament.map((element)=>element.trim())
                if(arraySinEspacios.includes(filterTemp)) newDogs.push(dog)
            })
            setFilteredDogs(newDogs)
    }

    const [filteredDogs, setFilteredDogs] = useState(null)
    const dogsToRender = filteredDogs || dogs
    let arrayLength = dogsToRender.length
    
    



    return(
        <div className="home-container">
            <Filters temperaments={temperaments} filterHandler={filterHandler}/>
            { 
                <Cards
                dogs={dogsToRender}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage} 
                clickHandler={clickHandler}/>
                    
            }
            
            <PaginationControls className="controls-container" arrayLength={arrayLength} />
        </div>
    )
    
}
export default Home