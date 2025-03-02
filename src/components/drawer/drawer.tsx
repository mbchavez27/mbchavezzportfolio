import { Link } from 'react-router-dom'

export default function Drawer() {
  return (
    <>
      <div className="px-10 py-40">
        <div className="text-5xl px-3 py-6">Menu</div>
        <div className="flex flex-col w-fit border-[#BFBFBF] border-t-4 px-4 py-6 text-3xl space-y-6">
          <Link
            to="/projects"
            className="hover:translate-x-6 transition duration-200 ease-in-out"
          >
            Projects
          </Link>
          <Link
            to="/experiences"
            className="hover:translate-x-6 transition duration-200 ease-in-out"
          >
            Experiences
          </Link>
          <Link
            to="/about"
            className="hover:translate-x-6 transition duration-200 ease-in-out"
          >
            About
          </Link>
        </div>
      </div>
    </>
  )
}
