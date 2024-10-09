import React from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Denys Dinkevych</h1>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(true)} className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;