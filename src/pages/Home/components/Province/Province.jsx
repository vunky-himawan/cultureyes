import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import provinces from "./data/province-data";
import { useMediaQuery } from "react-responsive";

const Province = () => {
  const isMobileTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      <div className="w-full md:py-20 flex justify-center items-center">
        <Swiper
          centeredSlides={true}
          spaceBetween={15}
          slidesPerView={isMobileTablet ? 1 : 3}
          grabCursor={true}
          className="mySwiper"
          loop={true}
        >
          {provinces.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="md:p-5 flex justify-center w-full md:h-[70vh] relative">
                <div className="w-full h-3/4 relative group rounded-3xl overflow-hidden">
                  <div className="z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-[2] duration-500 opacity-100 flex flex-col justify-center items-center gap-3">
                    <img
                      src={item.logo}
                      alt=""
                      className="lg:max-w-[5rem] lg:max-h-[5rem] max-w-[8rem] max-h-[8rem] "
                    />
                    <h1 className="text-3xl lg:text-xs font-bold  text-white text-center">
                      {item.provinsi}
                    </h1>
                  </div>
                  <img
                    src={item.budaya}
                    alt=""
                    className="w-full h-full object-cover max-lg:grayscale max-lg:scale-110 lg:group-hover:scale-110 lg:group-hover:grayscale duration-500 rounded-3xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Province;
