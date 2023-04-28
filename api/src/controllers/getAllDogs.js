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
    const allDogs = [...dbDogs,...apiDogs.data]
    const razas = []
    allDogs.forEach(element => {
        if(element.hasOwnProperty("temperaments")){
            const {name,id,temperaments,image,life_span,height,weight} = element
            const temperament = []
            temperaments.forEach((item)=>{
                temperament.push(item.name)
            })

            razas.push({name,id,temperament:temperament.toString(),image,life_span,height,weight})
            
        }else razas.push(element)
        
    });
    return razas

}
module.exports= getAllDogs