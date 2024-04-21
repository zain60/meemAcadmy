import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import CustomButton from "../Button/CustomButton";

const GeneralHeader = () => {
  return (
    <div className="w-full p-4 md:px-10 flex items-center justify-between bg-basic ">
      <Logo />
      <nav className="w-max py-3 px-4 border border-solid border-x-redLight border-YellowBlack rounded-full font-medium capitalize flex items-center fixed md:top-10 top-16 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm ">
        <Link href="/" className=" px-2">
          Home
        </Link>
        <Link href="/Price" className=" px-4">
          Pricing
        </Link>
        <Link href="/Courses" className="px-2">
          Courses
        </Link>
        <Link href="/About" className=" px-4">
          About Us
        </Link>
      </nav>
      <div className="invisible md:visible">
        <CustomButton name="Contact us" refrence="/Contact" />
      </div>
    </div>
  );
};

export default GeneralHeader;
