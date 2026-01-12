import React from "react";
import Netflix from "../assets/portfolio/Netflix-Pro.png";
import Bulk from "../assets/portfolio/Bulk-mail-pro.png";
import Movie from "../assets/portfolio/Movie-APP.png";
import Countries from "../assets/portfolio/Countries-pro.png";
import weather from "../assets/portfolio/weather-app.png";
import ecommerce from "../assets/portfolio/ecommerce-project.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce,
      link: "https://buy-now-e-commerce.vercel.app/",
      repo: "https://github.com/Msdinesh104/BuyNow-e-commerce-",
    },
    {
      id: 2,
      src: Bulk,
      link: "https://bulk-mail-eight-pi.vercel.app/",
      repo: "https://github.com/Msdinesh104/Bulk-Mail",
    },
    {
      id: 3,
      src: Netflix,
      link: "https://netflix-frontend-ebon.vercel.app/",
      repo: "https://github.com/Msdinesh104/Netflix-Frontend",
    },
    {
      id: 4,
      src: Movie,
      link: "https://movie-app-phi-steel.vercel.app/",
      repo: "https://github.com/Msdinesh104/Movie-App",
    },
    {
      id: 5,
      src: weather,
      link: "https://weather-app-tau-gold-27.vercel.app/",
      repo: "https://github.com/Msdinesh104/Weather-App",
    },
    {
      id: 6,
      src: Countries,
      link: "https://waveatrahul.netlify.app/",
      repo: "https://github.com/rahulkarda/Wave-Portal",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
