import { use, useEffect, useState } from "react";

import Drawer from "../drawer/drawer";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsHidden(false);
    } else {
      const timer = setTimeout(() => setIsHidden(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      <div>
        <div className="text-[#BFBFBF] flex items-center space-x-4">
          <h1 className=" font-bold text-5xl">@mbchavezz</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`size-8 transition duration-200 translate-y-1.5 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
        <div
          className={`px-16 py-6 transition duration-200 ease-in-out 
                      ${
                        isOpen
                          ? "translate-x-[10px] opacity-100"
                          : "translate-x-[0px] opacity-0"
                      }
                              ${isHidden ? "hidden" : "block"}
          `}
        >
          <Drawer></Drawer>
        </div>
      </div>
    </>
  );
}
