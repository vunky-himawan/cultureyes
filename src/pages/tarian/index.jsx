import Hero from "../../components/category-hero/Hero";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav";
import { Card } from "./components/Card";
import kecak from "../../../public/assets/images/kecak.jpg";

const TarianTradisional = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero title="Tarian" image={kecak}>
          Tarian tradisional Indonesisa memperlihatkan keindahan dan keberagaman
          budaya yang kaya di seluruh nusantara. Setiap daerah memiliki tarian
          yang unik yang mencerminkan sejarah, kepercayaan, dan hedidupan
          sehari-hari masyarakat setempat.
        </Hero>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
          <Card />
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

export default TarianTradisional;
