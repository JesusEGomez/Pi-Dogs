import "./index.css"
import axios from "axios"
import { useState,useEffect } from "react"
import Validation from "../../validation"


const Form = ()=>{
    const [errors,setErrors]=useState({})
    const [temperaments,setTemperaments]=useState([])
    const [dogData,setDogData] = useState({
        name:"",
        height:"",
        weight:"",
        life_span:"",
        temperament:[],
        image:""
    })

    useEffect(()=>{
        getTemperaments()
        
    },[])

    const getTemperaments = async ()=>{
        const dbTemperaments = await axios.get("http://localhost:3001/temperament")
        setTemperaments(dbTemperaments.data) 
    }
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
            const {name,heigh,weight,life_span,temperament,image} = dogData
        const response = await axios.post("http://localhost:3001/dogs/",{
            image:{
                url:image
            },
            name,
            height:{
                metric:heigh
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
        <div >
            <h1>Esto es el Form</h1>
            <form onSubmit={handlerSubmit} className="form-container">
                <label name="name">Nombre:</label>
                <input onChange={handlerChange} autoComplete="off" type="text" name="name" />
                {errors.name? <span>{errors.name}</span>:null}

                <label name="image">Imagen:</label>
                <input onChange={handlerChange} autoComplete="off" type="text" name="image" />
                {errors.image? <span>{errors.image}</span>:null}

                <label  name="weight">Peso mínimo-máximo(Kg):</label>
                <input onChange={handlerChange} placeholder="ejemplo: 25-30" type="text" name="weight" />
                {errors.weight? <span>{errors.weight}</span>:null}

                <label autoComplete="off" name="height">Altura minima-máxima(cm):</label>
                <input onChange={handlerChange} placeholder="ejemplo: 25-30" type="text" name="height" />
                {errors.height? <span>{errors.height}</span>:null}

                <label autoComplete="off" name="life_span">Esperanza de vida minima-maxima(años)</label>
                <input placeholder="ejemplo: 25-30" onChange={handlerChange} type="text" name="life_span" />
                {errors.life_span? <span>{errors.life_span}</span>:null}

                <label autoComplete="off" name="temperament">Temperamento:</label>
                <select onChange={handlerChange} name="temperament" >
                {temperaments.map((element)=>{
                    return <option key={element.id} value={element.id}>
                        {element.name}
                    </option>
                })}
                </select>
                {dogData.temperament.map((element)=>{
                    let nameTemperament = temperaments.find((temperament)=>temperament.id === element)
                    return <span key={element}>{nameTemperament.name}</span>
                })}
                <button type="submit">Crear Perro</button>
            </form>
        </div>
    )
    
}
export default Form