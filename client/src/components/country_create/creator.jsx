import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../redux/actions";
import validator from "./validator";

export default function Creator(){
    let countries = useSelector((state)=> state.countries);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState([]);
    const [error, setError] = useState({});
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
            console.log(input)
    };

    function handleChange (e){
        setInput({...input , [e.target.name]: e.target.value})
        setError(validator(e, input))
        console.log(error)
    };

    function handleCountry(e){

        if(!input.countries.includes(e.target.value)){
            setInput({
                ...input,
                countries: [...input.countries, e.target.value]
            });
            setSelected([...selected, e.target.value])
        }
    }
    return(
        <div>
            Create a new activity:
            <form onSubmit={handleSubmit}>
            <label>Name: </label>
                <input onChange={handleChange} value={input.name} type="text" name='name' /><br/>
                {error.name && <h4>{error.name}</h4>}
            <label>Difficulty: </label>
                <input onChange={handleChange} value={input.difficulty} type="number" name="difficulty" min={1} max={5}/><br/>
                {error.difficulty && <h4>{error.difficulty}</h4>}
            <label>Duration: </label>
            <   input onChange={handleChange} value={input.duration} type="text" name='duration' /><br/>
            <label>Season: </label>
                <select onChange={handleChange} value={input.season} name="season">
                    <option>Season</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                </select><br/>
                {error.season && <h4>{error.season}</h4>}
            <label>Add countries for the activity</label>
            <select value={selected} onChange={handleCountry} name="countries">
                <option >Seleccionar</option>
                {   countries?
                    countries.map(e=>{
                        return(
                            <option key={e.id} value={e.name}>{e.name}</option>
                        )
                    }): <h4>loading....</h4>
                }
            </select>
            {error.countries && <h4>{error.countries}</h4>}
            <br/>
            {
                error.name || error.difficulty || error. duration || error.season || error.countries ?
                <button disabled={true} type= "submit">Create</button> :
                <button  type= "submit">Create</button>
            }
            </form>
            {
                selected? selected.map(e=>{
                    return(
                        <div>
                            <h4 key={e}>{e}</h4>
                        </div>
                    )
                }) : <h4>Loading...</h4>
            }

        </div>
    )
}