export default function Home() {
  return (
    <>
      <div
        className={`flex justify-center items-center h-screen text-4xl pb-24 font-light flex-col space-y-8 transition-opacity duration-500 ease-in-out`}
      >
        <div className="text-green-900">
          Computer Science Student Studying{'  '}
          <span className="font-bold">@DLSU</span>
        </div>
        <div className="text-gray-400">
          Senior Front End Engineer <span className="font-bold">@lscs</span>
        </div>
      </div>
    </>
  )
}
