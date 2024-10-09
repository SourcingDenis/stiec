import React, { useState, useEffect } from 'react';

const phrases = [
  'one connection at a time.',
  'one talent discovery at a time.',
  'one perfect match at a time.',
  'one career opportunity at a time.',
  'one recruitment success at a time.',
];

// Custom hook to handle intervals
const useInterval = (callback: () => void, delay: number) => {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, [callback, delay]);
};

const Content: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentChar < phrases[currentIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentPhrase((prev) => prev + phrases[currentIndex][currentChar]);
        setCurrentChar((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentPhrase('');
        setCurrentChar(0);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 2000); // Pause between phrases
      return () => clearTimeout(pause);
    }
  }, [currentChar, currentIndex]);

  return (
    <div className="w-full lg:w-2/3">
      <div className="bg-gray-800 text-white p-8 rounded-lg">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Uncovering hidden talent
          <span className="block text-orange-500">in the digital age</span>
        </h2>
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold h-20 mb-4">
          {currentPhrase}
        </div>
      </div>
      <div className="mt-8">
        <p className="text-lg sm:text-xl mb-6">
          I've always been fascinated by the challenge of finding the right
          person for the right job. It's like solving a complex puzzle, and I
          love every bit of it.
        </p>
        <p className="text-lg sm:text-xl mb-6">
          These days, I'm all about using the latest tech to make talent
          sourcing smarter and more efficient. From AI-powered tools to data
          analytics, I'm constantly exploring new ways to connect great people
          with exciting opportunities.
        </p>
        <p className="text-lg sm:text-xl">
          Want to stay in the loop? Subscribe below for my thoughts on the
          ever-changing world of talent acquisition and some cool job openings I
          come across.
        </p>
      </div>
    </div>
  );
};

export default Content;
