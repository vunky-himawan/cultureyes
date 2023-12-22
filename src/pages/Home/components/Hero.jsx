const Hero = () => {
  return (
    <>
      <div className="w-full h-fit lg:h-screen flex justify-center items-center lg:pt-24 max-lg:pt-32">
        <div className="flex-1 w-full h-full flex flex-col justify-center lg:gap-y-4">
          <p className="text-lg lg:text-3xl text-[#0F2C59] w-full py-1">
            Membangkitkan Semangat Nusantara
          </p>
          <h1 className="font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-br to-[#302ADE] from-[#0F2C59] md:text-6xl text-4xl">
            Menggenggam Sejarah, Mewariskan Ilmu
          </h1>
          <p className="lg:text-xl text-sm text-[#0F2C59] py-1">
            Mari kita membangkitkan semangat Nusantara agar budaya kita tidak
            hanya hidup di masa lalu, tetapi juga berkembang dan terus berduri
            di setiap langkah kita
          </p>
          <button className="w-fit px-3 py-3 rounded-md bg-[#302ADE] text-white flex gap-x-3 items-center">
            Explore Now!
            <div className="w-2 h-2 animate-ping bg-white rounded-full"></div>
          </button>
        </div>
        <div className="flex-1 w-full h-full hidden md:flex">
          <img
            src="../../../../public/assets/images/hero.svg"
            alt=""
            className="w-full h-full animate-bounce"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
