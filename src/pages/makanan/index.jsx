import Hero from "../../components/category-hero/Hero";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav";
import { Card } from "./components/Card";
import pecel from "../../../public/assets/images/pecel.jpg";

const MakananKhas = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero title="Makanan" image={pecel}>
          Makanan khas Indonesia mempesona dengan keanekaragaman rasa, bumbu,
          dan cara pengolahan yang unik. Nusantara, sebagai negara kepulauan,
          menghasilkan berbagai hidangan lezat yang mencerminkan keberagaman
          budaya dan bahan makanan setiap daerah.
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

export default MakananKhas;
