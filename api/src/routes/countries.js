const { Router } = require('express');;
const { getCountriesDb, getCountry } = require("../controllers/controllers")
const router = Router();
const {Op} = require('sequelize');
const {Country, Activity} = require("../db")

router.get("/:id",async (req,res,next)=>{
    let {id} = req.params;
    try{
        if(!id) res.status(500).send("no id");
        id = id.toUpperCase();
        let country = await getCountry(id);
        res.json(country);
    }catch(e){
        next(e)
    }
})

router.get("/",async (req,res,next)=>{
    try{
        let {name} = req.query;
        let countries = await getCountriesDb();
        if(!name) res.json(countries);
        else{
            let countriesQuery = await Country.findAll({
            where: {
                name: {
                    [Op.iLike] : '%' + name + '%'
                }
            }, include: [Activity]
        });
        res.json(countriesQuery)
        }
    }catch(e){
        next(e)
    }
})

module.exports = router;
