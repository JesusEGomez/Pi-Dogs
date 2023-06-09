const { v4: uuidv4 } = require('uuid');
const{ Dog } = require("../db")

const createDog = async(image,name, height,weight,life_span,temperament)=>{
    const id = uuidv4()
    if(!image || !name || !height || !weight )  throw Error("Faltan datos")
    else{
        const newDog = await Dog.create({
            image,
            name,
            height,
            weight,
            life_span,
            id
        })

        newDog.addTemperaments(temperament)

        return newDog
    }

}
module.exports= createDog