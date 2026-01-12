import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I am an aspiring web developer with a strong interest in both frontend and backend development. I am enthusiastic about improving my skills and learning new technologies, and I am open to working with modern web tools and frameworks while building real-world projects.
        </p>

        <br />

        <p className="text-xl">
        I enjoy coding from scratch and love turning ideas into functional and interactive web applications. I am always eager to take on new challenges and collaborate on meaningful projects.<br /> <br />
        I value clean, minimalistic designs, thoughtful content structure, and user-friendly experiences. I believe good design and functionality together can create impactful digital products.<br /> <br />
        I enjoy creating and redesigning digital experiences for websites and applications, focusing on improving usability, visual appeal, and online presence through modern web practices.
        </p>
      </div>
    </div>
  );
};

export default About;
