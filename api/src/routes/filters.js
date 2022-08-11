const { Router } = require('express');
const router = Router();
const{ nameAsc, nameDesc, regions, activities, population } = require("../controllers/controllers.js")

router.get("/asc",async (req,res,next)=>{
    try{
        let asc = await nameAsc();
    res.json(asc)
    }catch(err){
        next(err)
    }
})  

router.get("/desc",async (req,res,next)=>{
    try{
        let desc = await nameDesc();
    res.json(desc)
    }catch(err){
        next(err)
    }
})  

router.get("/regions",async (req,res,next)=>{
    let {continent} = req.query;
    try{
        let countries = await regions(continent);
        res.json(countries)
    }catch(e){
        next(e)
    }
})

router.get("/activities", async (req,res,next)=>{
    try{
    let {name} = req.query;
    let activity;
    if(name){
        activity = await activities(name);
    }else{
        activity = await activities();
    }
        res.json(activity)
    }catch(e){
        next(e)
    }
})

router.get("/population", async (req,res,next)=>{
    try{
        let {data} = req.query;
        let countries = await population(data);
        res.json(countries)
    }catch(e){
        next(e)
    }
})
module.exports = router;
