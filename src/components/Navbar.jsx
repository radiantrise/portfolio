import React from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <div className='fixed z-[1000] w-screen'>
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-1">
        <Image width={150} height={50} src={logo} alt='logo' />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className=" w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block py-1 text-white rounded hover:text-secondary-purple transition-all duration-300 ease-in-out underline-animation"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 text-white rounded hover:text-secondary-purple transition-all duration-300 ease-in-out underline-animation"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 text-white rounded hover:text-secondary-purple transition-all duration-300 ease-in-out underline-animation"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 text-white rounded hover:text-secondary-purple transition-all duration-300 ease-in-out underline-animation"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 text-white rounded hover:text-secondary-purple transition-all duration-300 ease-in-out underline-animation"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};
