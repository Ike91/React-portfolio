import React from "react";
import { useState } from "react";
import Popup from "../partials/Popup";
import { FaEye } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function Education() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="Work">
      <div className=" p-4 sm:ml-64 sm:mr-40">
        <ol className="relative border-l border-gray-700 dark:border-gray-700">
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-800">
              <svg
                className="w-2.5 h-2.5 text-yellow-300 dark:text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 text-white dark:text-white">
              Bachelor of Science in Mathematics and Computer Sciences
              <h4 className="mb-1 text-sm font-semibold text-yellow-400 dark:text-yellow-400">
                University of Johannesburg
              </h4>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2019-Present
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
              I am a final-year student with a strong foundation in programming
              and a passion for software development. I am eager to join a
              prestigious graduate program to further advance my skills and
              knowledge. My goal is to contribute to the field by staying
              updated with the latest technologies and collaborating with
              industry professionals to create innovative software solutions.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-800">
              <svg
                className="w-2.5 h-2.5 text-yellow-300 dark:text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center text-lg text-white font-semibold text-gray-900 dark:text-white leading-8">
              Certificates
            </h3>
            <h4 className="flex items-center  -mt-4 text-sm font-semibold text-yellow-400 dark:text-yellow-400 leading-8">
              udemy
            </h4>

            <time className="block -mt-2 text-sm font-normal text-gray-400 dark:text-gray-500 leading-8">
              24 July 2023
            </time>
            <ul class="list-disc text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
              <li className="text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
                <p>
                  Completed 66 hours of complete web development fundamentals
                  bootcamp.
                </p>
              </li>
              <button
                type="button"
                onClick={togglePopup}
                class="text-white bg-yellow-400 border hover:bg-gray-800 w-10px rounded-md hover:bg-[#24242e] sm:w-auto focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-[#24242e] focus:outline-none dark:focus:ring-yellow-800 block"
              >
                <div className="flex items-center text-center text-white">
                  <span>
                    <FaEye className="text-white mr-1 dark:text-white hover:text-yellow-400 " />
                  </span>
                  Certificate
                </div>
              </button>
            </ul>

            {showPopup && (
              <Popup
                imageUrl="https://udemy-certificate.s3.amazonaws.com/image/UC-2787e895-0f50-43a4-8b93-7476cf30a619.jpg"
                onClose={togglePopup}
              />
            )}
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-800">
              <svg
                className="w-2.5 h-2.5 text-yellow-300 dark:text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center text-lg text-white font-semibold text-gray-900 dark:text-white leading-8">
              High School
            </h3>
            <h4 className="flex items-center -mt-4 text-sm font-semibold text-yellow-400 dark:text-yellow-400 leading-8">
              Matseliso Secondary School
            </h4>

            <time className="block -mt-2 text-sm font-normal text-gray-400 dark:text-gray-500 leading-8">
              2015-2017
            </time>
          </li>
          <li class="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-800">
              <svg
                className="w-2.5 h-2.5 text-yellow-300 dark:text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg text-white font-semibold text-gray-900 dark:text-white leading-8">
              Kutlwanong | Centre for Maths, Science and Technology
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2015-2017
            </time>
            <ul class="list-disc text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
              <li className="text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
                <p>
                  Engaged in a comprehensive program at the Kutlwannong Center
                  for Maths, Sciences, and Technology, which aimed to enhance
                  knowledge and skills in STEM subjects.
                </p>
              </li>
              <li>
                <p>
                  Participated in interactive workshops, seminars, and practical
                  activities focused on mathematics, sciences, and technology.
                </p>
              </li>
              <li className="text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
                <p>
                  Received specialized instruction and guidance from experienced
                  educators and professionals in the field.
                </p>
              </li>
              <li className="text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
                <p>
                  Gained a deep understanding of the fundamental concepts and
                  applications in mathematics, sciences.
                </p>
              </li>
              <a
                href="https://www.kutlwanong.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  class="text-white bg-yellow-400 border hover:bg-gray-800 w-10px rounded-md hover:bg-[#24242e] sm:w-auto focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-[#24242e] focus:outline-none dark:focus:ring-yellow-800 block"
                >
                  <div className="flex items-center text-center text-white">
                    <span>
                      <IoIosArrowForward className="text-white mr-1 dark:text-white hover:text-yellow-400 " />
                    </span>
                    Read More
                  </div>
                </button>
              </a>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Education;
