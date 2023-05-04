
import { useEffect,useState} from "react"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import { getDogs,getTemperaments } from "../../Redux/actions"
import { Cards,Filters } from "../../components"
import PaginationControls from "../../components/PaginationControls"

const Home = ({clickHandler})=>{
    const dispatch = useDispatch()
    const [filteredDogs, setFilteredDogs] = useState(null)

    useEffect(()=>{
        dispatch(getDogs())
        dispatch(getTemperaments())
        
    },[])
    
    const state = useSelector(state=>state)
    const {dogs,currentPage, itemsPerPage,temperaments} = state



    const filterTempHandler =(event)=>{
        let newDogs=[]
        const filter = event.target.value 
        dogs.forEach((dog)=>{
            let temperament = []
            if(dog.temperament)temperament= dog.temperament.split(",")
            let arraySinEspacios = temperament.map((element)=>element.trim())
            if(arraySinEspacios.includes(filter)) newDogs.push(dog)
        })
        setFilteredDogs(newDogs)
    }


    const sortByName=(event)=>{
        const orden = event.target.value
        console.log(orden)
        let dogsToSort= filteredDogs? [...filteredDogs] : [...dogs]
        
        if(orden === "descendente"){
            dogsToSort.sort((a,b)=>{
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1
                return 0
    
            })
        }else if("ascendente"){
            dogsToSort.sort((a,b)=>{
                if(a.name > b.name) return -1;
                if(a.name < b.name) return 1
                return 0
    
            })
        }
        setFilteredDogs(dogsToSort)

    } 

    const sortByWeight =(event)=>{
        const orden = event.target.value
        const dogsToSort= filteredDogs? [...filteredDogs] :[...dogs]
        const newDogs=[]
        
        if(orden === "descendente"){
            const aux = dogsToSort.map((dog)=>{ 
                const auxWeight= dog.weight.metric.split(" - ")
    
                const weight = Math.max(...auxWeight.map(val =>  parseInt(val)))
    
                return {weight:weight ,id:dog.id}})
                .filter((item)=>!isNaN(item.weight))
                .sort((a,b)=>b.weight - a.weight)
    
                aux.forEach((element)=>{
                    newDogs.push(dogsToSort.find((dog)=>dog.id === element.id))
                })
                setFilteredDogs(newDogs)
        }else if(orden === "ascendente"){
                const aux = dogsToSort.map((dog)=>{ 
                const auxWeight= dog.weight.metric.split(" - ")
    
                const weight = Math.max(...auxWeight.map(val =>  parseInt(val)))
    
                return {weight:weight ,id:dog.id}})
                .filter((item)=>!isNaN(item.weight))
                .sort((a,b)=>a.weight - b.weight)
    
                aux.forEach((element)=>{
                    newDogs.push(dogsToSort.find((dog)=>dog.id === element.id))
                })
                setFilteredDogs(newDogs)
        }

        
        console.log(newDogs)

    }



    const dogsToRender = filteredDogs || dogs
    let arrayLength = dogsToRender.length
    
    



    return(
        <div className="home-container">
            <Filters 
            temperaments={temperaments} 
            sortByName={sortByName} 
            filterTempHandler={filterTempHandler}
            sortByWeight={sortByWeight}
            />
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