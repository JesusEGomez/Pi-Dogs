const axios = require("axios")

const getDogByName = async(name)=>{
    const apiDogs = await axios.get("https://api.thedogapi.com/v1/breeds")
    const dogs = apiDogs.data
    console.log(name)
    const dog = dogs.find((element)=>element.name.toLowerCase() === name.toLowerCase())
    if(dog){
        const {id,name,life_span,height,weight,image} = dog
        const localDog = {id,name,life_span,height,weight,image}
        return localDog
    }
    else throw Error("No se encontró la raza")

}
module.exports= getDogByName