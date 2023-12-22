import { useInView } from "framer-motion";
import { useRef } from "react";

const Title = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <h1
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateX(20px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br to-[#302ADE] from-[#0F2C59] pb-10 tracking-[-1.8px]"
      >
        Mari kita terlibat dalam perjalanan melestarikan budaya kita melalui
        dunia digital.
      </h1>
    </div>
  );
};

const VideoElement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div ref={ref}>
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "scaleY(1)" : "scaleY(0)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="w-full lg:h-screen"
        >
          <div className="w-full h-full">
            <video
              src="../../../../public/assets/video/videoplayback.webm"
              className="w-full h-full aspect-video rounded-3xl"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

const Video = () => {
  return (
    <>
      <Title />
      <VideoElement />
    </>
  );
};

export default Video;
