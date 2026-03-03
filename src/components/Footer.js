import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-primary text-gray-300 py-8 border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-accent font-signature">Saniyat.</h2>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Saniyat Mahmud. All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-accent duration-300">
            <FaDiscord size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;