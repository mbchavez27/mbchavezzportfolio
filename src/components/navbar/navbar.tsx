import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname == '/navbar') setIsOpen(true)
    else setIsOpen(false)
  }, [location.pathname])

  return (
    <>
      <div className="p-12 absolute z-10">
        <div className="text-[#BFBFBF] flex items-center space-x-4">
          <Link to="/" className="font-bold text-5xl">
            @mbchavezz
          </Link>
          <Link to="/navbar">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-8 transition duration-200 translate-y-1.5 ease-in-out cursor-pointer`}
              animate={{ rotate: isOpen ? '180deg' : '0deg' }}
              transition={{ duration: 0.1 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </motion.svg>
          </Link>
        </div>
      </div>
    </>
  )
}
