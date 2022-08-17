import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../redux/actions";
import validator from "./validator";
import gif from "../../images/act.gif";
import "./creator.css";

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
        try{    e.preventDefault()
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
        }catch(e){
            alert(e)
        }
    };

    function handleChange (e){
        setInput({...input , [e.target.name]: e.target.value})
        setErrors(validator({...input, [e.target.name]:e.target.value}))
    };

    function handleCountry(e){
        e.preventDefault();
        
        if(e.target.value !== "non" && !input.countries.includes(e.target.value)){
            setInput({
                ...input,
                countries: [...input.countries, e.target.value]
            });
            setErrors(validator({...input, [e.target.name]:e.target.value}))
        }
    }

    function handleDelete(e){
        setInput({
            ...input,
            countries: input.countries.filter(c=> c !== e.target.name)
        })
    }

    return(
        <div className="creator">
            <h1>Create a new activity</h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
            
            <label>Name: </label>
                <input onChange={(e)=> handleChange(e)} value={input.name} type="text" name='name' />
                {errors.name && <span> {errors.name}</span>}
                <br/>
            
            <label>Difficulty: </label>
                <input onChange={(e)=> handleChange(e)} value={input.difficulty} type="number" name="difficulty" min={1} max={5}/>
                {errors.difficulty && <span> {errors.difficulty}</span>}
                <br/>
            <label>Duration: </label>
                <input onChange={(e)=> handleChange(e)} value={input.duration} type="text" name='duration' />
                {errors.duration && <span> {errors.duration}</span>}
                <br/>
            <label>Season: </label>
                <select multiple={false} onChange={(e)=> handleChange(e)} value={input.season} name="season">
                    <option value="">Season</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                </select>
                {errors.season && <span> {errors.season}</span>}
                <br/>
            <label>Add countries for the activity</label>
            <select multiple={false} value={input} onChange={(e)=> handleCountry(e)} name="countries">
                <option value="non">Seleccionar</option>
                {   countries?
                    countries.map(e=>{
                        return(
                            <option key={e.id} value={e.name}>{e.name}</option>
                        )
                    }): <h4>loading....</h4>
                }
            </select>
            {errors.countries && <h4 className="error"> {errors.countries}</h4>}
           

            {
                errors.name || errors.difficulty || errors.duration || errors.season || errors.countries?
                <button disabled={true} type= "submit">Create</button> :
                <button  className="create" type= "submit">Create</button>
            }

            </form>

                {input.countries.length > 0&& (
                    <div className="selected-countries">
                        <h4>Selected countries</h4>
                        
                        {input.countries.map(e=> <button key={e} onClick={handleDelete} name={e}>{e}</button>)}
                        <h4>Click on the country to delete</h4>
                    </div>
                )}
                <br/>
                <img src={gif} alt="act"/>
                
        </div>
    )
}