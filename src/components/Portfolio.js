import React from 'react';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce site with payment integration.',
      demo: '#',
      code: '#',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Discord Bot Dashboard',
      description: 'Web dashboard to manage custom Discord bots.',
      demo: '#',
      code: '#',
      color: 'bg-indigo-500'
    },
    {
      id: 3,
      title: 'Minecraft Animation Portfolio',
      description: 'Showcase of 3D animations created in Minecraft.',
      demo: '#',
      code: '#',
      color: 'bg-green-500'
    },
    {
      id: 4,
      title: 'AI Content Generator',
      description: 'Tool using OpenAI API to generate blog content.',
      demo: '#',
      code: '#',
      color: 'bg-purple-500'
    },
    {
      id: 5,
      title: 'Personal Blog',
      description: 'A minimal blog built with React and Markdown.',
      demo: '#',
      code: '#',
      color: 'bg-pink-500'
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'Productivity app with drag-and-drop features.',
      demo: '#',
      code: '#',
      color: 'bg-yellow-500'
    },
  ];

  return (
    <div name="portfolio" className="w-full bg-gradient-to-b from-primary to-secondary text-white py-20">
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent">
            Portfolio
          </p>
          <p className="py-6 text-gray-400">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, description, demo, code, color }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden hover:shadow-accent duration-300 bg-primary">
              <div className={`h-48 w-full ${color} flex items-center justify-center`}>
                  <span className="text-4xl font-bold opacity-50">{title[0]}</span>
              </div>
              <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{description}</p>
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 hover:text-accent">
                        <a href={demo} target="_blank" rel="noreferrer">Demo</a>
                    </button>
                    <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 hover:text-accent">
                        <a href={code} target="_blank" rel="noreferrer">Code</a>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;