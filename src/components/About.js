import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full bg-gradient-to-b from-secondary to-primary text-white py-20">
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent">
            About
          </p>
        </div>

        <p className="text-xl mt-5 text-gray-300 leading-relaxed">
          I am Saniyat Mahmud, a passionate 19-year-old Full Stack Web Engineer with over 4 years of hands-on experience. 
          My journey in tech started with a curiosity for how things work on the internet, which quickly evolved into a 
          full-blown career path. I specialize in building robust web applications using the MERN stack (MongoDB, Express, React, Node.js) 
          and Python.
        </p>

        <br />

        <p className="text-xl text-gray-300 leading-relaxed">
          Beyond standard web development, I explore the creative and cutting-edge sides of technology. 
          I develop custom Discord bots to enhance community interactions, create 3D animations in Minecraft, 
          and leverage AI tools to accelerate development and solve complex problems. I am always eager to learn 
          new technologies and take on challenges that push my boundaries.
        </p>
      </div>
    </div>
  );
};

export default About;