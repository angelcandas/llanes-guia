export default function Hero({ onPrint }) {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="eyebrow">Guía de viaje · Llanes, Asturias</div>
        <div className="hero-top">
          <h1>
            Llanes
            <em>guía de un local</em>
          </h1>
          <button className="print-button" onClick={onPrint} type="button">
            Descargar PDF
          </button>
        </div>
        <p className="lede">
          Tus sitios favoritos, ordenados y completados con lo que hace falta
          para llegar sin líos: acceso a las playas, qué pedir en cada
          restaurante y cómo encajarlo todo por zonas.
        </p>
        <div className="hero-notes">
          <span className="note-chip">
            🌊 Mejor con marea baja para caminar de playa en playa
          </span>
          <span className="note-chip">
            🅿️ Ballota y Torimbia: aparcamiento limitado, id pronto
          </span>
          <span className="note-chip">
            🍽️ Reservad Santa Marina y El Mirador de Toró en temporada alta
          </span>
        </div>
      </div>
    </div>
  );
}
