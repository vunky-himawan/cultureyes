import PropTypes from "prop-types";

const Card = ({ image }) => {
  return (
    <>
      <div className="w-full h-full bg-[#302ADE] rounded-[3rem]">
        <img src={image} alt="" />
      </div>
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;
