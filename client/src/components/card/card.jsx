import style from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, region, image }) {
  return (
    <div className={style.card}>
        <div>
          <img src={image} alt="country" />
        </div>
        <div>
      <Link className={style.link} to={`/countryDetail/${id}`}>
          <h3>{name}</h3>
          <h4>{region}</h4> 
      </Link>
        </div>
    </div>
  );
}
