const { Router } = require('express');;
const { postActivity, modAct } = require("../controllers/controllers")
const router = Router();

router.post("/",async (req,res,next)=>{
let { name, difficulty, duration, season, countries} = req.body;
    if(!name || !difficulty || !duration || !season || !countries){
        res.status(500).send("data missing");
    }
    try{
        let act = await postActivity(name, difficulty, duration, season, countries);
        res.status(200).json(act)
    }catch(e){  
        next(e)
    }
})

router.put("/:id", async(req,res,next)=>{
let {id} = req.params;
let {countries} = req.body;
try{
let act = await modAct(id,countries);
res.status(200).json(act)
}catch(e){
next(e)
}
});

// router.delete("/:id", async(req,res,next)=>{
// let {id} = req.params;
// let {countries} = req.body;
// })

module.exports = router;
