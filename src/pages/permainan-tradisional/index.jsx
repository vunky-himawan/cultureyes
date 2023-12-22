import Nav from "../../components/nav";
import Hero from "../../components/category-hero/Hero";
import Footer from "../../components/footer/footer";
import { Card } from "./components/Card";
import permainanTradisionalHero from "../../../public/assets/images/budaya/permainan-tradisional-hero.jpeg";

const PermainanTradisional = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero title="Permainan Tradisional" image={permainanTradisionalHero}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque
          sequi laborum numquam voluptatum quam labore.
        </Hero>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card />
          <Card />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PermainanTradisional;
