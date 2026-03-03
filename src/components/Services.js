import React from 'react';
import { FaCode, FaRobot, FaCube } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode size={40} />,
      title: 'Web Development',
      description: 'Custom websites including e-commerce, blogs, and landing pages using modern frameworks.',
      price: 'Negotiable',
    },
    {
      id: 2,
      icon: <FaRobot size={40} />,
      title: 'Discord Bot Dev',
      description: 'Feature-rich Discord bots for community management, music, moderation, and more.',
      price: 'Affordable',
    },
    {
      id: 3,
      icon: <FaCube size={40} />,
      title: 'Minecraft Animation',
      description: 'High-quality 3D animations and renders within the Minecraft style.',
      price: 'Contact for Quote',
    },
  ];

  return (
    <div name="services" className="w-full bg-secondary text-white py-20">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent">
            Services
          </p>
          <p className="py-6 text-gray-400">What I can do for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ id, icon, title, description, price }) => (
            <div
              key={id}
              className="bg-primary p-6 rounded-lg shadow-lg hover:scale-105 duration-300 border border-gray-700 hover:border-accent"
            >
              <div className="text-accent mb-4">{icon}</div>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <p className="text-lg font-semibold text-accent">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;