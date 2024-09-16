import Banner from "../components/Banner";
import { Featured, Hero, Locations, NewProducts } from "../components/constant";

const Home = () => {
  return (
    <main className="font-customRegular">
      <Hero />
      <Featured />
      <Locations />
      <Banner />
      <NewProducts />
    </main>
  );
};

export default Home;
