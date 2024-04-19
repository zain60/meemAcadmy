import React from "react";
import GeneralHeader from "./GeneralHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div>
      <div className="hidden md:block ">
        <GeneralHeader />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
