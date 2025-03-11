'use client'
import { AnimatePresence, motion } from 'motion/react'
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiC,
  SiMysql,
  SiReact,
} from 'react-icons/si'
import { FaJava, FaNode } from 'react-icons/fa'
import { IoLogoFigma } from 'react-icons/io5'
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri'
import { DiMongodb } from 'react-icons/di'

const Skills = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateX: -200, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: -250, opacity: 0 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="py-3">
            <h1 className="font-bold text-3xl">Programming Languages</h1>
            <div className="p-6 space-x-3 flex">
              <SiTypescript className="size-10"></SiTypescript>
              <SiJavascript className="size-10"></SiJavascript>
              <SiPython className="size-10"></SiPython>
              <SiC className="size-10"></SiC>
              <FaJava className="size-10"></FaJava>
            </div>
          </div>
          <div className="py-3">
            <h1 className="font-bold text-3xl">Frameworks and Tools</h1>
            <div className="p-6 space-x-3 flex">
              <SiReact className="size-10"></SiReact>
              <RiNextjsFill className="size-10"></RiNextjsFill>
              <FaNode className="size-10"></FaNode>
            </div>
          </div>
          <div className="py-3">
            <h1 className="font-bold text-3xl">Design Tools</h1>
            <div className="p-6 space-x-3 flex">
              <IoLogoFigma className="size-10" />
              <RiTailwindCssFill className="size-10"></RiTailwindCssFill>
            </div>
          </div>
          <div className="py-3">
            <h1 className="font-bold text-3xl">Database</h1>
            <div className="p-6 space-x-3 flex">
              <SiMysql className="size-10" />
              <DiMongodb className="size-10"></DiMongodb>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Skills
