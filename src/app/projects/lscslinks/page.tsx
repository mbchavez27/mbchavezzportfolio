'use client'
import { motion, AnimatePresence } from 'motion/react'

const Project = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateX: -200, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: -250, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="p-16">
            <div className="flex flex-col space-y-6">
              <h1 className="font-bold text-6xl">LSCS Links</h1>
              <p className="text-4xl w-1/2">
                A web application designed for LSCS members to seamlessly claim
                their exclusive coffee promos in partnership with Tomo Coffee.
              </p>
              <p className="text-xl">
                <span className="font-bold">Technologies used: </span>React,
                Typescript, Tailwind, Shadcn
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Project
