import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Projects() {
  return (
    <>
      <div className="bg-[#0a0a0a] min-h-screen text-[#BFBFBF]">
        <div className="flex justify-center items-center flex-col space-y-8 min-h-screen pb-48 transition duration-200 ease-in-out">
          <div className="text-6xl my-30">Projects</div>
          <Carousel className="w-screen h-auto">
            <CarouselContent className="space-x-8">
              <CarouselItem className="md:basis-1/2 ">
                <div className="bg-black border-2 px-36 py-48 rounded-lg">
                  test
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-black border-2 p-24 rounded-lg">test</div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-black border-2 p-24 rounded-lg">test</div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
          </Carousel>
        </div>
      </div>
    </>
  )
}
