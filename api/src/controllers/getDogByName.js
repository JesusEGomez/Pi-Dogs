const axios = require("axios")
const{ Dog } = require("../db")

const getDogByName = async(name)=>{
    const apiDogs = await axios.get("https://api.thedogapi.com/v1/breeds")
    const dbDogs = await Dog.findAll()
    const dogs = [...apiDogs.data,dbDogs]
    const dog = dogs.find((element)=>element.name.toLowerCase() === name.toLowerCase())
    if(dog){
        const {id,name,life_span,height,weight,image} = dog
        const localDog = {id,name,life_span,height,weight,image}
        return localDog
    }
    else throw Error(`La raza ${name} no existe`)

}
module.exports= getDogByName