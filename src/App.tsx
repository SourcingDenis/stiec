import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Profile from './components/Profile';
import Newsletter from './components/Newsletter';
import Menu from './components/Menu';
import SpeakingEngagements from './components/SpeakingEngagements';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Header setIsMenuOpen={setIsMenuOpen} />
          <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <Routes>
              <Route path="/" element={
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <Profile />
                  <Content />
                  <Newsletter />
                </div>
              } />
              <Route path="/speaking-engagements" element={<SpeakingEngagements />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;