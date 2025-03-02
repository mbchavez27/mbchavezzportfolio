import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/home'
import Projects from '../pages/projects'
import { AnimatePresence, motion } from 'framer-motion'

export default function PageRouter() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home></Home>
              </PageWrapper>
            }
          ></Route>
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Projects></Projects>
              </PageWrapper>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
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
