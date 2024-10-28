'use client';
import { useEffect, useState } from 'react';

const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="scroll-up-button" // Add a unique ID here
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg transition-opacity duration-300 flex items-center justify-center ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ display: isVisible ? 'flex' : 'none' }} // Use 'flex' to center the icon
    >
      ↑
    </button>
  );
};

export default ScrollUpButton;