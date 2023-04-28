
import { useEffect } from "react"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import { getDogs } from "../../Redux/actions"
import { Cards } from "../../components"
import PaginationControls from "../../components/PaginationControls"
const Home = ()=>{

    const dispatch = useDispatch()
    useEffect(()=>{
        if(dogs.length === 0){
            return dispatch(getDogs())
        }
    },[])
    const state = useSelector(state=>state)
    const {dogs,currentPage, itemsPerPage} = state
    let arrayLength = dogs.length


    return(
        <div>
            <h1>Esto es el home</h1>
            <Cards  
            dogs={dogs} 
            currentPage={currentPage} 
            itemsPerPage={itemsPerPage}/>
            <PaginationControls arrayLength={arrayLength} />
        </div>
    )
    
}
export default Home