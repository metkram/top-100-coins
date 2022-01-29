import { Link } from "react-router-dom";

export default function TopFourCoins({name, image, price, rank}) {
  return (
    <div className="col s3">
      <div className="card small">
        <div className="card-content">
          #{rank} <Link to={`/${name}`}>{name}</Link><br />
          ${price}
        </div>
        <div className="card-image">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}
