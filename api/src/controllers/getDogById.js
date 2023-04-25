const axios = require("axios")
const{ Dog } = require("../db")

const getDogById = async(id)=>{
    const apiDogs = await axios.get("https://api.thedogapi.com/v1/breeds")
    const dbDogs = await Dog.findAll()
    const dogs =[...apiDogs.data,dbDogs]
    const dog = dogs.find((element)=>element.id === Number(id))
    if(dog) return dog
    else throw Error(`El id ${id} no coincide con ninguna raza`)

}
module.exports= getDogById