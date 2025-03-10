'use client'
import { motion, AnimatePresence } from 'motion/react'

const Home = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateX: 100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: 150, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="flex flex-col items-end px-30 py-16 space-y-12">
            <div>
              <p className="font-bold italic text-6xl/16 w-4xl text-right">
                I'm a currently a DLSU student studying BS Computer Science
                Major in Software Tech and a Senior Front End Engineer at La
                Salle Computer Society
              </p>
            </div>
            <div className="space-x-6">
              <button className="text-2xl border-2 py-2 px-4 rounded-xl border-[#e93a3c] text-[#e93a3c] hover:bg-[#e93a3c] hover:text-white duration-200 transition ease-in-out">
                Contact Me
              </button>
              <button
                className="text-2xl border-2 py-2 px-4 rounded-xl border-[#e93a3c] text-[#e93a3c] hover:bg-[#e93a3c] hover:text-white duration-200 transition ease-in-out"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                View Resume
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Home
