import ImageWithFallback from "./ImageWithFallback";
import {
  restaurants,
  restaurantsIntro,
  restaurantsPhoto,
} from "../data/restaurants";

function Restaurant({ restaurant }) {
  return (
    <div className="resto">
      <div className="resto-head">
        <h3>{restaurant.name}</h3>
        <span className="resto-kind">{restaurant.kind}</span>
      </div>
      <p>{restaurant.desc}</p>
      <p className="star-dish">
        Pedid: <b>{restaurant.dish}</b>
        {restaurant.dishNote ? ` — ${restaurant.dishNote}` : "."}
      </p>
    </div>
  );
}

export default function RestaurantsSection() {
  return (
    <section className="block" id="restaurantes">
      <div className="block-head">
        <h2>Restaurantes</h2>
        <span className="count">{restaurants.length} locales</span>
      </div>
      <p className="block-intro" style={{ marginTop: "-4px" }}>
        {restaurantsIntro}
      </p>
      <ImageWithFallback
        image={restaurantsPhoto.image}
        alt={restaurantsPhoto.alt}
        fallbackClassName="no-photo-inline"
      />
      <p className="photo-credit" style={{ marginBottom: "20px" }}>
        {restaurantsPhoto.credit}
      </p>
      <div className="resto-list">
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.name} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
}
