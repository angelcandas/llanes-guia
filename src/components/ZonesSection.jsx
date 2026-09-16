import { zones } from "../data/zones";

export default function ZonesSection() {
  return (
    <section className="block" id="zonas">
      <div className="block-head">
        <h2>Cómo repartirlo por zonas</h2>
        <span className="count">para no ir de un lado a otro</span>
      </div>
      <p className="block-intro">
        Agrupando lo de arriba por cercanía, para montar cada salida sin
        cruzar el pueblo varias veces.
      </p>
      <div className="zone-list">
        {zones.map((zone) => (
          <div className="zone" key={zone.letter}>
            <span className="letter">{zone.letter}</span>
            <div>
              <h3>{zone.name}</h3>
              <p>{zone.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
