import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useSpring, animated } from "@react-spring/web";
import Tilt from "react-parallax-tilt";
const Home = () => {
  const [props, set] = useSpring(() => ({
    translateY: 0,
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
    },
  }));

  const handleScroll = () => {
    const scrollY = window.scrollY;
    set({ translateY: scrollY * 0.4 });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <animated.div
        className="z-10 absolute top-[35%] left-[10%] text-left"
        style={{
          transform: props.translateY.to((y) => `translateY(${y}px)`),
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white text-black">
          Hey, I'm Rohit.
        </h1>
        <h2 className="text-lg md:text-2xl font-mono text-pink-500 dark:text-purple-500 mt-4">
          <Typewriter
            words={[
              "Cybersecurity Enthusiast.",
              "Software Developer.",
              "Designer.",
              "Digital Craftsman.",
              "Terminal Therapist.",
              "Full-Time Cynic (Part-Time Coder).",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={75}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </animated.div>
   <Tilt
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  glareEnable={true}
  glareMaxOpacity={0.2}
  scale={1.05}
  transitionSpeed={1500}
  className="absolute bottom-0 right-0 z-0"
>
  <img
    src="/avatar_light.png"
    alt="Avatar Light"
    className="w-[35%] md:w-[45%] lg:w-[60%] mx-auto block dark:hidden"
  />
  <img
    src="/avatar_dark.png"
    alt="Avatar Dark"
    className="w-[35%] md:w-[45%] lg:w-[60%] mx-auto hidden dark:block"
  />
</Tilt>
    </section>
  );
};

export default Home;