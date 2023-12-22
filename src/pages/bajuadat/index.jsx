import Nav from "../../components/nav";
import Hero from "../../components/category-hero/Hero";
import Footer from "../../components/footer/footer";
import { Card } from "./components/Card";
import bajuAdatHero from "../../../public/assets/images/budaya/baju-adat-hero.jpg";

const BajuAdat = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero title="Baju Adat" image={bajuAdatHero} backgroundPosition="object-top">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque
          sequi laborum numquam voluptatum quam labore.
        </Hero>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BajuAdat;
