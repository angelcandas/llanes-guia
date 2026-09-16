import Hero from "./components/Hero";
import BeachesSection from "./components/BeachesSection";
import RestaurantsSection from "./components/RestaurantsSection";
import SitesSection from "./components/SitesSection";
import RoutesSection from "./components/RoutesSection";
import NearbySection from "./components/NearbySection";
import ZonesSection from "./components/ZonesSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero onPrint={() => window.print()} />
      <div className="wrap">
        <BeachesSection />
        <RestaurantsSection />
        <SitesSection />
        <RoutesSection />
        <NearbySection />
        <ZonesSection />
      </div>
      <Footer />
    </>
  );
}
