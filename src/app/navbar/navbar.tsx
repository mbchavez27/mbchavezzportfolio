import { ChevronRightIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <>
      <div className="absolute bottom-0 p-12">
        <div className="flex items-center space-x-3.5">
          <h1 className="text-[#e93a3c] text-5xl font-bold">@mbchavezz</h1>
          <ChevronRightIcon className="text-[#BFBFBF] size-8  translate-y-1"></ChevronRightIcon>
        </div>
      </div>
    </>
  )
}

export default Navbar
