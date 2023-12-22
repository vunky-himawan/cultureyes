import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ image, title }) => {
  return (
    <>
      <Link
        to={`${title.split(" ").join("-").toLowerCase()}`}
        className="w-full h-full grid grid-cols-1 grid-rows-2 overflow-hidden"
      >
        <div className="w-full h-[20rem] bg-gray-100 p-5 rounded-3xl">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full flex justify-center py-10">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </Link>
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
