import React from 'react';
import { Linkedin, Instagram, Youtube, Send, BookOpen, X } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <img
        src="https://i.postimg.cc/qRgMhzw7/photo-2024-10-04-15-18-10.jpg"
        alt="Denys Dinkevych"
        className="w-48 h-48 object-cover rounded-full mb-6"
      />
      <p className="text-lg mb-4 text-center lg:text-left">
        Hey there! I'm Denys, a talent sourcing enthusiast who's always on the hunt for the next big thing in recruitment tech.
      </p>
      <p className="text-lg mb-6 text-center lg:text-left">
        When I'm not diving into data or testing out new AI tools, you'll find me chatting with interesting people about their career dreams and helping companies build awesome teams.
      </p>
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-3 text-center lg:text-left">Let's Connect</h3>
        <div className="flex justify-center lg:justify-start flex-wrap gap-4">
          <a href="https://sourcingdenis.t.me/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"><Send size={24} /></a>
          <a href="https://sourcingdenis.medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"><BookOpen size={24} /></a>
          <a href="https://youtube.com/@diskevich" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"><Youtube size={24} /></a>
          <a href="https://instagram.com/__diskevich" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"><Instagram size={24} /></a>
          <a href="https://linkedin.com/in/sourcingdenis" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"><Linkedin size={24} /></a>
          <a href="https://x.com/SourcingDenis" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"><X size={24} /></a>
        </div>
      </div>
    </div>
  );
};

export default Profile;