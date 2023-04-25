const { v4: uuidv4 } = require('uuid');
const{ Dog } = require("../db")

const createDog = async(image,name, height,weight,life_span)=>{
    console.log(image)
    const id = uuidv4()
    console.log(id)
    if(!image || !name || !height || !weight)  throw Error("Faltan datos")
    else{
        const newDog = await Dog.create({
            image,
            name,
            height,
            weight,
            life_span,
            id
        })
        return newDog
    }

}
module.exports= createDog