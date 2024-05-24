import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg-px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:mr-10 lg:w-1/2 relative">
          <Image
            src="/hero-img.png"
            alt="Hero Image"
            fill
            // width={450}
            // height={450}
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
          <p className="md:text-lg">
            Hello, I'm Joachim, a software engineer with over 3 years in the web development,
            I am passionate about crafting captivating web applications and
            building immersive user experiences.
          </p>

          <div className="flex w-full gap-4">
            <Link href="/portfolio">
              <button class="rounded-lg before:ease relative h-12 w-40 overflow-hidden border border-gray-500 bg-black text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-700 hover:before:-translate-x-40">
                <span relative="relative z-10">View My Work</span>
              </button>
            </Link>
            <Link href="/contact">
              <button className=" border-1 border-black rounded-lg hover:text-white hover:before:bg-black relative h-[50px] w-40 overflow-hidden border text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-700 before:transition-all before:duration-500 hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">Contact Me</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
