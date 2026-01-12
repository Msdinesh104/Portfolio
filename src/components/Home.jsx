import React, { useEffect, useRef, useState } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

const Home = () => {
  const textRef = useRef(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowText(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
  }, []);

  return (
    <section
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 gap-8">

        {/* TEXT SECTION */}
        <div
          ref={textRef}
          className={`flex flex-col justify-center text-center md:text-left transition-all duration-1000 ease-out
          ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white min-h-[120px] md:min-h-[170px]">
            {showText && (
              <ReactTyped
                strings={[
                  "I'm a React Developer",
                  "I Build Modern Web Applications",
                  "I'm a MERN Stack Developer",
                ]}
                typeSpeed={80}
                backSpeed={50}
                backDelay={1200}
                loop={false}
                showCursor={false}
              />
            )}
          </h2>

          <p className="text-gray-400 py-4 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            I am an aspiring web developer with practical experience in building
            modern, responsive web applications. I enjoy working with
            technologies like React, Tailwind CSS, Next.js, and GraphQL.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl w-44 h-44 sm:w-56 sm:h-56 md:w-96 md:h-96 object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
