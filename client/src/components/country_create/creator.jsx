import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../redux/actions";
import validator from "./validator";

export default function Creator(){
    let countries = useSelector((state)=> state.countries);
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [input,setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    });

    function handleSubmit (e){
            e.preventDefault()
            dispatch(postActivity(input))
            setInput({
                name: "",
                difficulty: "",
                duration: "",
                season: "",
                countries: []
            });
            history.push("/home")
            console.log(input)
    };

    function handleChange (e){
        setInput({...input , [e.target.name]: e.target.value})
        setErrors(validator({...input, [e.target.name]:e.target.value}))
    };

    function handleCountry(e){
        e.preventDefault()
        if(!input.countries.includes(e.target.value)){
            setInput({
                ...input,
                countries: [...input.countries, e.target.value]
            });
            setErrors(validator({...input, [e.target.name]:e.target.value}))
        }
    }

    return(
        <div>
            Create a new activity:
            <form onSubmit={(e)=> handleSubmit(e)}>
            
            <label>Name: </label>
                <input onChange={(e)=> handleChange(e)} value={input.name} type="text" name='name' /><br/>
                {errors.name && <h4>{errors.name}</h4>}
            
            <label>Difficulty: </label>
                <input onChange={(e)=> handleChange(e)} value={input.difficulty} type="number" name="difficulty" min={1} max={5}/><br/>
                {errors.difficulty && <h4>{errors.difficulty}</h4>}
            
            <label>Duration: </label>
                <input onChange={(e)=> handleChange(e)} value={input.duration} type="text" name='duration' /><br/>
                {errors.duration && <h4>{errors.duration}</h4>}
            
            <label>Season: </label>
                <select onChange={(e)=> handleChange(e)} value={input.season} name="season">
                    <option>Season</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                </select><br/>
                {errors.season && <h4>{errors.season}</h4>}
            
            <label>Add countries for the activity</label>
            <select multiple={true} value={input.countries} onChange={(e)=> handleCountry(e)} name="countries">
                <option >Seleccionar</option>
                {   countries?
                    countries.map(e=>{
                        return(
                            <option key={e.id} value={e.name}>{e.name}</option>
                        )
                    }): <h4>loading....</h4>
                }
            </select>
            {errors.countries && <h4>{errors.countries}</h4>}
           

            {
                errors.name || errors.difficulty || errors.duration || errors.season || errors.countries?
                <button disabled={true} type= "submit">Create</button> :
                <button  type= "submit">Create</button>
            }

            </form>

                {input.countries.length? <span>Selected countries</span>: ""}
                <ul><li>{input.countries.map(e=> e + " ")}</li></ul>
        </div>
    )
}