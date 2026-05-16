import Layout from "../components/layout";
import DestinationCard from "../components/DestinationCard";

import { destinations } from "../data/destinationsData";

import "../styles/pages/destinations.css";

const Destinations = () => {
  return (
    <Layout>

      <div className="destinations-page">

        <div className="destination-hero">

          <h1>Explore Bangladesh</h1>

          <p>
            Discover the most beautiful travel destinations across Bangladesh
          </p>

        </div>

        <div className="destination-grid">

          {destinations.map((place) => (
            <DestinationCard
              key={place.id}
              place={place}
            />
          ))}

        </div>

      </div>

    </Layout>
  );
};

export default Destinations;