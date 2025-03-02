import { Link } from 'react-router-dom'

type linkTypes = {
  link: string
  linkTitle: string
}

type drawerType = {
  title: string
  links: linkTypes[]
}

export default function Drawer(drawerContent: drawerType) {
  return (
    <>
      <div className="px-10 py-40">
        <div className="text-5xl px-3 py-6">
          {drawerContent.title || 'title'}
        </div>
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
