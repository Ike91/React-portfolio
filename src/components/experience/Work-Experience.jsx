import React from "react";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

function WorkExperience() {
  return (
    <div className="Work">
      <div className=" p-4 sm:ml-64 sm:mr-40">
        <ol className="relative border-l border-gray-700 dark:border-gray-800">
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
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">
              IT Technical Support (ICS)
            </h3>
            <h4 className="text-sm text-yellow-400 dark:text-yellow-400">
              University of Johannesburg
            </h4>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              08 March 2023 - Present
            </time>
            <h3 className="text-base font-xlg text-yellow-400 dark:text-yellow-400">
              Job Purpose:
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
              Provided support and assistance to users and Team Leaders to
              ensure the efficient and effective operation of the microcomputer
              laboratory service at UJ.
            </p>
            <h3 className="text-base font-lg text-yellow-400 dark:text-yellow-400">
              Key Performance Areas:
            </h3>
            <ul className="list-disc text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
              <li>
                <p>
                  <strong>Installations:</strong> Installed computer hardware,
                  ensuring compliance with supplier warranty.
                </p>
              </li>
              <li>
                <p>
                  Completed asset control forms to maintain an updated asset
                  register.
                </p>
              </li>
              <li>
                <p>
                  Installed computer software to cater to user requirements.
                </p>
              </li>
              <li>
                <p>
                  Configured desktop applications for optimal performance and
                  user satisfaction.
                </p>
              </li>
              <li>
                <p>
                  Installed and configured network printers in the laboratories,
                  ensuring smooth service for users.
                </p>
              </li>
              <li>
                <p>
                  Troubleshot and reported on faulty computer hardware, printers
                  and maintaining a high level of service.
                </p>
              </li>
              <li>
                <p>
                  Upgraded and reset software applications to ensure continuous
                  service availability.
                </p>
              </li>
            </ul>

            <ul className="list-disc text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
              <li>
                <p>
                  <strong>Access Controlling and Security:</strong> Controlled
                  access to and usage of computer laboratories.
                </p>
              </li>
              <li>
                <p>
                  Performed locking and unlocking procedures for laboratories,
                  ensuring security protocols were followed.
                </p>
              </li>
            </ul>

            <ul className="list-disc text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
              <li>
                <p>
                  <strong>Student Support:</strong> Provided desktop hardware
                  support to students, addressing their technical needs.
                </p>
              </li>
              <li>
                <p>
                  Assisted students with basic desktop software usage and
                  printing requirements.
                </p>
              </li>
              <li>
                <p>
                  Offered basic support on the Blackboard application to enhance
                  student experience.
                </p>
              </li>
            </ul>

            <h3 className="text-base mt-2  font-lg text-yellow-400 dark:text-yellow-400">
              References
            </h3>

            <ul className="list-disc text-base font-normal text-gray-500 dark:text-gray-400 leading-8">
              <strong>Mr. Rest Mabunda</strong> (Team Leader)
              <div className="flex items-center">
                <span className="">
                  <BsTelephoneFill className="mr-2" />
                </span>
                <span>0836226556 / 0115593472</span>
              </div>
              <div class="flex items-center">
                <MdEmail className="mr-2" />
                <span>rmabunda@uj.ac.za</span>
              </div>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default WorkExperience;
