import Hero from "../../components/category-hero/Hero";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav";
import upacara from "../../../public/assets/images/upacara.jpg";
import { Card } from "./components/Card";

const Upacara = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero title="Upacara Adat" image={upacara}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          voluptates ipsum iusto incidunt non. Quisquam!
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

export default Upacara;
