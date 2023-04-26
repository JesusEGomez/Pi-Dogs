const axios = require("axios")
const{ Dog,Temperament } = require("../db")
const { raw } = require("body-parser")

const getAllDogs = async()=>{
    const apiDogs = await axios.get("https://api.thedogapi.com/v1/breeds")
    
    const dbDogs = await Dog.findAll({
        include:{
            model:Temperament,
            attributes:['name'],
            through:{
                attributes:[]
            },
        },
    
    })
    console.log(dbDogs)
    const allDogs = [...dbDogs,...apiDogs.data]
    const razas = []
    allDogs.forEach(element => {
        razas.push({name:element.name,Temperament:element.temperaments})
    });
    return razas

}
module.exports= getAllDogs