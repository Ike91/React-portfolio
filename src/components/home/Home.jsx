import React from 'react'
import { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDownload,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { VscRequestChanges } from 'react-icons/vsc'

import resume from '../../documents/Isaac.pdf'

function Home() {
  const [text, setText] = useState('')
  const fullText = 'ISAAC MHLANGA'

  const full =
    'I am a final-year student with a strong foundation in programming and a passion for software development. I am eager to join a prestigious graduate program to further advance my skills and knowledge. My goal is to contribute to the field by staying updated with the latest technologies and collaborating with industry professionals to create innovative software solutions.'

  useEffect(() => {
    let currentText = ''
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      currentText += fullText[currentIndex]
      setText(currentText)
      currentIndex++

      if (currentIndex === fullText.length) {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => {
      clearInterval(typingInterval)
    }
  }, [])

  //download resume
  const handleDownload = () => {
    window.open(resume, '_blank')
  }

  //form handle
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    emailjs
      .sendForm(
        'service_4tjo1vo',
        'template_7lbqy3k',
        e.target,
        'rHCgkfO85NHZSmgMn'
      )
      .then(
        (result) => {
          setIsFormSubmitted(true)
          toast.success('Transcript requested', { autoClose: 3000 })
          e.target.reset()
        },
        (error) => {
          isFormSubmitted(false)
          toast.error('Message sending failed!', { autoClose: 3000 })
          e.target.reset()
        }
      )
    setIsOpen(false)
  }

  return (
    <div className="p-4 sm:ml-64 sm:h-screen sm:mr-35 pb-5">
      <div className="header mt-5 p-4 bg-[#24242e]">
        <div className="row">
          <div className="col-md-4 md:p-5 flex justify-center items-center my-4">
            <img
              src="../images/ike.png"
              alt=""
              className="border border-gray-600 dark:border-gray-600"
            />
          </div>

          <div className="col-md-8">
            <div className="Header-text mt-5 text-yellow-400 mb-3">{text}</div>
            <div className="mt-1 text-white mb-2">
              <h2 className="student-text">
                University Of Johannesburg student
              </h2>
            </div>
            <div class="random-text leading-8 text-gray-500 mb-4 dark:text-gray-400">
              {full}
            </div>

            <div className="flex items-center space-x-3 mb-3 mt-3 justify-center sm:justify-start">
              <div className="rounded-full p-2 border border-gray-800 text-gray-500">
                <a
                  href="https://www.linkedin.com/in/isaac-mhlanga-31ba62217"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={20}
                    className="text-gray-400 hover:text-yellow-400"
                  />
                </a>
              </div>
              <div className="rounded-full p-2 border text-gray-500">
                <a
                  href="https://www.facebook.com/profile.php?id=100072606405818"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={20}
                    className="text-gray-400  hover:text-yellow-400"
                  />
                </a>
              </div>
              <div className="rounded-full p-2 text-gray-500 border ">
                <a
                  href="https://www.instagram.com/_isac_i"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={20}
                    className="text-gray-400  hover:text-yellow-400"
                  />
                </a>
              </div>
              <div className="rounded-full p-2 text-gray-500 border">
                <a
                  href="https://twitter.com/_Isaac_ike1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    size={20}
                    className="text-gray-400  hover:text-yellow-400"
                  />
                </a>
              </div>
              <div className="rounded-full p-2 text-gray-500 border">
                <a
                  href="https://github.com/Ike91"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub
                    size={20}
                    className="text-gray-400  hover:text-yellow-400"
                  />
                </a>
              </div>
            </div>

            <div className="button-container mt-4">
              <button
                type="button"
                onClick={handleDownload}
                class="text-white bg-yellow-400  hover:bg-[#24242e] focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-4 dark:bg-yellow-600 dark:hover:bg-[#24242e] focus:outline-none dark:focus:ring-yellow-800 block"
              >
                <div className="flex items-center  text-white">
                  <span>
                    <FaDownload
                      size={20}
                      className="text-white mr-1 dark:text-white hover:text-yellow-400 "
                    />
                  </span>
                  Resume
                </div>
              </button>
              <button
                type="button"
                onClick={togglePopup}
                class="text-white bg-yellow-400  hover:bg-[#24242e] focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-4 dark:bg-yellow-600 dark:hover:bg-[#24242e] focus:outline-none dark:focus:ring-yellow-800 block"
              >
                <div className="flex items-center  text-white">
                  <span>
                    <VscRequestChanges
                      size={24}
                      className="text-white mr-1 dark:text-white hover:text-yellow-400 "
                    />
                  </span>
                  Transcript
                </div>
              </button>
            </div>

            <ToastContainer />
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#24242e]  bg-opacity-50">
                <div className="popupform bg-[#24242e] p-6 rounded-lg shadow-md">
                  <button
                    type="button"
                    onClick={togglePopup}
                    className="absolute top-0 right-0 p-2 text-white hover:text-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Request Academic Transcript
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-500 dark:text-gray-400 font-medium mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-500 dark:text-gray-400 font-medium mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Your email"
                        required
                      />
                      <input
                        type="hidden"
                        id="message"
                        name="message"
                        value="Requesting Academic Transcript"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Your email"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      <div className="flex items-center  text-white">
                        <span>
                          <VscRequestChanges
                            size={24}
                            className="text-white mr-1 dark:text-white hover:text-yellow-400 "
                          />
                        </span>
                        Request
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
