import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full p-2 overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:p-2 px-7 py-5 bg-gray-300 rounded-3xl backdrop-blur-3xl relative">
          <div>
            <img
              src="../../../public/assets/images/LOGO CULTUREYES 3.png"
              alt=""
              className="lg:w-[150px] w-[100px]"
            />
          </div>
          <div className="lg:block hidden">
            <ul className="flex justify-center h-full items-center text-xl gap-x-6 text-[#0F2C59]">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/wisata-lokal"}>Wisata</Link>
              </li>
              <li>
                <Link to={"/budaya"}>Budaya</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-end items-center md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <rect fill="#0F2C59" y="11" width="24" height="2" rx="1" />
              <rect fill="#0F2C59" y="4" width="24" height="2" rx="1" />
              <rect fill="#0F2C59" y="18" width="24" height="2" rx="1" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
