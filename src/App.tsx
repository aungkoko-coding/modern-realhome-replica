import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./components/Search/Search";
import RecentProperties from "./components/RecentProperties/RecentProperties";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperites";
import ForSaleProperties from "./components/ForSaleProperties/ForSaleProperties";
import ForRentProperties from "./components/ForRentProperties/ForRentProperites";
import BuyOrSell from "./components/BuyOrSell/BuyOrSell";
import Agents from "./components/Agents/Agents";
import Quote from "./components/Quote/Quote";
import NewsAndUpdates from "./components/NewsAndUpdates/NewsAndUpdates";
import AmazingFeatures from "./components/AmazingFeatures/AmazingFeatures";
import GetInTouch from "./components/GetInTouch/GetInTouch";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <RecentProperties />
      <FeaturedProperties />
      <ForSaleProperties />
      <ForRentProperties />
      <BuyOrSell />
      <Agents />
      <Quote />
      <NewsAndUpdates />
      <AmazingFeatures />
      <GetInTouch />
    </>
  );
};

export default App;
