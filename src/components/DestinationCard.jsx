import { Link } from "react-router-dom";

import "../styles/components/destinationCard.css";

const DestinationCard = ({ place }) => {
  return (
    <div className="destination-card">

      <div className="card-image">
        <img src={place.image} alt={place.name} />
      </div>

      <div className="destination-content">

        <h3>{place.name}</h3>

        <p>{place.shortDesc}</p>

        <Link to={`/destination/${place.id}`}>
          <button>Explore</button>
        </Link>

      </div>

    </div>
  );
};

export default DestinationCard;