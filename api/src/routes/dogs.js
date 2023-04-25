const {Router} = require("express")
const getAllDogs = require("../controllers/getAllDogs")
const getDogByName = require("../controllers/getDogByName")


const dogsRouter = Router();

dogsRouter.get("/:id",(req,res)=>{
    const {id}= req.params
    res.status(200).json(id)
})
dogsRouter.get("/", async(req,res)=>{
    const {nombre} = req.query
    try {
        if(nombre){ 
            res.status(200).json(await getDogByName(nombre))
        }
        else{
            res.status(200).json(await getAllDogs())
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
    
    
})

dogsRouter.post("/", async(req,res)=>{
})

module.exports= dogsRouter