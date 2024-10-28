import React from 'react';
import Image from 'next/image';
import drywallFraming from "../assets/images/drywall-framing.jpg";

const Hero = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 min-h-[90vh]"> {/* Adjusted height */}
            {/* Background Video */}
            <video
                src="/videos/drywallVideo.mp4" // Reference the video from the public folder
                autoPlay
                loop
                muted
                playsInline // For mobile compatibility
                className="absolute inset-0 w-full h-full object-cover -z-10" // Make it a background element
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/50 -z-10"></div>
            
            <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-32 h-full flex flex-col justify-center"> {/* Adjusted padding */}
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Proud to Serve You with the Best Home Renovation Solutions.{' '}
                        <a href="#projects" className="font-semibold text-indigo-600">
                            <span aria-hidden="true" className="absolute inset-0" />
                            Discover Our Story <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Welcome to Rosales Home Innovations
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Adding a Lifetime's Value Today!
                    </p>
                    <p className="mt-2 text-md leading-7 text-gray-500">
                        We transform your house into a dream home, offering unparalleled craftsmanship, trusted materials, and a commitment to excellence.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-x-6">
                        <a
                            href="#projects"
                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get Your Free Quote
                        </a>
                        <a href="#services" className="text-sm font-semibold leading-6 text-gray-900">
                            Explore Our Services <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
