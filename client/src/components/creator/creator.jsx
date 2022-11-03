import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../redux/actions";
import validator from "./validator";
import gif from "../../images/act.gif";
import style from "./creator.module.css";

export default function Creator() {
  let countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(validator({ ...input, [e.target.name]: e.target.value }));
  }

  function handleCountry(e) {
    e.preventDefault();

    if (e.target.value !== "non" && !input.countries.includes(e.target.value)) {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
      setErrors(validator({ ...input, [e.target.name]: e.target.value }));
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      countries: input.countries.filter((c) => c !== e.target.name),
    });
  }

  function handleSubmit(e) {
    try {
      e.preventDefault();
      if (
        !input.name &&
        !input.difficulty &&
        !input.duration &&
        !input.season &&
        !input.countries.length
      ) {
        alert("Error");
      } else {
        setErrors(validator(input));
        console.log(errors);
        if (
          errors.name ||
          errors.difficulty ||
          errors.duration ||
          errors.season ||
          errors.countries
        ) {
          alert("error");
        } else {
          dispatch(postActivity(input));
          setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [],
          });
          history.push("/home");
        }
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className={style.creator}>
      <div>
        <h1>Create a new activity 🧗‍♀️</h1>
        <form className={style.container} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.inputs}>
            <label>Name</label>
            <input
              onChange={(e) => handleChange(e)}
              value={input.name}
              type="text"
              name="name"
            />
          </div>
            {errors.name && <p> {errors.name}</p>}
          <div className={style.inputs}>
            <label>Difficulty: </label>
            <input
              onChange={(e) => handleChange(e)}
              value={input.difficulty}
              type="number"
              name="difficulty"
              min={1}
              max={5}
            />
          </div>
            {errors.difficulty && <p> {errors.difficulty}</p>}
          <div className={style.inputs}>
            <label>Duration: </label>
            <input
              onChange={(e) => handleChange(e)}
              value={input.duration}
              type="text"
              name="duration"
            />
          </div>
            {errors.duration && <p> {errors.duration}</p>}
          <div className={style.inputs}>
            <label>Season: </label>
            <select
              multiple={false}
              onChange={(e) => handleChange(e)}
              value={input.season}
              name="season"
            >
              <option value="">Season</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
            </select>
          </div>
            {errors.season && <p> {errors.season}</p>}
          <div className={style.inputs}>
            <label>Add countries to the activity</label>
            <select
              multiple={false}
              value={input}
              onChange={(e) => handleCountry(e)}
              name="countries"
            >
              <option value="non">Seleccionar</option>
              {countries ? (
                countries.map((e) => {
                  return (
                    <option key={e.id} value={e.name}>
                      {e.name.length>15?e.name.slice(0,15)+"..":e.name}
                    </option>
                  );
                })
              ) : (
                <h4>loading....</h4>
              )}
            </select>
            <br />
          </div>
            {errors.countries && <p className={style.error}> {errors.countries}</p>}
          <button
            className={style.create}
            disabled={
              (errors.name ||
                errors.difficulty ||
                errors.duration ||
                errors.season ||
                errors.countries) &&
              true
            }
          >
            Create
          </button>
        </form>

        {input.countries.length > 0 && (
          <div className={style.selected_countries}>
            <h4>Selected countries</h4>

            {input.countries.map((e) => (
              <button key={e} onClick={(e) => handleDelete(e)} name={e}>
                {e}
              </button>
            ))}
            <h4>Click on the country to delete</h4>
          </div>
        )}
      </div>
      <div className={style.gif}>
        <img src={gif} alt="act" />
      </div>
    </div>
  );
}
