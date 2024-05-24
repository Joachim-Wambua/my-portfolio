"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
// import { useRef } from "react";
import { projects } from "../../../../data"; // Adjust the path if necessary

export default function ProjectPage({ project }) {

  return (
    <div className="h-full overflow-scroll  mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-xl mb-8">{project.project_overview}</p>
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={project.images.background}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
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
        <Button className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded" content="View Project"/>
      </Link>
    </div>
  );
}
