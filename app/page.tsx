import Header from "../components/organisms/Header";
import Hero from "../components/organisms/Hero";
import StatsBar from "../components/organisms/StatsBar";
import DestinationSection from "../components/organisms/DestinationSection";
import TravelGuide from "../components/organisms/TravelGuide";
import DiscoverSection from "../components/organisms/DiscoverSection";
import Footer from "../components/organisms/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatsBar />
      <DestinationSection />
      <TravelGuide />
      <DiscoverSection />
      <Footer />
    </main>
  );
}