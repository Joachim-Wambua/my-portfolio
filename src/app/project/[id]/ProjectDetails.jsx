"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import InvertedButton from "@/components/InvertedButton";
import { projects } from "../../../../data";

export default function ProjectPage({ project }) {
  const techStackLen = project.tech_stack.length;
  // Creating a class string for grid columns based on the length of tech_stack array
  const gridColsClass = `grid-cols-${techStackLen + 1}`;

  console.log(techStackLen);

  return (
    <div className="h-full w-full overflow-scroll mx-auto ">
      {/* <h1 className="text-4xl font-bold mb-4"></h1> */}
      {/* <div className="w-full h-[calc(50vh-6rem)] font-bold flex items-center justify-center text-6xl text-center">
        {project.title}
      </div> */}
      {/* <div className="relative w-full h-72 md:h-[90vh]">
        <Image
          src={project.images.image1}
          alt={project.title}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <p className="text-md mb-8">{project.project_overview}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside">
          {project.key_features.split("\n").map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Project Objectives</h2>
        <p>{project.project_objectives}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside">
          {project.tech_stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <Link href={project.link}>
        <Button
          className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded"
          content="View Project"
        />
      </Link> */}

      <section className="bg-transparent">
        <div className="grid w-full items-center justify-center px-4 pt-2 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-4">
          <div className="mx-10 flex flex-col w-full items-start lg:col-span-6 lg:items-start lg:ml-20 sm:items-center sm:mx-0">
            <h1 className="max-w-2xl text-5xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl text-slate-800">
              {project.title}
            </h1>
            <p className="max-w-2xl w-3/4 my-6 font-light text-gray-500 lg:my-6 md:text-md lg:text-md ">
              {project.project_overview}
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <div className="flex w-full gap-4">
                <Link href="/">
                  <button className="rounded-lg before:ease relative h-12 w-40 overflow-hidden border border-gray-500 bg-black text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-700 hover:before:-translate-x-40">
                    <span relative="relative z-10">View Website</span>
                  </button>
                </Link>
                <Link href="/">
                  <button className=" border-1 border-black rounded-lg hover:text-white hover:before:bg-black relative h-[50px] w-40 overflow-hidden border text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-700 before:transition-all before:duration-500 hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
                    <span className="relative z-10">View on Github</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <Image
              src={project.images.image1}
              className="shadow-md"
              unoptimized={true} 
              width={700}
              height={600}
              alt="hero image"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fff]">
        <div className="flex flex-col pt-6">
          <h1 className="mx-auto text-xl font-bold items-center justify-center">
            Tech Stack
          </h1>
        </div>
        <div className="max-w-screen-xl px-8 py-6 mx-auto">
          <div
            className={`grid grid-cols-${techStackLen} gap-8 text-gray-500 sm:gap-12 lg:grid-cols-${techStackLen}`}
          >
            {project.tech_stack.map((tech) => (
              <a
                href="#"
                key={tech.name}
                className="flex flex-col hover:text-gray-900 items-center lg:justify-center"
              >
                {tech.icon}
                <p className="text-md mt-3 hover:text-gray-900">{tech.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-transparent">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div classNames="text-gray-500 sm:text-lg ">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
                Project Objectives
              </h2>
              <p className="mb-8 font-light lg:text-md">
                {project.project_objectives}
              </p>
            </div>
            <Image
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              unoptimized={true} 
              src={project.images.image2}
              width={300}
              height={200}
              alt="dashboard feature image"
            />
          </div>
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <Image
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              unoptimized={true} 
              src={project.images.image3}
              width={300}
              height={200}
              alt="feature image 2"
            />
            <div className="text-gray-500 sm:text-xl">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
                Key Features
              </h2>
              <ul role="list" className="pt-4 space-y-5 ">
                {project.key_features.split("\n").map((feature) => (
                  <li key={feature.id} className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-slate-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-900 ">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
