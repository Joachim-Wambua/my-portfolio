import Image from "next/image";

const Homepage = () => {
  return (
    <>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg-px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div>

        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Building Tomorrow
          </h1>
          {/* description */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. Armed with an immense passion for technology, a keen eye
            for aesthetics & a mastery of code, my portfolio showcases my
            diverse collection of projects that reflect my dedication and
            commitment to excellence{" "}
          </p>

          <div className="flex w-full gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
