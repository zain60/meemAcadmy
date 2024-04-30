import React from "react";
import Team from "./Team";
import pageData from "../../Data/AboutUs.json";

const Page = () => {
  const { aboutUs, ourStory, teamMembers } = pageData;

  return (
    <div className="pt-36 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            {aboutUs.title}
          </h1>
          <p className="font-normal text-base lg:text-2xl leading-6 text-gray-600 ">
            {aboutUs.content}
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src={aboutUs.image}
            alt={aboutUs.imageAlt}
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold leading-9 text-gray-800 pb-4">
            {ourStory.title}
          </h1>
          <p className="font-normal text-base lg:text-2xl leading-6 text-gray-600 ">
            {ourStory.content}
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-4 pb-6 flex justify-center flex-col items-center"
              >
                <img
                  className="md:block hidden"
                  src={member.image}
                  alt={member.imageAlt}
                />
                <img
                  className="md:hidden block"
                  src={member.image}
                  alt={member.imageAlt}
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Team />
    </div>
  );
};

export default Page;
