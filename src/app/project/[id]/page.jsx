"use client";

import { projects } from "../../../../data"; // Adjust the path if necessary
import { motion, useInView, useScroll } from "framer-motion";
import ProjectDetails from "./ProjectDetails"; // Client component

const ProjectPage = ({ params }) => {
  const { id } = params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <ProjectDetails project={project} />
      </motion.div>
    </>
  );
};

export default ProjectPage;
