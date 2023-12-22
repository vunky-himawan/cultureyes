const Flower = ({ position }) => {
  return (
    <>
      <div
        className={`w-[10rem] h-[10rem] grid grid-cols-2 grid-rows-2 ${position} -z-10 animate-spin`}
      >
        <div className="w-full h-full bg-[#302ADE] rounded-tr-full rounded-bl-full"></div>
        <div className="w-full h-full bg-[#302ADE] rounded-tl-full rounded-br-full"></div>
        <div className="w-full h-full bg-[#302ADE] rounded-tl-full rounded-br-full"></div>
        <div className="w-full h-full bg-[#302ADE] rounded-tr-full rounded-bl-full"></div>
      </div>
    </>
  );
};

export default Flower;
