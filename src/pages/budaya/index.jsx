import Hero from "../../components/category-hero/Hero";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav";
import barong from "../../../public/assets/images/barong.jpg";
import { Card } from "./components/Card";

const Budaya = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero title="Kebudayaan" image={barong}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque
          sequi laborum numquam voluptatum quam labore.
        </Hero>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          <Card />
          <Card colspan={"lg:col-span-2"} />
          <Card />
          <Card colspan={"lg:col-span-2"} />
          <Card colspan={"lg:col-span-2"} />
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

export default Budaya;
