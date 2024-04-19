import React from "react";
import Email from "./Email";
import Social from "./Social";
import contactDetails from "../../Data/contact.json";

const Page = () => {
  return (
    <section className="flex items-center lg:h-screen font-poppins dark:bg-gray-800">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-11 md:px-6">
        <div className="mb-10 text-left">
          <h2 className="pb-2 mb-2 text-xl font-bold md:text-3xl dark:text-gray-300">
            Let's Stay Connected
          </h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 mb-11 lg:mb-0">
            <div className="flex flex-wrap">
              {contactDetails.map((detail, index) => (
                <div key={index} className="w-full px-4 mb-10 sm:w-1/2">
                  <div className="max-w-xs mx-auto">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-redLight rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={`bi ${detail.icon}`}
                        viewBox="0 0 16 16"
                      >
                        <path d={detail.iconPath} />
                      </svg>
                    </div>
                    <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
                      {detail.type}
                    </h2>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
                    >
                      {detail.address || detail.number}
                    </a>
                  </div>
                </div>
              ))}
              <div className="w-full px-4 sm:w-1/2">
                <Social />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <Email />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
