const { Router } = require('express');;
const { postActivity } = require("../controllers/controllers")
const router = Router();

router.post("/",async (req,res,next)=>{
let { name, difficulty, duration, season, countries} = req.body;
    if(!name || !difficulty || !duration || !season || !countries){
        res.status(500).send("data missing");
    }
    try{
        let act = await postActivity(name, difficulty, duration, season, countries);
        res.json(act)
    }catch(e){  
        next(e)
    }
})

module.exports = router;
