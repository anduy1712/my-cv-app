import { CardProject, Navbar } from 'components';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { BsMailbox } from 'react-icons/bs';

import React from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'CAR RENTAL 🚗',
    direction: 'left',
    technicalTags: ['React', 'SCSS'],
    content:
      'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
    githubLink: '/',
    demolink: '/',
    src: 'https://stefantopalovicdev.vercel.app/static/media/coindom-full.c5fef9ca2f47e52897f8.png'
  },
  {
    id: 2,
    title: 'CAR RENTAL 🚗',
    direction: 'right',
    technicalTags: ['React', 'SCSS'],
    content:
      'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
    githubLink: '/',
    demolink: '/',
    src: 'https://stefantopalovicdev.vercel.app/static/media/coindom-full.c5fef9ca2f47e52897f8.png'
  }
];

function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      {/* BODY */}
      <section className="bg-[#f9f9f9]">
        {/* CONTENT */}
        <section
          id="home"
          className="container w-[1030px] h-[calc(100vh-76px)] max-md:w-full max-md:h-[calc(100%-104px)] max-md:py-10 max-md:px-4"
        >
          <div className="flex flex-col justify-center h-full">
            <div className="flex max-md:items-center max-md:flex-wrap max-md:flex-col-reverse justify-between mb-6">
              <div className="w-1/2 max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
                <h2 className="text-[55px] font-bold leading-[58px] mb-4 text-[#2d2e32] max-md:text-center max-sm:text-[36px] max-sm:leading-[40px]">
                  Front-End React Developer 👋
                </h2>
                <p className="text-lg text-[#767676] mb-8 max-md:text-center max-md:max-w-[450px]">
                  Hi, I'm Duy An. A passionate Front-end React Developer based
                  in HCM, Vietnam. 📍
                </p>
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com/in/anduy1712">
                    <AiFillLinkedin
                      className="hover:text-sky-500 hover:cursor-pointer"
                      size={34}
                    />
                  </a>
                  <a href="https://github.com/anduy1712">
                    <AiOutlineGithub
                      className="hover:text-sky-500 hover:cursor-pointer"
                      size={34}
                    />
                  </a>
                </div>
              </div>
              <div className="w-[350px] h-[350px] max-md:mb-8 max-sm:w-[250px] max-sm:h-[250px]">
                <div className="hero-img"></div>
              </div>
            </div>
            <div className="flex max-md:flex-col items-center">
              <span className="text-[18px] text-[#2d2e32] font-bold mr-10 border-r-2 border-black pr-8 max-md:mr-0 max-md:border-0 max-md:pr-0 max-md:mb-4 max-md:border-b max-md:pb-2">
                Tech Stack
              </span>
              <div className="flex max-sm:flex-wrap max-sm:justify-center gap-4">
                <div className="w-[65px] max-sm:w-[60px] max-sm:h-[60px] h-[65px] rounded-[50%] bg-white drop-shadow-md flex items-center justify-center">
                  <img
                    className="w-[40px] max-sm:w-[30px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                    alt="html5"
                  />
                </div>
                <div className="w-[65px] max-sm:w-[60px] max-sm:h-[60px] h-[65px] rounded-[50%] bg-white drop-shadow-md flex items-center justify-center">
                  <img
                    className="w-[30px] max-sm:w-[25px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                    alt="css"
                  />
                </div>
                <div className="w-[65px] max-sm:w-[60px] max-sm:h-[60px] h-[65px] rounded-[50%] bg-white drop-shadow-md flex items-center justify-center">
                  <img
                    className="w-[40px] max-sm:w-[30px]"
                    src="https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png?fit=500%2C500&ssl=1"
                    alt="js"
                  />
                </div>
                <div className="w-[65px] max-sm:w-[60px] max-sm:h-[60px] h-[65px] rounded-[50%] bg-white drop-shadow-md flex items-center justify-center">
                  <img
                    className="w-[40px] max-sm:w-[30px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt="react"
                  />
                </div>
                <div className="w-[65px] max-sm:w-[60px] max-sm:h-[60px] h-[65px] rounded-[50%] bg-white drop-shadow-md flex items-center justify-center">
                  <img
                    className="w-[40px] max-sm:w-[30px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
                    alt="tailwind"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT-ME */}
        <section id="about" className="bg-white">
          <div className="container w-[1030px] max-md:w-full">
            <div className="flex py-20 max-md:flex-wrap max-md:px-20 max-sm:px-4">
              <div className="w-1/2 max-md:w-full max-md:mb-4">
                <img
                  className="w-[410px] rounded-xl"
                  src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
                  alt="image-about-me"
                />
              </div>
              <div className="w-1/2 max-md:w-full">
                <span className="text-[#147efb] text-[18px] font-bold mb-2 block">
                  About me
                </span>
                <h3 className="text-[#2d2e32] text-[24px] font-bold mb-2">
                  A dedicated Front-end Developer based in HCM, Vietnam 📍
                </h3>
                <p className="text-[#767676] text-[18px] leading-7">
                  As a Middle Front-End Developer, I possess an impressive
                  arsenal of skills in HTML, CSS, JavaScript, React, Tailwind,
                  SCSS... . I excel in designing and maintaining responsive
                  websites that offer a smooth user experience. My expertise
                  lies in crafting dynamic, engaging interfaces through writing
                  clean and optimized code and utilizing cutting-edge
                  development tools and techniques. I am also a team player who
                  thrives in collaborating with cross-functional teams to
                  produce outstanding web applications.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* PROJECT */}
        <section
          id="project"
          className="container w-[1030px] max-md:w-full py-20 max-md:px-4 max-sm:py-4"
        >
          <span className="text-[#147efb] text-[18px] font-bold mb-2 block">
            PORTFOLIO
          </span>
          <h3 className="text-[#2d2e32] text-[24px] font-bold mb-10">
            Each project is a unique piece of development 🧩
          </h3>
          {PROJECTS.map((proj) => (
            <CardProject
              key={proj.id}
              title={proj.title}
              direction={proj.direction}
              content={proj.content}
              technicalTags={proj.technicalTags}
              githubLink={proj.githubLink}
              demoLink={proj.demolink}
              src={proj.src}
            />
          ))}
        </section>
        {/* CONTACT */}
        <section id="contact" className="bg-white">
          <div className="container w-[1030px] max-md:w-full py-20 max-md:px-10">
            <span className="text-[#147efb] text-[18px] font-bold mb-2 block">
              CONTACT
            </span>
            <h3 className="text-[#2d2e32] text-[24px] font-bold mb-10">
              Don't be shy! Hit me up! 👇
            </h3>
            <div className="flex gap-10 max-md:flex-wrap">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[80px] h-[80px] rounded-[50%] shadow-lg">
                  <FaMapMarkedAlt color="#147efb" size={30} />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold">Location</h4>
                  <p className="text-[18px] hover:text-[#147efb] text-[#767676]">
                    HCM, Vietnam
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[80px] h-[80px] rounded-[50%] shadow-lg">
                  <BsMailbox color="#147efb" size={30} />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold">Mail</h4>
                  <a
                    href="mailto:anduy1712@gmail.com"
                    className="text-[18px] hover:text-[#147efb] text-[#767676]"
                  >
                    anduy1712@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* FOOTER */}
      <footer className="bg-[#2d2e32]">
        <div className="container w-[1030px] max-md:w-full py-10 max-md:px-10">
          <div className="flex justify-between max-md:flex-wrap">
            <h3 className="text-white text-[18px] font-bold">
              Copyright © 2023. All rights are reserved
            </h3>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/in/anduy1712">
                <AiFillLinkedin
                  className="text-white hover:scale-110 transition-all"
                  size={28}
                />
              </a>
              <a href="https://github.com/anduy1712">
                <AiOutlineGithub
                  className="text-white hover:scale-110 transition-all"
                  size={28}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
