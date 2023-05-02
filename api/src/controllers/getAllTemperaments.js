const {Temperament} = require("../db")
const { v4: uuidv4 } = require('uuid');
const axios = require("axios")

const getAllTemperaments = async ()=>{
    const apiDogs = await axios.get("https://api.thedogapi.com/v1/breeds")
    const dbTemperament = await Temperament.findAll({
        attributes:["name","id"],
        raw:true
    })
    let temperaments = []
    const splitTemperaments = []
    //me traigo a un array los temperamentos y transformo los strings en arrays para luego poder acceder a cada uno de los adjetivos
    apiDogs.data.forEach(element => {
        if(element.temperament)splitTemperaments.push(element.temperament.split(",")) 
    });
    
    for (let index = 0; index < splitTemperaments.length; index++) {
        
        for (let x = 0; x < splitTemperaments[index].length; x++) {
            let id=uuidv4()
            const arrayAdjetivos = splitTemperaments[index]
            temperaments.push({id,name:arrayAdjetivos[x].trim()})
        }
    }
    //Me fijo cuales son los temperamentos repetidos utilizan do filter con la ayuda de un findIndex para verificar si existe otro objeto con el mismo valor de propiedad y no incluirlo en el ultimo array
    let finalArray = temperaments.filter((item,index,array)=>{
    return array.findIndex((elemento)=> elemento.name === item.name) === index
    })

    if(dbTemperament.length !== 0  ) return dbTemperament
    else{
    const dbTemperaments = await Temperament.bulkCreate(finalArray)
    return dbTemperaments
    }
    
}
module.exports= getAllTemperaments