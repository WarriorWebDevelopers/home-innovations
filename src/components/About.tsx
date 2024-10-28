import React from 'react'
import { features } from "../constants/index"; // Ensure your features array includes 'Home Innovations'

const About = () => {
    return (
        <div id="about" className="relative py-24 sm:py-32">
            {/* Background with Radial Gradient for Both Light and Dark Modes */}
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
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">About</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Rosales Home Innovations
                    </p>
                    <p className="mt-6 text-md text-gray-600 dark:text-gray-400">
                        Rosales Home Innovations is a family-owned business dedicated to turning your home improvement dreams into reality. Specializing in home repairs, remodeling, drywall, and painting, we bring your creative ideas to life with professionalism and expertise. Our free consultations are designed to address all your questions, needs, and concerns in a clear, easy-to-understand manner, ensuring every step of your project makes sense to you. <br/>
                        At the core of our values is a commitment to delivering exceptional service with a personal touch. We thank you for considering us and look forward to providing you with the highest quality workmanship and care for your home.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                        <dt className="text-base font-semibold text-gray-900 dark:text-white">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                            </div>
                            {feature.name}
                        </dt>
                        <dd className="mt-2 text-md leading-6 dark:text-gray-400 text-gray-600">{feature.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
export default About