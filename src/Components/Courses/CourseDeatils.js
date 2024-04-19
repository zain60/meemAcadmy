"use client";
import React, { useState } from "react";
import Data from "../../Data/corseData.json";
import DetailsCard from "./DetailsCard";

const CourseDetails = ({ courseDetails }) => {
  const projectCategories = [
    "Primary School",
    "Middle School",
    "High School",
    "Higher Secondary School",
  ];

  const [showCard, setShowCard] = useState("Primary School");

  const handleProject = (category) => {
    setShowCard(category);
  };

  const filteredDetails = courseDetails.Coursedetails.filter(
    (detail) => showCard === "Primary School" || showCard === detail.category
  );
  return (
    <>
      <section className="lg:pt-[px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full">
              <div className="mx-auto mb-[60px] text-center">
                <img
                  src={courseDetails.image}
                  alt="portfolio"
                  className="w-full object-fill mx-0"
                />
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent curriculum For
                </h2>
                <span className=" text-2xl font-semibold text-redLight">
                  {courseDetails.courseTitle}
                </span>
              </div>
            </div>
          </div>
          <div className=" pb-10 w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                {projectCategories.map((category) => (
                  <li className="mb-1" key={category}>
                    <button
                      onClick={() => handleProject(category)}
                      className={`  border-2 bg-YellowBlack inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === category
                          ? " border-2 bg-lime-600 activeClasses bg-primary text-white"
                          : "inactiveClasses text-body-color  hover:bg-primary hover:text-white"
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {filteredDetails.map((detail) => (
              <DetailsCard
                key={detail.category}
                category={detail.category}
                title={detail.title}
                showCard={showCard}
                overview={detail.overview}
                highlights={detail.highlights}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
