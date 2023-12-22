import { Swiper, SwiperSlide } from "swiper/react";

import Card from "./components/Card";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const images = [
  "../../../../../public/assets/images/event 1.svg",
  "../../../../../public/assets/images/event 1.svg",
  "../../../../../public/assets/images/event 1.svg",
  "../../../../../public/assets/images/event 1.svg",
];

const Events = () => {
  const isMobiletoTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br to-[#302ADE] from-[#0F2C59] tracking-[-1.8px]">
          Nikmati pengalaman budaya yang unik dan menarik bersama teman-teman
          Anda di berbagai event budaya yang sangat menarik.
        </h1>
      </div>
      <Swiper
        spaceBetween={15}
        slidesPerView={isMobiletoTablet ? 1 : 3}
        grabCursor={true}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: -50,
          depth: 100,
          modifier: 1,
          scale: 0.8,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full pt-10 md:py-0 md:h-screen flex justify-center items-center">
              <div className="flex justify-center w-fit">
                <Card image={item} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Events;
