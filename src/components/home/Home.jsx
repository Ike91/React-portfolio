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
  FaGithub,
} from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { VscRequestChanges } from 'react-icons/vsc'

import resume from '../../documents/Isaac.pdf'

function Home() {
  const [text, setText] = useState('')
  const fullText = 'ISAAC IKE MHLANGA'

  const full =
    'I am a highly motivated and skilled final year student seeking admission into a prestigious software development graduate program. With a strong programming foundation and exceptional problem-solving abilities, I aim to advance software development practices using cutting-edge technologies. My track record of academic excellence and passion for learning will help me acquire comprehensive software engineering skills and industry best practices. I aspire to collaborate with professionals, driving innovation and delivering robust software solutions.'

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
              className="border border-gray-600 dark:border-gray-600"
              alt="Profile Picture"
            />
          </div>
          <div className="col-md-6 flex flex-col justify-center mb-5">
            <div className="flex items-center">
              <span>
                <BsCodeSlash size={60} className="text-yellow-400 mb-2 mr-1 " />
              </span>
              <h1 className="ml-2 text-gray-500 dark:text-gray-400">{text}</h1>
            </div>
            <h4 className="text-gray-500 dark:text-yellow-400 leading-8">
              University of johannesburg student
            </h4>
            <p className="leading-8 isaac text-gray-500 dark:text-gray-400 p-2">
              {full}
            </p>
            <div className="d-flex flex-wrap justify-content-start mt-2 mb-2 gap-4 flex-sm-nowrap flex-md-wrap flex-md-column gap-md-0">
              <div className="d-flex align-items-center text-gray-500">
                <span>
                  <FaPhone className="text-yellow-500 me-2 dark:text-yellow-500 hover:text-yellow-400" />
                </span>
                067 100 4050
              </div>
              <div className="d-flex align-items-center text-gray-500">
                <span>
                  <FaEnvelope className="text-yellow-500 me-2 dark:text-yellow-500 hover:text-yellow-400" />
                </span>
                isaac.mhlanga13@gmail.com
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-3 mt-3">
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

            <div className="flex space-x-4 mt-4">
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
                        value="Requesting Transcript"
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
