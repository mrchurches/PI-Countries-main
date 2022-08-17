const axios = require("axios")
const {Country, Activity}= require("../db");
const URL = "https://restcountries.com/v3/all";

let getCountriesDb = async () => {
    try{
        let countries = await Country.findAll();
        if(!countries.length){
        await getCountriesApi();
        countries = await Country.findAll();
        return countries
        }else{
        return countries
        }
    }catch(e){
        console.log(e)
    }
};

let getCountriesApi = async () => {
    try{
        let countries = await axios.get(URL);
        countries = countries.data.map(e=>{
        return{
            id: e.cca3,
            name: e.name.common,
            image: e.flags[0],
            region: e.region,
            capital: e.capital? e.capital[0]: "no data",
            subregion: e.subregion? e.subregion : "no data",
            area: e.area,
            population: e.population
            }
            });
    
        countries.forEach(async(e)=>{
            await Country.create({
                id: e.id,
                name: e.name,
                image: e.image,
                region: e.region,
                capital: e.capital,
                subregion: e.subregion,
                area: e.area,
                population: e.population
            });
        });
    }catch(e){
        console.log(e)
    }
};


let getCountry = async (id) => {
    let country = await Country.findByPk(id,{
        include: [Activity] })
    if(!country) return "No country";
    else{
        return country
    }
}

let postActivity = async (name, difficulty, duration, season, countries) => {
try{    
    let countriesFind = await Country.findAll({where: {name: countries}});
    if(!countriesFind.length) return "no country";
    let newAct = await Activity.create({ name, difficulty, duration, season });
    return await newAct.addCountry(countriesFind);
}catch(e){
    console.log(e)
}
}

let modAct = async (id, countries)=>{
try{
let act = await Activity.findByPk(id,{
    include: [Country] 
});
let countriesFind = await Country.findAll({
    where: {
        name: countries
    }
});
await act.addCountry(countriesFind);

return act;
}catch(err){
    console.log(err)
}
}

// let delFromAct = async(id,countries)=>{
// try{
//     let act = await Activity.findByPk(id,{
//         include: [Country] 
//     });

// }catch(e){
//     console.log(e)
// }
// }

let nameAsc = async () => {
try{
    let asc = await Country.findAll({
        order: [["name", "ASC"]],
        include: [Activity]
    });
    return asc
}catch(e){
    console.log(e)
}
}

let nameDesc = async () => {
    try{
        let desc = await Country.findAll({
            order: [["name", "DESC"]],
            include: [Activity]
        });
        return desc
    }catch(e){
        console.log(e)
    }
    }

let regions = async (continent) => {
    try{
        
        let countries = await Country.findAll({
            where: {
                region: continent
            },
            include: [Activity]
        });
        return countries 
    }catch(e){
        console.log(e)
    }
}

let activities = async (name) => {
    try{
        let activities;
        if(name){
            activities = await Activity.findAll({
                where: {name: name},
                include: [Country]
            })
        }else{
            activities = await Activity.findAll({
            include: [Country]
            });
        }
    return activities;
}catch(e){
    console.log(e)
}
}

let population = async (data) => {
    try{
            let countries = await Country.findAll({
                order: [["population", data]],
                include: [Activity]
            });

            return countries;
    }catch(e){
        console.log(e)
}
}

module.exports = {
    getCountriesDb,
    getCountry,
    postActivity,
    modAct,
    nameAsc,
    nameDesc,
    regions,
    activities,
    population
}