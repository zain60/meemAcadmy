import React from "react";
import Image from "next/image";

const logo = () => {
  return (
    <div className="md:visible ">
      <img
        src="/Assets/logo.png"
        alt="images"
        height="100"
        width="500"
        className=" w-32 h-auto md:w-44 "
      />
    </div>
  );
};

export default logo;
