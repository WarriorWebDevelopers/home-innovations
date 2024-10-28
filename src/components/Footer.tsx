import React from 'react'
import Image from 'next/image'
import { navigation } from "../constants/index"
import logoRosales from '../assets/images/RosalesInnovations.png'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-center">
                <div className="mb-6">
                    <a href="https://www.rosaleshomeinnovations.com/" className="flex flex-col sm:flex-row items-center justify-center space-x-4">
                        <Image src={logoRosales} alt="Rosales Home Innovations Logo" className="w-16 h-16" />
                        <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">Rosales Home Innovations</span>
                    </a>
                </div>
                <ul className="flex flex-wrap justify-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {navigation.map((item) => (
                        <li key={item.name} className="mx-4">
                            <a href={item.href} className="hover:underline dark:hover:text-white">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <hr className="my-6 border-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700" />
                <div className="flex justify-center space-x-6">
                    <a href="https://www.facebook.com/aqrosales" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 19">
                            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="https://www.linkedin.com/in/alejandro-quintero-rosales-alex-86a736215/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                        </svg>
                        <span className="sr-only">LinkedIn page</span>
                    </a>
                    <a href="https://www.instagram.com/alejandroquinterorosales/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">Instagram page</span>
                    </a>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 mb-4">
                    <span>© 2024 <a href="https://www.alejandroquinterorosales.com/" className="hover:underline dark:hover:text-white">Rosales Home Innovations</a>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
