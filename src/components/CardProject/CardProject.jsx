import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

function CardProject({
  direction = 'left',
  src,
  title,
  content,
  technicalTags,
  githubLink,
  demoLink
}) {
  return (
    <div
      className={`flex  ${
        direction === 'right' && 'flex-row-reverse'
      } bg-white px-4 py-4 rounded-3xl shadow-lg mb-20 max-h-[400px] max-md:flex-wrap max-md:max-h-none`}
    >
      <div className="w-[50%] overflow-hidden rounded-3xl max-md:w-full max-md:h-[300px]">
        <a target="_blank" href={demoLink}>
          <img className="animation-scroll" src={src} alt="img-project" />
        </a>
      </div>
      <div className="flex-1 text-center mx-20 my-10 max-md:w-full max-md:mx-0">
        <h4 className="text-[18px] font-bold text-[#2d2e32] uppercase mb-3">
          {title}
        </h4>
        <p className="text-[18px] text-[#767676] mb-4">{content}</p>
        <div className="flex gap-2 justify-center w-full mb-10">
          {technicalTags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-2 bg-white drop-shadow-lg font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-10 justify-center ">
          <div className="flex gap-1 items-center hover:text-sky-400">
            <a
              href={githubLink}
              className="text-[18px] text-[#2d2e32] hover:text-sky-400"
            >
              Code
            </a>
            <AiOutlineGithub size={30} />
          </div>
          <div className="flex gap-1 items-center hover:text-sky-400">
            <a
              href={demoLink}
              className="text-[18px] text-[#2d2e32] hover:text-sky-400"
            >
              Live Demo
            </a>
            <FiExternalLink size={26} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
