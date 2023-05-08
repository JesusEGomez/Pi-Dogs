const axios = require("axios")
const{ Dog,Temperament } = require("../db")

const getDogById = async(id)=>{
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
    const dogs =[...dbDogs,...apiDogs.data]
    const dog = dogs.find((element)=>element.id.toString() === id)
    if(dog){
        const {id,name,life_span,height,weight,image,temperament}= dog

        let localDog={}

        if(dog.temperaments){
            const newTemperament=[]
            
            dog.temperaments.forEach(element => {
                newTemperament.push(element.name)
            });
            
            localDog = {id,name,life_span,height,weight,image,temperament:newTemperament.join(",")}
        }else{

            localDog= {id,name,life_span,height,weight,image,temperament} 
        }

        return localDog
    
    }
    else throw Error(`El id ${id} no coincide con ninguna raza`)

}
module.exports= getDogById