'use client';
import React from 'react'
import { useEffect } from 'react';

const Feed = () => {
    // Component to filter and display projects
    useEffect(() => {
    // Load Instagram embed script after component mounts
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    // Cleanup script on unmount
    return () => {
    document.body.removeChild(script);
    };
}, []);

return (
    <section className="py-14 relative">
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
    <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
                {/* Instagram Embed */}
                <div className="mt-12 flex justify-center">
                <blockquote 
                className="instagram-media rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                data-instgrm-permalink="https://www.instagram.com/alejandroquinterorosales/?utm_source=ig_embed&utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{ background: "#FFF", border: 0, borderRadius: "10px", margin: "1px", padding: 0, width: "100%", maxWidth: "600px", minWidth: "326px" }}
                >
                <div style={{ padding: "16px" }}>
                <a href="https://www.instagram.com/alejandroquinterorosales/?utm_source=ig_embed&utm_campaign=loading" 
                style={{ background: "#FFFFFF", lineHeight: 0, padding: 0, textAlign: "center", textDecoration: "none", width: "100%" }} 
                target="_blank">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "40px", marginRight: "14px", width: "40px" }}>
                </div>
                <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "14px", marginBottom: "6px", width: "100px" }}>
            </div>
            <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "14px", width: "60px" }}>
        </div>
    </div>
    </div>
    <div style={{ padding: "19% 0" }}></div>
    <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
    <svg width="50px" height="50px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <g fill="#000000">
            <path d="M..."/>
        </g>
    </svg>
    </div>
    <div style={{ paddingTop: "8px" }}>
    <div style={{ color: "#3897f0", fontFamily: "Arial,sans-serif", fontSize: "14px" }}>View this profile on Instagram</div>
    </div>
    </a>
    </div>
    <p style={{ color: "#c9c8cd", fontFamily: "Arial,sans-serif", fontSize: "14px", textAlign: "center" }}>
    <a href="https://www.instagram.com/alejandroquinterorosales/?utm_source=ig_embed&utm_campaign=loading" target="_blank">
    Alejandro Quintero Rosales
    </a> 
    (@<a href="https://www.instagram.com/alejandroquinterorosales/?utm_source=ig_embed&utm_campaign=loading" target="_blank">alejandroquinterorosales</a>)
    • Instagram photos and videos
    </p>
    </blockquote>
    </div>
    </div>
    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
        <h3 className="text-indigo-600 font-semibold">
            Transform Your Space
        </h3>
        <p className="text-gray-800  dark:text-white text-3xl font-semibold sm:text-4xl">
            Experience Exceptional Home Innovations
        </p>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
            At Rosales Home Innovations, we believe in creating spaces that reflect your unique style and needs. From remodeling to painting, our team of experts is dedicated to delivering top-notch craftsmanship and personalized service. Explore our Instagram for inspiring transformations and let us help you turn your vision into reality!
        </p>
    </div>
    </div>
    </div>
    </section>
    )
}
export default Feed;