import labuanbajo from "../../../../public/assets/images/labuanbajo.jpg";
import PropTypes from "prop-types";
export const Card = ({ colspan }) => {
  return (
    <>
      <div className={`w-full h-fit flex flex-col font-poppins ${colspan}`}>
        <div className="w-full h-[20rem]">
          <img
            src={labuanbajo}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="py-3 h-fit ">
          <h1 className="text-xl font-semibold">Labuan Bajo</h1>
          <div className="flex flex-wrap gap-3">
            <p className="text-[0.6rem] bg-gradient-to-br from-[#302ADE] to-[#0F2C59] text-white px-2 py-[0.15rem] rounded-md">
              5.381.820.000 Pengunjung
            </p>
            <p className="text-[0.6rem] bg-gradient-to-br from-[#302ADE] to-[#0F2C59] text-white px-2 py-[0.15rem] rounded-md">
              Nusa Tenggara Timur
            </p>
          </div>
          <button className="w-fit px-2 py-1 rounded-md bg-[#302ADE] text-white mt-3 text-sm">
            Selengkapnya
          </button>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  colspan: PropTypes.string,
};
