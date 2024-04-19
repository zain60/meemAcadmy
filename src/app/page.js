"use client";
import React from "react";
import Typed from "typed.js";
import Image from "next/image";
import Reviews from "../Components/Home/Reviews";
import Tutors from "../Components/Home/Tutors";
import CustomButton from "../Components/Button/CustomButton";
import { useRef, useEffect } from "react";

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Empowering Minds", "Nurturing Knowledge"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(textRef.current, options);
    ``;
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-40  sm:mt-5  md:flex-row  md:p-10  md:mt-32">
        <h1 className="font-ReemKufiFun mt-20">
          <span
            ref={textRef}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl ml-6 items-center font-extrabold justify-center  w-1/2 md:mx-12"
          ></span>
          <br />
          <span className="text-YellowBlack ml-14 mt-2 text-2xl lg:text-4xl font-bold">
            with Online Tutors! <br />
          </span>
          <div className="font-sans font-semibold sm:text-2xl md:px-2 md:pr-16 lg:pr-12 lg:text-4xl text-xl pt-6 px-4  items-center justify-center ">
            Transforming the educational landscape one personalized learning
            experience at a time.
          </div>
          <div className="mt-5 pl-20 sm:mt-4">
            <CustomButton name="Book A Free Demo" refrence="/BookDemo" />
          </div>
        </h1>
        <div className=" flex flex-row pt-4 md:pr-8 lg:pr-10 xl:pr-14    m-5 sm:m-2  sm:justify-center sm:pt-5">
          <img
            src="/Assets/T.png"
            alt="images"
            height="100"
            width="350"
            className="rounded-t-full w-32 h-auto sm:w-52 md:w-28 lg:w-40 xl:w-52 2xl:w-64 rounded-tr-none  border border-Yellow"
          />
          <img
            src="/Assets/child1.jpg"
            alt="images"
            height="100"
            width="350"
            className="rounded-b-full w-32  h-auto sm:w-52 md:w-28 lg:w-40 xl:w-52 2xl:w-64   rounded-bl-none border border-redLight "
          />
        </div>
      </div>
      <Tutors />
      <Reviews />
    </div>
  );
};

export default Home;
