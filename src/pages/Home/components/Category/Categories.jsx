import { Swiper, SwiperSlide } from "swiper/react";
import category from "./data/category.json";
import Card from "./components/Card";
import { useMediaQuery } from "react-responsive";

const Category = () => {
  const isMobiletoTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      <div className="pt-10">
        <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br to-[#302ADE] from-[#0F2C59]">
          Kategori
        </h1>
      </div>
      <div className="w-full md:h-screen flex justify-center items-center md:pt-60 py-10">
        <Swiper slidesPerView={isMobiletoTablet ? 1 : 3} spaceBetween={15}>
          {category.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[50%] ">
                <Card image={item.image} title={item.category} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Category;
