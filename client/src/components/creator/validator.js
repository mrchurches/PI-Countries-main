let validator = (input) => {

    let errors = {};
    if(input.name.length< 2 || input.name.length> 30){
        errors.name = "Name of the activity between 2 and 30 characters.";
    }
    if(input.difficulty<1 || input.difficulty>5){
        errors.difficulty = "Value between 1 and 5."
    }
    if(input.duration.length > 25 || input.duration.length<3){
        errors.duration="Specifies the duration in 25 characters"
    }
    if(!input.season){
        errors.season = "Wrong season or empty"
    }
    if(!input.countries.length){
        errors.countries = "You must add at least 1 country"
    }

    return errors;
}

export default validator;