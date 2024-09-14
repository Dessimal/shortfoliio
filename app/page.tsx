import Banner from "./components/Banner";
import { Featured, Hero, Locations } from "./components/constant";
import ProductList from "./components/ProductList";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Featured />
      <Locations />
      <Banner />
      <ProductList />
    </main>
  );
};

export default Home;
