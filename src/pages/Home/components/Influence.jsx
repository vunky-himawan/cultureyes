import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const Influence = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end end"],
  });
  const isMobiletoTablet = useMediaQuery({ maxWidth: 1024 });

  const y = useTransform(scrollYProgress, [0.4, 1], ["0%", "-72%"])

  return (
    <>
      <div ref={target} className="w-full lg:h-[400vh] h-fit py-10">
        <div className="w-full h-fit lg:h-screen lg:sticky lg:top-0 flex flex-col lg:flex-row lg:overflow-hidden">
          <div className="flex-1 lg:sticky lg:top-0 lg:pt-24 lg:px-20 flex flex-col justify-center gap-5">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br to-[#302ADE] from-[#0F2C59] tracking-[-1.8px]">
              Petualangan Ajaib di Negeri Budaya: Keindahan 2.563 Destinasi
              Wisata dan 1.728 Warisan Budaya Indonesia
            </h1>
            <p>
              Setiap langkahmu akan menjadi bagian dari petualangan tak
              terlupakan di negeri yang dipenuhi keindahan ini.
            </p>
          </div>
          <div className="flex-1">
            {!isMobiletoTablet ? (
              <motion.div style={{ y }} className="flex flex-col gap-5 pt-32">
                <div className="w-[24rem] h-[30rem] flex justify-center items-center">
                  <img
                    src="../../../../public/assets/images/barong.jpg"
                    alt=""
                    className="w-full object-cover h-full rounded-2xl"
                  />
                </div>
                <div className="w-[24rem] h-[30rem] flex justify-center items-center">
                  <img
                    src="../../../../public/assets/images/labuanbajo.jpg"
                    alt=""
                    className="w-full object-cover h-full rounded-2xl"
                  />
                </div>
                <div className="w-[24rem] h-[30rem] flex justify-center items-center">
                  <img
                    src="../../../../public/assets/images/papua.jpg"
                    alt=""
                    className="w-full object-cover h-full rounded-2xl"
                  />
                </div>
                <div className="w-[24rem] h-[30rem] flex justify-center items-center">
                  <img
                    src="../../../../public/assets/images/bromo.jpg"
                    alt=""
                    className="w-full object-cover h-full rounded-2xl"
                  />
                </div>
              </motion.div>
            ) : (
              <div className="w-full h-fit py-10">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={15}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  parallax={true}
                  modules={[Autoplay, Parallax]}
                >
                  <SwiperSlide>
                    <div className="w-full h-[60vh] flex justify-center items-center relative">
                      <div className="absolute w-full h-fit rounded-2xl bottom-0 p-3">
                        <div
                          className="w-full h-fit bg-gradient-to-bl from-[#302ADE] to-[#5A9DF1] rounded-2xl p-5"
                          data-swiper-parallax="-500"
                          data-swiper-parallax-opacity="-500"
                          data-swiper-parallax-duration="1000"
                        >
                          <h1 className="text-white font-bold text-2xl">
                            Wamena - Papua
                          </h1>
                          <p className="text-white ">
                            Penduduk Wamena memiliki sejumlah kelompok etnis,
                            yang paling dominan adalah suku Dani, Lani dan Yali
                          </p>
                        </div>
                      </div>
                      <img
                        src="../../../../public/assets/images/papua.jpg"
                        alt=""
                        className="w-full object-cover h-full rounded-2xl"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-[60vh] flex justify-center items-center relative">
                      <div className="absolute w-full h-fit rounded-2xl bottom-0 p-3">
                        <div
                          className="w-full h-fit bg-gradient-to-bl from-[#302ADE] to-[#5A9DF1] rounded-2xl p-5 group"
                          data-swiper-parallax="-500"
                          data-swiper-parallax-opacity="-500"
                          data-swiper-parallax-duration="1000"
                        >
                          <h1 className="text-white font-bold text-2xl">
                            Bromo - Jawa Timur
                          </h1>
                          <p className="text-white ">
                            Taman Nasional Bromo Tengger Semeru memiliki
                            keanekaragaman hayati yang sangat tinggi. Taman
                            nasional ini memiliki berbagai macam flora dan
                            fauna, termasuk rusa, kijang, dan macan tutul.
                          </p>
                        </div>
                      </div>
                      <img
                        src="../../../../public/assets/images/bromo.jpg"
                        alt=""
                        className="w-full object-cover h-full rounded-2xl"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-[60vh] flex justify-center items-center relative">
                      <div className="absolute w-full h-fit rounded-2xl bottom-0 p-3">
                        <div
                          className="w-full h-fit bg-gradient-to-bl from-[#302ADE] to-[#5A9DF1] rounded-2xl p-5"
                          data-swiper-parallax="-500"
                          data-swiper-parallax-opacity="-500"
                          data-swiper-parallax-duration="1000"
                        >
                          <h1 className="text-white font-bold text-2xl">
                            Bali
                          </h1>
                          <p className="text-white ">
                            Barong merupakan tarian yang menggambarkan
                            pertarungan antara kebaikan dan kejahatan.
                          </p>
                        </div>
                      </div>
                      <img
                        src="../../../../public/assets/images/barong.jpg"
                        alt=""
                        className="w-full object-cover h-full rounded-2xl"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full h-[60vh] flex justify-center items-center relative">
                      <div
                        className="absolute w-full h-fit rounded-2xl bottom-0 p-3"
                        data-swiper-parallax="-500"
                        data-swiper-parallax-opacity="-500"
                        data-swiper-parallax-duration="1000"
                      >
                        <div className="w-full h-fit bg-gradient-to-bl from-[#302ADE] to-[#5A9DF1]  rounded-2xl p-5">
                          <h1 className="text-white font-bold text-2xl">
                            Pulau Padar - Labuan Bajo
                          </h1>
                          <p className="text-white ">
                            Dari puncak bukit-bukit di Pulau Padar, kita dapat
                            menikmati panorama indah yang mencakup teluk-teluk
                            dengan air laut berwarna-warni dan pulau-pulau kecil
                            di sekitarnya.
                          </p>
                        </div>
                      </div>
                      <img
                        src="../../../../public/assets/images/labuanbajo.jpg"
                        alt=""
                        className="w-full object-cover h-full rounded-2xl"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Influence;
