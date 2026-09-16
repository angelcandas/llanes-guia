import ImageWithFallback from "./ImageWithFallback";
import { sites, sitesPhotoCredit } from "../data/sites";

function Site({ site }) {
  return (
    <div className="site">
      <span className="label">{site.label}</span>
      <div>
        <h3>{site.name}</h3>
        {site.descHtml ? (
          <p dangerouslySetInnerHTML={{ __html: site.descHtml }} />
        ) : (
          <p>{site.desc}</p>
        )}
        <ImageWithFallback
          image={site.image}
          alt={site.name}
          className="site-photo"
          fallbackClassName="no-photo-inline"
        />
      </div>
    </div>
  );
}

export default function SitesSection() {
  return (
    <section className="block" id="sitios">
      <div className="block-head">
        <h2>Sitios y miradores</h2>
        <span className="count">{sites.length} paradas</span>
      </div>
      <div className="site-list">
        {sites.map((site) => (
          <Site key={site.name} site={site} />
        ))}
      </div>
      <p className="photo-credit">{sitesPhotoCredit}</p>
    </section>
  );
}
