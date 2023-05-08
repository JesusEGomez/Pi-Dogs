import "./index.css"
import axios from "axios"
import { useState,useEffect } from "react"
import Validation from "../../validation"
import { getTemperaments, } from "../../Redux/actions"
import { useDispatch,useSelector } from "react-redux"


const Form = ()=>{
    const dispatch = useDispatch()
    const [errors,setErrors]=useState({})
    const [dogData,setDogData] = useState({
        name:"",
        height:"",
        weight:"",
        life_span:"",
        temperament:[],
        image:""
    })
    useEffect(()=>{
        dispatch(getTemperaments())
        
    },[])
    
    const temperaments = useSelector(state=>state.temperaments)
    
    
    const handlerChange =(event)=>{
        let name =event.target.name
        let value =event.target.value
        if(name === "temperament"){
            let options = [...dogData.temperament]
            options.push(value)
            setDogData({
                ...dogData,
                [name]:options
            })
        }else{
            setDogData({
                ...dogData,
                [name]:value
            })
            setErrors(Validation({
                ...dogData,
                [name]:value
            }))
        }
        
    }
    const handlerSubmit = async(event)=>{
        event.preventDefault()
        
        if(Object.keys(errors) === 0 ){
            console.log(errors)
            
            return alert("se deben completar todos los campos")
        }else{
            const {name,height,weight,life_span,temperament,image} = dogData
        const response = await axios.post("http://localhost:3001/dogs/",{
            image:{
                url:image
            },
            name,
            height:{
                metric:height
            },
            weight:{
                metric:weight
            },
            life_span,
            temperament
        })
        alert("el perro se ha creado")
        console.log(response.data)
        }
            
        
        

        
    }
    
    
    return(
        <div className="form-container" >
            <form onSubmit={handlerSubmit} className="form">
                <h3 className="heading">Crea tu perro</h3>
                <label name="name">Nombre:</label>
                <input onChange={handlerChange} autoComplete="off" type="text" name="name" />
                {errors.name? <span className="error">{errors.name}</span>:null}

                <label name="image">Imagen:</label>
                <input onChange={handlerChange} autoComplete="off" type="text" name="image" />
                {errors.image? <span className="error">{errors.image}</span>:null}

                <label  name="weight">Peso mínimo-máximo(Kg):</label>
                <input onChange={handlerChange} placeholder="ejemplo: 25-30" type="text" name="weight" />
                {errors.weight? <span className="error">{errors.weight}</span>:null}

                <label autoComplete="off" name="height">Altura minima-máxima(cm):</label>
                <input onChange={handlerChange} placeholder="ejemplo: 25-30" type="text" name="height" />
                {errors.height? <span className="error">{errors.height}</span>:null}

                <label autoComplete="off" name="life_span">Esperanza de vida minima-maxima(años)</label>
                <input placeholder="ejemplo: 25-30" onChange={handlerChange} type="text" name="life_span" />
                {errors.life_span? <span className="error">{errors.life_span}</span>:null}

                <label autoComplete="off" name="temperament">Temperamento:</label>
                <select onChange={handlerChange} name="temperament" >
                {temperaments.map((element)=>{
                    return <option key={element.id} value={element.id}>
                        {element.name}
                    </option>
                })}
                </select>
                <div className="temperament-list">
                {dogData.temperament.map((element)=>{
                    let nameTemperament = temperaments.find((temperament)=>temperament.id === element)
                    return <p  key={element}>{nameTemperament.name}</p>
                })}
                </div>
                
                <button className="btn" type="submit">Crear</button>
            </form>
        </div>
    )
    
}
export default Form