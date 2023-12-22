import PropType from "prop-types";

const Hero = ({ title, children, image, backgroundPosition }) => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center relative">
        <div className="w-full h-full absolute bg-black-gradient z-10"></div>
        <img
          src={`${
            image
              ? image
              : "../../../../public/assets/images/logo-provinsi/budaya/upacaraadattiwah-kalteng.jpeg"
          }`}
          alt=""
          className={`w-full h-full object-cover absolute ${backgroundPosition}`}
        />
        <div className="w-full h-full z-20 flex justify-end py-36 items-center flex-col px-7">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white">{title}</h1>
            <h1 className="text-4xl font-bold text-white">Indonesia</h1>
          </div>
          <p className="text-white text-sm text-center py-4">{children}</p>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  title: PropType.string.isRequired,
  children: PropType.string.isRequired,
  image: PropType.string.isRequired,
  backgroundPosition: PropType.string.isRequired,
};

export default Hero;
