import React, { useState } from 'react';
import { RiMenu5Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';

function Navbar() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const test = openMenuMobile ? 'block' : 'hidden';
  return (
    <>
      <nav className="flex w-full flex-wrap items-center justify-between bg-white py-6 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 max-md:px-10">
        <div className="container">
          <div className="flex w-full flex-wrap items-center justify-between">
            <div>
              <a
                className="text-xl font-bold text-neutral-800 dark:text-neutral-200"
                href="#"
              >
                Duy An
              </a>
            </div>
            <div className="hidden max-md:block hover:cursor-pointer ">
              <RiMenu5Fill
                size={30}
                className="hover:text-sky-500 text-black"
                onClick={() => setOpenMenuMobile(!openMenuMobile)}
              />
            </div>
            <ul className="flex gap-5 max-md:hidden">
              <li>
                <a
                  href="#home"
                  className="text-lg text-black font-bold hover:text-sky-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg text-black font-bold hover:text-sky-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="text-lg text-black font-bold hover:text-sky-500"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg text-black font-bold hover:text-sky-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={
          'bg-white w-screen h-screen fixed top-0 z-50 modal-mobile ' +
          (openMenuMobile ? 'left-0' : 'left-[-110%]')
        }
      >
        <ul className="w-full h-full flex flex-col gap-10 items-center justify-center">
          <li>
            <a
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
              className="text-[26px] text-black"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
              className="text-[26px] text-black"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
              className="text-[26px] text-black"
              href="#project"
            >
              Project
            </a>
          </li>
          <li>
            <a
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
              className="text-[26px] text-black"
              href="#contact"
            >
              Contect
            </a>
          </li>
        </ul>
        <IoCloseSharp
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
          className="absolute right-10 top-5 hover:cursor-pointer hover:text-sky-500"
          size={40}
        />
      </div>
    </>
  );
}

export default Navbar;
