import { Link } from 'react-router-dom'
export default function Drawer() {
  return (
    <>
      <div className="flex flex-col text-[#909090] opacity-50 border-l-2 border-[#909090] px-3 py-1 text-4xl space-y-6">
        <Link
          to="/projects"
          className="hover:translate-x-6 transition duration-200"
        >
          Projects
        </Link>
        <Link
          to="/experiences"
          className="hover:translate-x-6 transition duration-200"
        >
          Experinces
        </Link>
        <Link
          to="/about"
          className="hover:translate-x-6 transition duration-200"
        >
          About
        </Link>
      </div>
    </>
  )
}
