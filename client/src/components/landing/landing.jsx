import { Link } from "react-router-dom";
import style from "./landing.module.css";
import world from "../../images/world.png"
export default function Landing() {
  return (
    <div className={style.landing}>
            <div className={style.info}>
                <p>the whole</p>
                <h3>WORLD</h3>
                <p>Explore all the countries around the world and his information</p>
            </div>
            <div className={style.enter}>
                <img className="App-logo" src={world} alt="world" />
                <Link to="/home" className={style.link}>
                <h4>Enter</h4>
                </Link>
            </div>
    </div>
  );
}
