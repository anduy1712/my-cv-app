import { CardProject, Navbar } from 'components';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

import React from 'react';

function Home() {
  return (
    <div className="bg-[#f9f9f9]">
      <Navbar />
      <div className="container w-[1030px] h-[calc(100vh-76px)]">
        <div className="flex flex-col justify-center h-full">
          <div className="">
            <div className="flex justify-between mb-6">
              <div className="w-[500px]">
                <h2 className="text-[55px] font-bold leading-[58px] mb-4 text-[#2d2e32]">
                  Front-End React Developer 👋
                </h2>
                <p className="text-lg text-[#767676] mb-8">
                  Hi, I'm Stefan Topalovic. A passionate Front-end React
                  Developer based in Belgrade, Serbia. 📍
                </p>
                <div className="flex gap-2">
                  <AiFillLinkedin
                    className="hover:text-sky-500 hover:cursor-pointer"
                    size={34}
                  />
                  <AiOutlineGithub
                    className="hover:text-sky-500 hover:cursor-pointer"
                    size={34}
                  />
                </div>
              </div>
              <div className="w-[350px] h-[350px]">
                <div className="hero-img"></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-[18px] text-[#2d2e32] font-bold mr-10 border-r-2 border-black pr-8">
                Tech Stack
              </span>
              <div className="flex gap-4">
                <div className="w-[65px] h-[65px] rounded-[50%] bg-white drop-shadow-md flex items-center justify-center">
                  <img
                    className="w-[40px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                    alt="html5"
                  />
                </div>
                <div className="w-[65px] h-[65px] rounded-[50%] bg-white drop-shadow-md flex items-center justify-center">
                  <img
                    className="w-[30px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                    alt="css"
                  />
                </div>
                <div className="w-[65px] h-[65px] rounded-[50%] bg-white drop-shadow-md flex items-center justify-center">
                  <img
                    className="w-[40px]"
                    src="https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png?fit=500%2C500&ssl=1"
                    alt="js"
                  />
                </div>
                <div className="w-[65px] h-[65px] rounded-[50%] bg-white drop-shadow-md flex items-center justify-center">
                  <img
                    className="w-[40px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt="react"
                  />
                </div>
                <div className="w-[65px] h-[65px] rounded-[50%] bg-white drop-shadow-md flex items-center justify-center">
                  <img
                    className="w-[40px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
                    alt="tailwind"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container w-[1030px]">
          <div className="flex py-20">
            <div className="w-1/2">
              <img
                className="w-[410px] rounded-xl"
                src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
                alt="image-about-me"
              />
            </div>
            <div className="w-1/2">
              <span className="text-[#147efb] text-[18px] font-bold mb-2 block">
                About me
              </span>
              <h3 className="text-[#2d2e32] text-[24px] font-bold mb-2">
                A dedicated Front-end Developer based in Belgrade, Serbia 📍
              </h3>
              <p className="text-[#767676] text-[18px] leading-7">
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-[1030px] py-20">
        <span className="text-[#147efb] text-[18px] font-bold mb-2 block">
          PORTFOLIO
        </span>
        <h3 className="text-[#2d2e32] text-[24px] font-bold mb-10">
          A dedicated Front-end Developer based in Belgrade, Serbia 📍
        </h3>
        <CardProject
          title="CAR RENTAL 🚗"
          content="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
          technicalTags={['React', 'SCSS']}
          githubLink="/"
          demoLink="/"
          src="https://stefantopalovicdev.vercel.app/static/media/coindom-full.c5fef9ca2f47e52897f8.png"
        />
        <CardProject
          direction="right"
          title="COINDOM 🪙"
          content="Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
          technicalTags={['React', 'SCSS']}
          githubLink="/"
          demoLink="/"
          src="https://stefantopalovicdev.vercel.app/static/media/gymate-home.52d00d03c15713c601c4.webp"
        />
      </div>
    </div>
  );
}

export default Home;
