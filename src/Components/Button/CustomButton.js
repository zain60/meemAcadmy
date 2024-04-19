import React from "react";
import Link from "next/link";

const CustomButton = ({ name, refrence }) => {
  return (
    <div>
      <Link
        href={refrence}
        className="group inline-block rounded-lg bg-gradient-to-r from-redLight via-YellowBlack to-redLight  p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      >
        <span className=" cursor-pointer border font-semibold font-ReemKufiFun  p-5 block rounded-lg px-8 py-3 text-sm  group-hover:bg-transparent">
          {name}
        </span>
      </Link>
    </div>
  );
};

export default CustomButton;
