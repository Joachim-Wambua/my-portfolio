"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { projects } from "../../../data";
import { useTransform } from "framer-motion";
import InvertedButton from "@/components/InvertedButton";

import "./styles.css";

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-7xl text-center">
          My Work
        </div>
        <div
          className={`sticky top-0 flex h-screen gap-4 items-center overflow-hidden`}
        >
          <motion.div style={{ x }} className=" flex  bg-black">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#000000] to-[#130F40] "></div>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`h-screen w-screen flex items-center justify-center ${
                  index % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } from-[#130F40] to-[#000000]`}
              >
                {/* <div className="flex flex-col gap-8 text-white my-20">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl">
                    {project.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[360px]">
                    <Image src={project.images.background} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-md xl:w-[600px]">
                    {project.project_overview}
                  </p>
                  <Link
                    href={`/project/${project.id}`}
                    className="flex justify-end pb-3 "
                  >
                    <Button content="View Project" />
                  </Link>
                </div> */}

                <section class="app-design">
                  <div class="app-design__wrapper flex flex-col wrapper--large">
                    <div class="app-design__content blurb">
                      <h2 class="text-5xl text-white font-bold w-80">
                        {project.title}
                      </h2>
                      <p class="text-white font-regular w-80 my-8">
                        {project.project_overview}
                      </p>
                      <Link href={`/project/${project.id}`}>
                        <InvertedButton content="View Project" />
                      </Link>
                    </div>
                  </div>
                  <figure
                    class="app-design__visual"
                    style={{
                      backgroundImage: `url(${project.images.background})`,
                    }}
                  ></figure>
                </section>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl">Do You Have A Project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Software Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
