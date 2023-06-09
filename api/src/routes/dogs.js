const {Router} = require("express")
const getAllDogs = require("../controllers/getAllDogs")
const getDogByName = require("../controllers/getDogByName")
const getDogById = require("../controllers/getDogById")
const createDog = require("../controllers/createDog")



const dogsRouter = Router();

dogsRouter.get("/:id", async(req,res)=>{
    const {id}= req.params
    try {
        const dog = await getDogById(id)
        res.status(200).json(dog)
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }
})

dogsRouter.get("/", async(req,res)=>{
    const {name} = req.query
    try {
        if(name){ 
            const dog = await getDogByName(name)
            res.status(200).json(dog)
        }
        else{
            const dogs = await getAllDogs()
            res.status(200).json(dogs)
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
    
    
})

dogsRouter.post("/", async(req,res)=>{
    const {image,name, height,weight,life_span,temperament} = req.body
    try {
        const newDog = await createDog(image,name,height,weight,life_span,temperament) 
        res.status(201).json(newDog)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports= dogsRouter