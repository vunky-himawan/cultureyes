import papua from "../../../../public/assets/images/papua.jpg";

export const Card = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col font-poppins">
        <div className="w-full h-[30rem]">
          <img
            src={papua}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="py-3 h-fit ">
          <h1 className="text-xl font-semibold">Suku Dani</h1>
          <p className="text-[0.6rem] w-fit bg-gradient-to-br from-[#302ADE] to-[#0F2C59] text-white px-2 py-[0.15rem] rounded-md">
            Papua
          </p>
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
