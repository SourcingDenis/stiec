import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <div className="p-4">
        <button onClick={() => setIsOpen(false)} className="mb-4 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
          <X size={24} />
        </button>
        <nav>
          <ul className="space-y-4">
            <li><Link to="/" className="text-lg hover:text-orange-500 dark:text-white dark:hover:text-orange-400" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/speaking-engagements" className="text-lg hover:text-orange-500 dark:text-white dark:hover:text-orange-400" onClick={() => setIsOpen(false)}>Speaking Engagements</Link></li>
            <li><a href="#" className="text-lg hover:text-orange-500 dark:text-white dark:hover:text-orange-400">Blog</a></li>
            <li><a href="#" className="text-lg hover:text-orange-500 dark:text-white dark:hover:text-orange-400">Consultancy</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;