"use client";
import { useState } from "react";
import Logo from "./logo";
import Link from "next/link";

export default function MobileHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="flex fixed right-0 left-0  items-center justify-between border-b border-gray-400 py-8  backdrop-blur-sm ">
      <a href="/">
        <Logo />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden mr-5">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/" className="mr-4" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/Price" className="mr-4" onClick={closeMenu}>
                  Pricing
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/Courses" className="mr-4" onClick={closeMenu}>
                  Courses
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/About" className="mx-2" onClick={closeMenu}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: flex;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
