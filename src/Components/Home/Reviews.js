import React from "react";
import StarReveiws from "./StarReveiws";
import reviewsData from "../../Data/reviewsData.json";

function Reviews() {
  return (
    <section className="bg-gray-80 ">
      <h2 className=" sm:mx-8 mt-32 flex md:text-4xl  font-extrabold lg:text-4xl  text-YellowBlack sm:text-2xl items-center justify-center">
        Read
        <span className=" text-redLight sm:whitespace-nowrap md:text-3xl lg:text-5xl">
          &nbsp; Students and Parents &nbsp;
        </span>
        <span className="md:text-2xl lg:text-3xl">Reveiew's About us </span>
      </h2>
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {reviewsData.map((review, index) => (
            <blockquote
              key={index}
              className=" bg-YellowBlack  rounded-lg flex h-full flex-col justify-betwee p-6 shadow-sm sm:p-8"
            >
              <div>
                <StarReveiws />
                <div className="mt-4">
                  <p className="text-redLight text-2xl font-bold sm:text-3xl">
                    {review.title}
                  </p>
                  <p className="mt-4 leading-relaxed  text-black">
                    {review.content}
                  </p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
