import { Link } from 'react-router-dom'

export default function Experiences() {
  return (
    <>
      <div className="px-10 py-40">
        <div className="text-5xl px-3 py-6">Experiences</div>
        <div className="flex flex-col w-fit border-[#BFBFBF] border-t-4 px-4 py-6 text-3xl space-y-6">
          <Link
            to="/projects"
            className="hover:translate-x-6 transition duration-200 ease-in-out"
          >
            La Salle Computer Society
          </Link>
        </div>
      </div>
    </>
  )
}
