'use client'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
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
              <Link
                href="/projects/lscslinks"
                className={clsx(
                  pathname == '/projects/lscslinks' ? 'text-[#e93a3c]' : '',
                  'hover:text-[#e93a3c] transition duration-200'
                )}
              >
                LSCS Links
              </Link>
              <Link
                href="/projects/lscstomo"
                className={clsx(
                  pathname == '/projects/lscstomo' ? 'text-[#e93a3c]' : '',
                  'hover:text-[#e93a3c] transition duration-200'
                )}
              >
                LSCS Tomo
              </Link>
              <Link
                href="/projects/flare"
                className={clsx(
                  pathname == '/projects/flare' ? 'text-[#e93a3c]' : '',
                  'hover:text-[#e93a3c] transition duration-200'
                )}
              >
                Flare Mobile App
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {children}
    </>
  )
}
