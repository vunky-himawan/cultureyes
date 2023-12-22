import Hero from "../../components/category-hero/Hero";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav";
import { Card } from "./components/Card";
import papua from "../../../public/assets/images/papua.jpg";

const Suku = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero title="Suku" image={papua}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolorem minima dignissimos ullam incidunt! Tempore consectetur commodi
          neque aut soluta!
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

export default Suku;
