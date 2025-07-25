"use client";


import React,{useContext} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const TimeDisplay = () => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return <div className="flex justify-end text-sm text-gray-300">{time}</div>;
};

const Navbar = () => {
  const pathname = usePathname();
 
  return (
    <nav>
      <div className="flex mx-auto justify-around items-center flex-row text-white">
        
        <Link
          href="/"
          className="siteName font-bold text-4xl flex items-end gap-3 mobile:text-lg tablet:text-lg mobile:gap-0 tablet:gap-0"
        >
          <Image
            src="/Group 48.png"
            alt="Logo"
            width={48}
            height={48}
            className="tablet:w-12"
          />
          <div className="flex flex-col tablet:text-sm">
            WeatherMe
            <TimeDisplay />
          </div>
        </Link>

        <div className="rightPanel">
          <ul className="flex gap-10 mx-1 mobile:gap-2 tablet:gap-4 text-2xl mobile:text-[10px] tablet:text-sm">
            {/* Today Link */}
            <li>
              <Link
                href="/"
                className={`relative group inline-block cursor-pointer ${
                  pathname === "/" ? "font-bold" : "hover:font-bold"
                }`}
              >
                Today
                <span
                  className={`absolute left-0 -bottom-3 w-full h-[4px] bg-white opacity-75 transition-transform origin-left ${
                    pathname === "/"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </li>

            {/* Tomorrow Link */}
            <li>
              <Link
                href="/tommorow"
                className={`relative group inline-block cursor-pointer ${
                  pathname === "/tommorow" ? "font-bold" : "hover:font-bold"
                }`}
              >
                Tomorrow
                <span
                  className={`absolute left-0 -bottom-3 w-full h-[4px] bg-white opacity-75 transition-transform origin-left ${
                    pathname === "/tommorow"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
