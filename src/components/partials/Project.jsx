import React from 'react'
import {
  FaReact,
  FaGithub,
  FaVuejs,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { BiLogoTailwindCss, BiLogoCss3 } from 'react-icons/bi'
import { TbWorldWww } from 'react-icons/tb'

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
  const {
    projectName,
    projectDescription,
    languageIcons,
    githubLink,
    liveLink,
    imageLink,
  } = props

  return (
    <div className="col-md-12 my-2">
      <div class="container">
        <div class="row mt-5">
          <div class="preview-card">
            <div class="preview-card__wrp">
              <div class="preview-card__item">
                <div class="preview-card__img">
                  <img src={imageLink} alt={projectName} className="w-full" />
                </div>
                <div class="preview-card__content">
                  <div class="preview-card__title text-white dark:text-white">
                    {projectName}
                  </div>
                  <div className="border border-lg mb-3 p-5">
                    <p class="text-gray-500 dark:text-gray-400">
                      {projectDescription}
                    </p>
                  </div>

                  <div className="text-center sm:text-left -mt-4 mb-2">
                    <div className="flex justify-center sm:justify-start">
                      {languageIcons.map(({ icon, iconName }) => {
                        const IconComponent = icons[icon]

                        return (
                          <p
                            className="flex mt-2 text-btn text-gray-700"
                            key={icon}
                          >
                            <span>
                              <IconComponent
                                className="text-yellow-400 mr-2"
                                size={24}
                              />
                            </span>
                            <span className="mr-2">{iconName}</span>
                          </p>
                        )
                      })}
                    </div>
                  </div>
                  <div className="card-actions  mb-5 mr-4">
                    <div className="button-container m-2 space-x-2">
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="button"
                          onClick=""
                          className="preview-card__button text-white bg-yellow-400 sm:mr-3 sm:ml-3  hover:bg-[#24242e] w-full sm:w-auto focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-[#24242e] focus:outline-none dark:focus:ring-yellow-800 block"
                        >
                          <div className="flex items-center text-center text-white">
                            <span>
                              <FaGithub className="text-white mr-1 dark:text-white hover:text-yellow-400 " />
                            </span>
                            Code
                          </div>
                        </button>
                      </a>
                      {liveLink && (
                        <a
                          href={liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            type="button"
                            className="preview-card__button text-white bg-yellow-400 hover:bg-[#24242e] w-full sm:w-auto focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 sm:mr-3 sm:ml-3 dark:bg-yellow-600 dark:hover:bg-[#24242e] focus:outline-none dark:focus:ring-yellow-800 block"
                          >
                            <div className="flex items-center text-center text-white">
                              <span>
                                <TbWorldWww className="text-white mr-1 dark:text-white hover:text-yellow-400" />
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
