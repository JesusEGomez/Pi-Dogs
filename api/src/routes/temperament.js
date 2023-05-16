const {Router} = require("express")
const getAllTemperaments = require("../controllers/getAllTemperaments")


const temperamentRouter = Router();

temperamentRouter.get("/", async(req,res)=>{
    
    try {
        const allTemperaments = await getAllTemperaments()
        res.status(200).json(allTemperaments)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports= temperamentRouter