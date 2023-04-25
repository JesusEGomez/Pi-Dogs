const axios = require("axios")
const{ Dog } = require("../db")

const getAllDogs = async()=>{
    const apiDogs = await axios.get("https://api.thedogapi.com/v1/breeds")
    
    const dbDogs = await Dog.findAll()
    const razas = []
    apiDogs.data.forEach(element => {
        razas.push({name:element.name})
    });
    return [...razas,dbDogs]

}
module.exports= getAllDogs