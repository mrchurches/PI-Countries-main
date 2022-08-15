let validator = (input) => {

    let errors = {};
console.log(input)
    if(input.name.length< 2 || input.name.length> 20){
        errors.name = "error";
    }
    if(input.difficulty<1 || input.difficulty>5){
        errors.difficulty = "valor entre 1 y 5"
    }
    if(input.duration.length > 25){
        errors.duration="max char 25"
    }
    if(!input.season){
        errors.season = "Wrong season or empty"
    }
    if(!input.countries.length){
        errors.countries = "Must have min 1 country"
    }

    return errors;
}

export default validator;