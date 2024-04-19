import React from "react";
import Data from "../../Data/tutorData.json";

function Tutors() {
  return (
    <div>
      <section>
        <div className=" sm:mt-14 max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <h2 className=" flex  font-extrabold lg:text-6xl text-redLight   sm:text-3xl items-center justify-center">
            100 + &nbsp;
            <span className="text-YellowBlack">
              &nbsp; Experienced Tutors &nbsp;
            </span>
          </h2>
          <ul className=" grid gap-16 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {Data.map((data, i) => (
              <li key={i}>
                <a href="#" className="block overflow-hidden group">
                  <img
                    src={data.imageSource}
                    alt=""
                    className=" rounded-2xl  h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Tutors;
