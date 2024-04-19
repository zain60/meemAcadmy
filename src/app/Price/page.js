import React from "react";
import Data from "../../Data/priceData.json";
import CustomButton from "../../Components/Button/CustomButton";

const page = () => {
  return (
    <section class="flex items-center pt-36 lg:h-screen font-poppins ">
      <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0 md:px-6">
        <h2 class="mb-4 text-3xl font-bold text-center text-gray-800 md:text-5xl ">
          Buy Plane and Top the Result
        </h2>

        <div class="flex flex-wrap justify-center pt-8 -mx-3">
          {Data.map((data, i) => (
            <div class="w-full px-3 mb-14 lg:px-2 md:w-1/2 lg:w-1/4 shadow-xl ">
              <div class="flex flex-col border-b-4  border-yellow-500 rounded-md s ">
                <div class="relative flex justify-center">
                  <div class="absolute top-0 z-10 flex items-center justify-center w-24 h-24 p-5 text-center bg-YellowBlack border-4 border-gray-200 rounded-full  -mt-11">
                    <span class="relative text-2xl font-medium text-gray-200 ">
                      ${data.planePrice}
                    </span>
                  </div>
                </div>
                <div class="flex justify-end w-full py-8  bg-yellowNew "></div>
                <h2 class="text-xl font-semibold tracking-wide py-1 text-center text-gray-200 bg-redLight lg:text-2xl ">
                  {data.planeTitle}
                </h2>
                <div class="self-center ">
                  <ul class="mt-4 ">
                    {Object.entries(data.planeFeatures).map(([key, value]) => (
                      <li
                        key={key}
                        className="flex items-center mb-3 font-medium  text-YellowBlack"
                      >
                        <a href="#" className="mr-2 text-redLight">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                          </svg>
                        </a>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="p-4 py-2 inline-block ml-5">
                  <CustomButton name={"Subscribe Now"} refrence={"/"} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
