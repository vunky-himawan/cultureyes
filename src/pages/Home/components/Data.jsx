import { useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const Section = ({ children, title, rounded }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div ref={ref} className="w-full h-full">
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateX(20px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`w-full h-full border border-[#302ADE] bg-white ${rounded} flex flex-col gap-y-5 px-8 lg:px-20 py-10`}
        >
          <div className="flex gap-x-3 justify-center items-center">
            <div className="w-fit h-fit bg-[#302ADE] rounded-full p-2">
              <svg
                id="Layer_1"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
              >
                <path
                  fill="#fff"
                  d="m24 9a5 5 0 0 1 -.845 2.016l-8.783 11.82a3 3 0 0 1 -4.722.029l-8.826-12.065a5.045 5.045 0 0 1 -.779-1.8h6.268l4.753 12.359a1 1 0 0 0 1.868 0l4.753-12.359zm-6.3-2h6.257a4.974 4.974 0 0 0 -.857-1.871l-2.558-3.454a4.006 4.006 0 0 0 -3.255-1.675h-2.2zm-6.592-7-2.659 7h7.112l-2.606-7zm-4.798 7 2.658-7h-2.322a3.99 3.99 0 0 0 -3.235 1.649l-2.473 3.242a4.99 4.99 0 0 0 -.938 2.109zm9.234 2h-7.088l3.544 9.214z"
                />
              </svg>
            </div>
            <h1 className="text-base">{title}</h1>
          </div>
          <div className="w-full bg-[#302ADE] rounded-md text-white p-4">
            <p>{children}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  rounded: PropTypes.string.isRequired,
};

const Data = () => {
  return (
    <>
      <div className="w-full grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 items-center justify-center lg:gap-x-5 gap-y-5 pt-20">
        <Section
          title={"Warisan Budaya Tak Benda"}
          rounded={"max-lg:rounded-3xl lg:rounded-tl-[8rem]"}
        >
          Keberagaman warisan budaya Indonesia yang mencapai lebih dari 1728
          memberikan kita cakrawala pengetahuan yang tak terbatas.
        </Section>
        <Section title={"Warisan Budaya Yang di Akui UNESCO"}>
          Dari lebih dari 1728 warisan budaya tak benda Indonesia, 13 di
          antaranya telah diakui oleh UNESCO sebagai khazanah dunia. Di antara
          warisan yang luhur ini, terdapat keindahan seperti wayang, keagungan
          keris, keunikan batik, kegrasian tari saman, dan kekuatan seni bela
          diri pencak silat, yang bersama-sama menjadi saksi kekayaan budaya
          yang tak ternilai di Nusantara.
        </Section>
        <Section
          title={"Objek Wisata di Indonesia"}
          rounded={"max-lg:rounded-3xl lg:rounded-tr-[8rem]"}
        >
          Indonesia mempesona dengan lebih dari 2.563 objek wisata yang
          mengundang untuk dinikmati. Setiap sudut menyimpan keindahan alam,
          budaya, dan sejarah yang memperkaya pengalaman, menjadi pelajaran
          hidup tentang keanekaragaman luar biasa negeri ini.
        </Section>
      </div>
    </>
  );
};

export default Data;
