"use client";
import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { navigation, callsToAction } from "../constants/index";
import logoRosales from '../assets/images/RosalesInnovations.png';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState('');
  const [shadow, setShadow] = useState(false); // State for shadow

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 0); // Set shadow if scrolled down
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 ${shadow ? 'shadow-lg' : ''}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between"> {/* Increased height */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setOpen(true)}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                src={logoRosales}
                alt="Rosales Home Innovations Logo"
                className="h-16 w-auto" // Increased logo size
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  item.name === "Contact" ? (
                    <div className="relative" key={item.name}>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={classNames(
                          'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white',
                          'rounded-md px-4 py-5 text-base font-medium flex items-center'
                        )}
                      >
                        {item.name}
                        <ChevronDownIcon className="h-5 w-5 ml-1" aria-hidden="true" />
                      </button>
                      {dropdownOpen && (
                        <div className="absolute left-0 z-10 mt-2 w-72 rounded-md bg-white dark:bg-gray-700 shadow-lg">
                          <div className="grid grid-cols-2 divide-x divide-gray-900/5 gap-2 p-2">
                            {callsToAction.map((action) => (
                              <a
                                key={action.name}
                                href={action.href}
                                className="flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={() => {
                                  setCurrentItem(action.name);
                                  setOpen(false); // Close menu on link click
                                }}
                              >
                                <action.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                <span className="ml-2">{action.name}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={currentItem === item.name ? 'page' : undefined}
                      className={classNames(
                        currentItem === item.name ? 'bg-gray-900 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white',
                        'rounded-md px-4 py-5 text-base font-medium'
                      )}
                      onClick={() => setCurrentItem(item.name)}
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:flex">
          <h1 className="ml-2 sm:text-sm sm:font-medium md:hidden lg:block md:text-2xl md:font-semibold text-gray-700 dark:text-gray-300">
  Rosales Home Innovations
</h1>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50 sm:hidden">
        <div className={`fixed inset-0 z-50 bg-gray-800/60 backdrop-blur transition-opacity duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  dark:bg-slate-950 shadow-lg transition-all">
            <div className="flex justify-between items-center px-4 py-4">
              <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Rosales Home Innovations.</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-1 px-4 py-4 pb-4">
              {navigation.map((item) => (
                item.name === "Contact" ? (
                  <div className="relative" key={item.name}>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className={classNames(
                        'block text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left',
                        'rounded-md px-3 py-2 text-base font-medium flex items-center justify-center'
                      )}
                    >
                      {item.name}
                      <ChevronDownIcon className="h-5 w-5 ml-1" aria-hidden="true" />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="mt-2 rounded-md bg-white dark:bg-gray-700 shadow-lg">
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 gap-2 p-2">
                          {callsToAction.map((action) => (
                            <a
                              key={action.name}
                              href={action.href}
                              className="flex items-center justify-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                              onClick={() => {
                                setCurrentItem(action.name);
                                setOpen(false); // Close menu on link click
                              }}
                            >
                              <action.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                              <span className="ml-2">{action.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={currentItem === item.name ? 'page' : undefined}
                    className={classNames(
                      currentItem === item.name ? 'bg-gray-900 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium w-full text-center'
                    )}
                    onClick={() => {
                      setCurrentItem(item.name);
                      setOpen(false); // Close menu on link click
                    }}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </nav>
  );
}
