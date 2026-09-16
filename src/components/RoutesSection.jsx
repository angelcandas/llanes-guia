import { routes } from "../data/routes";

function Route({ route }) {
  return (
    <div className="route-card">
      <div className="route-top">
        <h3>{route.name}</h3>
        <div className="route-stats">
          {route.stats.map((stat) => (
            <span key={stat.bold}>
              <b>{stat.bold}</b>
              {stat.rest ? ` ${stat.rest}` : ""}
            </span>
          ))}
        </div>
      </div>
      {route.descHtml ? (
        <p dangerouslySetInnerHTML={{ __html: route.descHtml }} />
      ) : (
        <p>{route.desc}</p>
      )}
      {route.caveat && <p className="caveat">{route.caveat}</p>}
      <p>
        <a href={route.link} target="_blank" rel="noopener">
          Ver ruta en Wikiloc →
        </a>
      </p>
    </div>
  );
}

export default function RoutesSection() {
  return (
    <section className="block" id="rutas">
      <div className="block-head">
        <h2>Rutas</h2>
        <span className="count">{routes.length} recorridos</span>
      </div>
      {routes.map((route) => (
        <Route key={route.name} route={route} />
      ))}
    </section>
  );
}
