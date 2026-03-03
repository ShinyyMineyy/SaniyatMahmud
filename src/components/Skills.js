import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDiscord } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: <FaHtml5 size={50} className="text-orange-500" />,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: <FaCss3Alt size={50} className="text-blue-500" />,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: <FaJs size={50} className="text-yellow-500" />,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: <FaReact size={50} className="text-cyan-400" />,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: <SiTailwindcss size={50} className="text-sky-400" />,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: <FaNodeJs size={50} className="text-green-500" />,
      title: 'Node JS',
      style: 'shadow-green-500',
    },
    {
      id: 7,
      src: <SiExpress size={50} className="text-gray-400" />,
      title: 'Express',
      style: 'shadow-gray-400',
    },
    {
      id: 8,
      src: <SiMongodb size={50} className="text-green-600" />,
      title: 'MongoDB',
      style: 'shadow-green-600',
    },
    {
      id: 9,
      src: <FaPython size={50} className="text-yellow-300" />,
      title: 'Python',
      style: 'shadow-yellow-300',
    },
    {
      id: 10,
      src: <FaDiscord size={50} className="text-indigo-500" />,
      title: 'Discord Bots',
      style: 'shadow-indigo-500',
    },
  ];

  return (
    <div name="skills" className="w-full bg-primary text-white py-20">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-accent p-2 inline">
            Skills
          </p>
          <p className="py-6 text-gray-400">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg bg-secondary ${style}`}
            >
              <div className="w-20 mx-auto mb-4 flex justify-center items-center">
                  {src}
              </div>
              <p className="mt-4 font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;