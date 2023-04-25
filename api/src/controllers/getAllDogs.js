const axios = require("axios")

const getAllDogs = async()=>{
    const apiDogs = await axios.get("https://api.thedogapi.com/v1/breeds")
    const razas = []
    apiDogs.data.forEach(element => {
        razas.push({nombre:element.name})
    });
    return razas

}
module.exports= getAllDogs