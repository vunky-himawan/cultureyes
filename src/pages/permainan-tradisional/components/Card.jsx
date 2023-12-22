import bajuAdat from "../../../../public/assets/images/budaya/gasingan.jpg";
export const Card = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col font-poppins">
        <div className="w-full h-[30rem]">
          <img
            src={bajuAdat}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="py-3 h-fit ">
          <h1 className="text-xl font-semibold">Gasingan</h1>
          <p className="text-sm text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            harum distinctio veniam debitis fuga deleniti modi quis, aperiam
            pariatur excepturi....
          </p>
          <button className="w-fit px-2 py-1 rounded-md bg-[#302ADE] text-white mt-3">
            Selengkapnya
          </button>
        </div>
      </div>
    </>
  );
};
