const validator = (e, input) => {
    let {name, difficulty, duration, season, countries} = input;
    let error = {};
    switch(e.target.name){
        case "name":
            error.name = name.length<1 ? "Name must be longer than 1": "";
            break;
        case "difficulty":
            error.difficulty = difficulty<1 || difficulty>5 ? "Entre 1 y 5" : "";
            break;
        case "duration":
            error.duration = "";
        case "season":
            error.season = season === "autumn" || season === "winter" || season === "spring" || season === "summer" ? "" : "Wrong season";
            break;
        case "countries":
            error.countries = countries.length? "" : "";
            break;
        default:
            break;
    }
    return error
}

export default validator;