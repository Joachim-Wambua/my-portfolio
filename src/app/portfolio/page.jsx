"use client";
import { motion, useScroll } from "framer-motion";
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
                <section className="app-design">
                  <div className="app-design__wrapper flex flex-col wrapper--large">
                    <div className="app-design__content blurb w-80">
                      <h2 className="text-5xl text-white font-bold w-80">
                        {project.title}
                      </h2>
                      <p className="text-white font-regular w-80 py-4">
                        {project.briefAbout}
                      </p>
                      <Link href={`/project/${project.id}`}>
                        <InvertedButton content="View Project" />
                      </Link>
                    </div>
                  </div>
                  <figure
                    className="app-design__visual"
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
                Contact Me Today!
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
