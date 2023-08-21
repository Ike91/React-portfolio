import React from 'react'
import { useState } from 'react'
import {
  FaReact,
  FaGithub,
  FaVuejs,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { BiLogoTailwindCss, BiLogoCss3 } from 'react-icons/bi'

const icons = {
  FaReact: FaReact,
  FaVuejs: FaVuejs,
  FaNodeJs: FaNodeJs,
  SiTailwindcss: SiTailwindcss,
  BiLogoTailwindCss: BiLogoTailwindCss,
  FaBootstrap: FaBootstrap,
  BiLogoCss3: BiLogoCss3,
}

function Projects(props) {
  const [expanded, setExpanded] = useState(false)
  const {
    projectName,
    projectDescription,
    languageIcons,
    githubLink,
    liveLink,
    imageLink,
  } = props

  const toggleExpansion = () => {
    setExpanded(!expanded)
  }
  const trimmedDescription = projectDescription
    .split(' ')
    .slice(0, 38)
    .join(' ')

  return (
    <div className="col-md-4 my-2">
      <div className="bg-[#24242e] card shadow-md">
        <div className="p-2 mb-4 ">
          <img src={imageLink} alt={projectName} className="w-full" />

          <h1 className="text-3xl mt-3 ml-2 text-white">{projectName}</h1>
          <p className="m-2 text-gray-400">
            {expanded ? projectDescription : trimmedDescription}
          </p>
          {projectDescription.split(' ').length > 38 && (
            <button onClick={toggleExpansion} className="text-yellow-500 ml-2">
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          )}
          <div className=" flex flex-col md:flex-row m-2">
            <div className="flex">
              {languageIcons.map(({ icon, iconName }) => {
                const IconComponent = icons[icon] // Get the icon component dynamically

                return (
                  <p className="flex mt-2 text-btn text-gray-700" key={icon}>
                    <span>
                      <IconComponent className="text-gray-700 mr-2" size={24} />
                    </span>
                    <span className="mr-2">{iconName}</span>
                  </p>
                )
              })}
            </div>
          </div>

          <div className="card-actions -mb-5 mr-4">
            <div className="button-container m-2 space-x-2">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  onClick=""
                  className="text-white bg-yellow-400 sm:mr-2  hover:bg-[#24242e] w-full sm:w-auto focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-[#24242e] focus:outline-none dark:focus:ring-yellow-800 block"
                >
                  <div className="flex items-center text-center text-white">
                    <span>
                      <FaGithub className="text-white mr-1 dark:text-white hover:text-yellow-400 " />
                    </span>
                    GitHub
                  </div>
                </button>
              </a>
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="text-white bg-yellow-400 hover:bg-[#24242e] w-full sm:w-auto focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-[#24242e] focus:outline-none dark:focus:ring-yellow-800 block"
                  >
                    <div className="flex items-center text-center text-white">
                      <span>
                        <FaGithub className="text-white mr-1 dark:text-white hover:text-yellow-400" />
                      </span>
                      Live
                    </div>
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
