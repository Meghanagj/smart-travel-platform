import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations";
import TravelCategories from "./components/TravelCategories/TravelCategories";
import FeaturedRecommendations from "./components/FeaturedRecommendations/FeaturedRecommendations";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations />
      <TravelCategories />
      <FeaturedRecommendations />
      <Footer />
    </>
  );
} 