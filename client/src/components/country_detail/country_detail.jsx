import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./country_detail.module.css";

export default function CountryDetail() {
  const [countries, setCountries] = useState("");
  let { id } = useParams();
  let flags=0;

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://world-back.up.railway.app/api/countries/${id}`)
        .then((res) => setCountries(res.data));
    }, 1000);
  }, [id]);

  return (
    <div>
      {countries ? (
        <div className={style.cont}>
          <div>
            <h1>{countries.name}</h1>
          </div>
          <div className={style.details}>
            <div className={style.info}>
              <h3>Capital: {countries.capital}</h3>
              <h3>
                {countries.region} ({countries.subregion})
              </h3>
              <h3>Area: {countries.area} kmº2</h3>
              <h3>Population: {countries.population}</h3>
            </div>
            <div className={style.image}>
              <img src={countries.image} alt="country" />
            </div>
          </div>
            <div className={style.activities}>
            <h3>Activities 🧗‍♀️ </h3>
            <div className={style.activity}>
              {countries.activities.length ? countries.activities.map((e) => {
                return (
                  <div className={style.act_cont} key={e.name}>
                    <h4>{e.name}</h4>
                    <hr />
                    <h4>Difficulty: {e.difficulty}</h4>
                    <h4>⏰ {e.duration}</h4>
                    <h4>Better season: {e.season}.</h4>
                  </div>
                );
              }) : <p>No activities in this country</p>}
            </div>
              </div>

            <div>
                <span>Do you know any activity in this country and you can't find it here? </span><Link to="/country/create">Create it</Link>
            </div>
          <Link className={style.link} to="/home">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>Go back</Link>
        </div>
      ) : (
        <div>
          <img
            src="https://r2.community.samsung.com/t5/image/serverpage/image-id/2858216iF966CF430D380489/image-size/large?v=v2&px=999"
            alt="err"
          />
          <h4>Loading...</h4>
        </div>
      )}
    </div>
  );
}
