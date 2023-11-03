import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4tjo1vo",
        "template_7lbqy3k",
        e.target,
        "rHCgkfO85NHZSmgMn"
      )
      .then(
        (result) => {
          setIsFormSubmitted(true);
          toast.success("Message sent!", { autoClose: 3000 });
          e.target.reset();
        },
        (error) => {
          isFormSubmitted(false);
          toast.error("Message sending failed!", { autoClose: 3000 });
          e.target.reset();
        }
      );
  };

  return (
    <div className="p-4 sm:ml-64 sm:h-screen sm:mr-35 pb-5">
      <div className="contact">
        <div className="row mb-5">
          <div className="col-md-4 my-2">
            <div className="card text-center p-4">
              <div className="card-title ">
                <div class="flex items-center justify-center">
                  <MdLocationOn class="w-6 h-6 mr-2 text-center text-yellow-400" />
                  <h4 class="text-gray-500 dark:text-gray-400 text-center font-medium">
                    Email
                  </h4>
                </div>
              </div>
              <div className="card-text">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  i.mhlanga@icloud.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card text-center p-4">
              <div className="card-title">
                <div class="flex items-center justify-center">
                  <BsFillTelephoneFill class="w-6 h-6 mr-2 text-yellow-400" />
                  <h4 class="text-gray-500 dark:text-gray-400 font-medium">
                    Phone
                  </h4>
                </div>
              </div>
              <div className="card-text">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  +27 67100 4050
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card text-center p-4">
              <div className="card-title">
                <div class="flex items-center justify-center">
                  <MdLocationOn class="w-6 h-6 mr-2 text-yellow-400" />
                  <h4 class="text-gray-500 dark:text-gray-400 font-medium">
                    Addres
                  </h4>
                </div>
              </div>
              <div className="card-text">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Randburg, Johannesburg
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        <form onSubmit={handleSubmit} class="mb-6">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-transparent border border-gray-300 text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Isaac Mhlanga"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="bg-transparent border border-gray-300 text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="i.mhlanga@icloud.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="bg-transparent border border-gray-300 text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="How can I help you"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-white bg-transparent border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-yellow-400 border hover:bg-gray-800 w-10px focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-yellow-800 block"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
