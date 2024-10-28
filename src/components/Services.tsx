import React from 'react';
import { servicesInfo } from "../constants/index"; // Ensure your services array includes 'Home Innovations'
import { servicesImages } from "../constants/imageData"; // Ensure your services array includes 'Home Innovations'

const Services = () => {
  return (
    <div id="services" className="relative">
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Expert Solutions for Every Home Project
          </h2>
          <p className="mt-4 text-md text-gray-600 dark:text-gray-400">
            At Rosales Home Innovations, we offer a comprehensive range of home improvement services tailored to meet your needs. Our expertise spans from precision drywall installation and remodeling to professional painting and repair services. We prioritize quality and customer satisfaction in every project, ensuring your vision is brought to life with attention to detail and craftsmanship. Whether you need a minor repair or a complete renovation, our dedicated team is here to provide exceptional service and results that exceed your expectations.
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {servicesInfo.map((service) => (
              <div key={service.name} className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <dt className="font-medium text-gray-900 dark:text-white">{service.name}</dt>
                <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              {servicesImages.slice(0, 1).map((image, index) => (
                <div
                  key={index}
                  className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                >
                  <div className="relative">
                    <img
                      alt={image.alt}
                      loading="lazy"
                      width="1024"
                      height="1024"
                      decoding="async"
                      data-nimg="1"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:shadow-lg dark:shadow-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700"
                      src={image.src}
                      style={{ color: "transparent" }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-700/20"></div>
                  </div>
                </div>
              ))}
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                {servicesImages.slice(1, 3).map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      alt={image.alt}
                      loading="lazy"
                      width="1024"
                      height="1024"
                      decoding="async"
                      data-nimg="1"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:shadow-lg dark:shadow-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700"
                      src={image.src}
                      style={{ color: "transparent" }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-700/20"></div>
                  </div>
                ))}
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                {servicesImages.slice(3).map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      alt={image.alt}
                      loading="lazy"
                      width="1024"
                      height="1024"
                      decoding="async"
                      data-nimg="1"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:shadow-lg dark:shadow-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700"
                      src={image.src}
                      style={{ color: "transparent" }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-700/20"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
