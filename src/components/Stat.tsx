'use client'
import React, { useEffect, useState } from 'react';
import { stats } from "../constants/index"; // Ensure your stat array includes 'Home Innovations'

function useCountUp(endValue: number, duration: number = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const progressPercentage = Math.min(progress / duration, 1);
            setCount(Math.floor(progressPercentage * endValue));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [endValue, duration]);

    return count;
}

const Stat = () => {
    return (
        <div className="relative py-24 sm:py-32">
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
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Achievements</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Performance Highlights</p>
                    <p className="mt-6 text-md text-gray-600 dark:text-gray-400">
                        At Rosales Home Innovations, our dedication to quality and customer satisfaction drives our success. These statistics reflect our commitment to excellence in every project we undertake.
                    </p>
                </div>

                {/* Updated grid layout with fading divider line */}
                <dl className="mt-16 grid grid-cols-1 gap-y-16 text-center lg:grid-cols-3 lg:gap-x-8">
                    {stats.map((stat, index) => {
                        const animatedValue = useCountUp(stat.value, 2000); // Animate to the final value over 2 seconds
                        return (
                            <div
                                key={stat.id}
                                className={`relative mx-auto flex max-w-xs flex-col gap-y-4 px-8 ${index < stats.length - 1 ? 'lg:border-r' : ''} lg:border-transparent lg:before:absolute lg:before:inset-y-0 lg:before:right-0 lg:before:w-px lg:before:bg-gradient-to-b lg:before:from-gray-300 lg:before:to-transparent`}>
                                {/* Stat content */}
                                <dt className="flex items-center justify-center text-base font-semibold leading-7 text-indigo-900 dark:text-indigo-400 ">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 mr-2">
                                        <stat.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {stat.name}
                                </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white  sm:text-5xl">
                                    {animatedValue} {/* Animated value */}
                                </dd>
                            </div>
                        );
                    })}
                </dl>
            </div>
        </div>
    );
}

export default Stat;
