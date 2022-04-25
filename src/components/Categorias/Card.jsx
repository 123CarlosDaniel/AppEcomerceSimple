import fideo from "../../assets/fideos.jpg";
import cookie from "../../assets/cookies.jpg";
import yogur from "../../assets/yogur.jpg";
import paneton from "../../assets/paneton.jpg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card__container container">
      <div className="card__image">
        <img src={fideo} />
        <div className="card-description">
          <Link to={"/productos"}>Alimentos</Link>
        </div>
        <Link to={"/productos"}>
          <button className="btn-mini ">Ver mas</button>
        </Link>
      </div>
      <div className="card__image">
        <img src={cookie} />
        <div className="card-description">
          <Link to={"/productos"}>Galletas</Link>
        </div>
        <Link to={"/productos"}>
          <button className="btn-mini ">Ver mas</button>
        </Link>
      </div>
      <div className="card__image">
        <img src={yogur} />
        <div className="card-description">
          <Link to={"/productos"}>Lacteos</Link>
        </div>
        <Link to={"/productos"}>
          <button className="btn-mini ">Ver mas</button>
        </Link>
      </div>
      <div className="card__image">
        <img src={paneton} />
        <div className="card-description">
          <Link to={"/productos"}>Panetones</Link>
        </div>
        <Link to={"/productos"}>
          <button className="btn-mini ">Ver mas</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
