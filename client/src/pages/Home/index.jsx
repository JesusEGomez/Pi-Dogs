
import { useEffect,useState} from "react"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import { getDogs,getTemperaments, resetCurrentPage } from "../../Redux/actions"
import { Cards,Filters } from "../../components"
import PaginationControls from "../../components/PaginationControls"


const Home = ({clickHandler})=>{
    const dispatch = useDispatch()
    const [filteredDogs, setFilteredDogs] = useState(null)
    
    const state = useSelector(state=>state)
    const {dogs,currentPage, itemsPerPage,temperaments,Loading} = state

    useEffect(()=>{
        dispatch(getDogs())
        dispatch(getTemperaments())
        
    },[])
    
    
    //*Filtro en base a la propiedad "id" de imagen
    const filterByOrigin=(event)=>{
        const filterName = event.target.value
            dispatch(resetCurrentPage())
        let newDogs=[]
            if(filterName === "creados"){
                newDogs = dogs.filter((dog)=>!dog.image.hasOwnProperty("id"))
                setFilteredDogs(newDogs)

            }else if(filterName === "api"){
                newDogs = dogs.filter((dog)=>dog.image.hasOwnProperty("id"))
                setFilteredDogs(newDogs)

            }else{
                
                setFilteredDogs(dogs)
            }
        
            
        }


    const filterTempHandler =(event)=>{
        const filter = event.target.value 
        if(filter === "todos") return setFilteredDogs(dogs)
        let newDogs=[]
        dispatch(resetCurrentPage())
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
        const dogsToSort= filteredDogs? [...filteredDogs] : [...dogs]
        dispatch(resetCurrentPage())
        
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
    //* Primero obtengo los pesos maximos de cada perro junto a su id de manera ordenada en un array, luego lo utilizo para comprar con la lista de todos los perros y poder ordenarlos
    const sortByWeight =(event)=>{
        const orden = event.target.value
        const dogsToSort= filteredDogs? [...filteredDogs] :[...dogs]
        const newDogs=[]
        dispatch(resetCurrentPage())
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
        }
        else if(orden === "ascendente"){
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
            filterByOrigin={filterByOrigin}
            />
            { 
                <Cards
                dogs={dogsToRender}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage} 
                clickHandler={clickHandler}/>
                    
            }
            
            <PaginationControls className="controls-container"  arrayLength={arrayLength} />
        </div>
    )
    
}
export default Home