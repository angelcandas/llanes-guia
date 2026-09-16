import ImageWithFallback from "./ImageWithFallback";
import { beaches, beachesPhotoCredit } from "../data/beaches";

function BeachCard({ beach }) {
  return (
    <div className={`beach-card${beach.starred ? " starred" : ""}`}>
      <ImageWithFallback
        image={beach.image}
        alt={`Playa de ${beach.name}`}
        className="beach-photo"
        fallbackClassName="no-photo"
      />
      <div className="beach-top">
        <h3>{beach.name}</h3>
        {beach.fave && <span className="beach-tag tag-fave">favorita</span>}
      </div>
      <p className="beach-desc">{beach.desc}</p>
      <div className={`beach-access${beach.warn ? " warn" : ""}`}>
        <b>Acceso</b>
        <span>{beach.access}</span>
      </div>
      <a
        className="beach-map"
        href={`https://www.google.com/maps/search/?api=1&query=${beach.mapQuery}`}
        target="_blank"
        rel="noopener"
      >
        Ver en el mapa →
      </a>
    </div>
  );
}

export default function BeachesSection() {
  return (
    <section className="block" id="playas">
      <div className="block-head">
        <h2>Playas</h2>
        <span className="count">{beaches.length} playas</span>
      </div>
      <p className="block-intro">
        De este a oeste, saliendo del pueblo. Marcada con ámbar la que más
        cuidado necesita para llegar — importante si el paso no va a ser muy
        ágil.
      </p>
      <div className="beach-grid">
        {beaches.map((beach) => (
          <BeachCard key={beach.name} beach={beach} />
        ))}
      </div>
      <p className="photo-credit">{beachesPhotoCredit}</p>
    </section>
  );
}
