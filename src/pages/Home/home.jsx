import Flower from "../../components/decoration";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav";
import Category from "./components/Category/Categories";
import Data from "./components/Data";
import Events from "./components/Events/Events";
import Hero from "./components/Hero";
import Influence from "./components/Influence";
import Province from "./components/Province/Province";
import Quote from "./components/Quote";
import Video from "./components/Video";
// import Map from "./components/Map";

const Home = () => {
  return (
    <>
      <Nav />
      <main className="font-poppins px-7">
        <Flower
          position={"top-14 md:right-0 lg:right-20 md:fixed max-sm:hidden"}
        />
        <Flower position={"-bottom-10 -left-10 md:fixed hidden"} />
        <Hero />
        <Data />
        <h1 className="text-3xl lg:text-6xl font-bold p-10 text-center pt-20 text-transparent bg-clip-text bg-gradient-to-br to-[#302ADE] from-[#0F2C59]">
          Provinsi
        </h1>
        <Province />
        <Video />
        <Influence />
        <Quote />
        <Events />
        <Category />
      </main>
      <Footer />
    </>
  );
};

export default Home;
