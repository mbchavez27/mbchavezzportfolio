import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/home'
import Projects from '../pages/projects'
import { AnimatePresence, motion } from 'framer-motion'
import Drawer from './drawer/drawer'
import Experiences from '@/pages/experiences'

export default function PageRouter() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <HorizontalAnimation>
                <Home></Home>
              </HorizontalAnimation>
            }
          ></Route>
          <Route
            path="/projects"
            element={
              <VerticalAnimation>
                <Projects></Projects>
              </VerticalAnimation>
            }
          ></Route>
          <Route
            path="/drawer"
            element={
              <VerticalAnimation>
                <Drawer></Drawer>
              </VerticalAnimation>
            }
          ></Route>
          <Route
            path="/experiences"
            element={
              <VerticalAnimation>
                <Experiences></Experiences>
              </VerticalAnimation>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

const HorizontalAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

const VerticalAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
