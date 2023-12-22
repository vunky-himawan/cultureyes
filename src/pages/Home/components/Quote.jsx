const Quote = () => {
  return (
    <>
      <div className="py-10">
        <div className="w-full md:h-screen grid grid-rows-2 md:flex relative bg-[#302ADE] md:flex-row  md:rounded-tr-[20rem] rounded-tl-[12rem] overflow-hidden md:rounded-bl-[20rem] rounded-br-[12rem]">
          <div className="absolute w-full h-full max-md:bg-blue-gradient"></div>
          <div className="flex-1 z-10 order-2 md:order-1 font-montserrat lg:p-32 p-10">
            <h1 className="md:text-6xl text-3xl font-semibold text-white">
              Jangan Sampai Budaya Lokal Tergerus Budaya Asing
            </h1>
            <p className="text-white py-5">-- Presiden Joko Widodo</p>
            <p className="text-white">
              Kita adalah pewaris budaya yang berharga, dan dengan saling
              menghargai, kita dapat memperkuat dan mempertahankan warisan luhur
              ini untuk generasi mendatang.
            </p>
          </div>
          <div className="md:w-[40%] h-full">
            <img
              src="../../../../public/assets/images/jokowi-pakai-ageman-songkok-singkepan-ageng-di-upacara-hut-ke-78-ri-1 1.svg"
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
