import React from 'react';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full flex-wrap items-center justify-between bg-white py-6 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 max-md:px-10">
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
          <ul className="flex gap-5">
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
  );
}

export default Navbar;
