'use client';
import { useState } from 'react';
import { projects } from "../constants/imageData"; // Import the image data

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All categories');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const categories = ['All categories', 'Remodeling', 'Repairs', 'Drywall', 'Painting'];

  const filteredProjects = selectedCategory === 'All categories'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => {
        // Ensure prevIndex is a valid number
        return (prevIndex + 1) % filteredProjects.length;
      });
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => {
        // Ensure prevIndex is a valid number
        return (prevIndex - 1 + filteredProjects.length) % filteredProjects.length;
      });
    }
  };

  return (
    <div id="projects" className="relative py-24 sm:py-32">
      {/* Background with Radial Gradient for Both Light and Dark Modes */}
      <div className="absolute inset-0 -z-10 h-full w-full">
                {/* Light mode radial gradient */}
                <div className="relative hidden dark:block h-full w-full bg-slate-950">
                    {/* Gradient circle centered and responsive */}
                    <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                {/* Dark mode radial gradient */}
                <div className="relative dark:hidden h-full w-full bg-white">
                    {/* Gradient circle centered and responsive */}
                    <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Transforming Spaces, Enriching Lives</p>
          <p className="mt-6 text-md text-gray-600 dark:text-gray-400">
            At Rosales Home Innovations, we take pride in our ability to turn your visions into reality. Our diverse portfolio showcases a variety of completed projects, from stunning home remodels to precise drywall installations and beautiful painting finishes. Each project reflects our commitment to quality craftsmanship and customer satisfaction. With a focus on attention to detail and personalized service, we strive to enhance the functionality and aesthetic appeal of every space we work on. Explore our past projects to see how we can help you transform your home into a space you’ll love.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${
                  selectedCategory === category
                    ? 'text-white bg-blue-600 border border-blue-500'
                    : 'text-gray-900 bg-white border border-gray-200'
                } hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none rounded-full text-sm font-medium px-3 py-1.5 me-2 mb-2 transition duration-200 dark:bg-gray-900 dark:text-white`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                <img
                  className="h-auto max-w-full transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                  src={project.src}
                  alt={project.category}
                  onClick={() => openModal(index)}
                />
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImageIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md">
              <div className="relative w-full max-w-3xl h-auto p-4">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white text-2xl bg-gray-600 w-10 h-10 rounded-full hover:bg-gray-700 transition"
                  onClick={closeModal}
                  title="Close"
                >
                  &times;
                </button>
                {/* Previous Button */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 w-10 h-10 rounded-full hover:bg-gray-700 transition"
                  onClick={prevImage}
                  title="Previous"
                >
                  &#8249; {/* Left arrow */}
                </button>
                {/* Next Button */}
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 w-10 h-10 rounded-full hover:bg-gray-700 transition"
                  onClick={nextImage}
                  title="Next"
                >
                  &#8250; {/* Right arrow */}
                </button>
                <img 
                  src={filteredProjects[selectedImageIndex].src} 
                  alt="Selected project" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
