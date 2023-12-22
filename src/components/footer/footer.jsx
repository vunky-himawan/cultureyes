import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center w-full">
      <img
        src="../../../public/assets/images/Vector 1.svg"
        alt=""
        className="w-full"
      />
      <p className="text-white bg-[#302ADE]">Copyright © 2023 || Cultureyes</p>
      <p className="text-white bg-[#302ADE] p-5">
        Hosting By <Link to={"https://vercel.com"}>Vercel</Link> | Powered By{" "}
        <Link to={"https://vitejs.dev/"}>Vite ReactJS</Link>,{" "}
        <Link to={"https://tailwindcss.com/"}>TailwindCSS</Link>,{" "}
        <Link to={"https://framer.com/motion/"}>Framer Motion</Link>, {""}
        <Link to={"https://swiperjs.com/"}>SwiperJS</Link>
      </p>
    </footer>
  );
};

export default Footer;
