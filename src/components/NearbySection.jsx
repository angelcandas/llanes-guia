import { nearby } from "../data/nearby";

export default function NearbySection() {
  return (
    <section className="block" id="cercanos">
      <div className="block-head">
        <h2>Excursiones cercanas</h2>
        <span className="count">{nearby.length} destinos</span>
      </div>
      <div className="nearby-grid">
        {nearby.map((place) => (
          <div className="nearby-card" key={place.name}>
            <h3>{place.name}</h3>
            <span className="dist">{place.dist}</span>
            <p>{place.desc}</p>
          </div>
        ))}
      </div>
      <p
        className="caveat"
        style={{
          fontSize: "13px",
          color: "var(--ink-faint)",
          fontStyle: "italic",
          marginTop: "14px",
        }}
      >
        Tiempos aproximados en coche desde Llanes — confirmad con el
        navegador el día que salgáis.
      </p>
    </section>
  );
}
