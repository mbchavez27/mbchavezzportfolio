import { useEffect, useState } from 'react'

import Drawer from '../drawer/drawer'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsHidden(false)
    } else {
      const timer = setTimeout(() => setIsHidden(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <>
      <div className="p-12 absolute z-10">
        <div className="text-[#BFBFBF] flex items-center space-x-4">
          <Link to="/" className="font-bold text-5xl">
            @mbchavezz
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            className={`size-8 transition duration-200 translate-y-1.5 ease-in-out ${
              isOpen ? 'rotate-180' : 'rotate-0'
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
          className={`px-16 transition duration-75 ease-in-out opacity-0
                      ${
                        isOpen
                          ? 'translate-y-[50px] opacity-100'
                          : 'translate-y-[0px] opacity-0'
                      }
                              ${isHidden ? 'hidden' : 'block'}
          `}
        >
          <Drawer></Drawer>
        </div>
      </div>
    </>
  )
}
