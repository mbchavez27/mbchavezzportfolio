'use client'
import { motion, AnimatePresence } from 'motion/react'

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateX: 100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: 150, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="absolute right-0">
            <div className="flex flex-col items-end px-20 py-12 text-4xl font-bold italic space-y-6">
              <h1 className="hover:text-[#e93a3c] transition duration-200">
                LSCS Links
              </h1>
              <h1 className="hover:text-[#e93a3c] transition duration-200">
                LSCS Tomo
              </h1>
              <h1 className="hover:text-[#e93a3c] transition duration-200">
                Flare Mobile App
              </h1>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {children}
    </>
  )
}
