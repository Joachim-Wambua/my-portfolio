"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "#fff",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "#fff",
    },
  };

  const menuListVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const menuListItems = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg-px-20 xl:px-48">
        <div className="hidden md:flex items-center justify-center gap-4 w-1/3">
          {links.map((link) => (
            <NavLink className="cursor-pointer" link={link} key={link.title} />
          ))}
        </div>

        {/* Logo */}
        <div className="md:hidden lg:flex w-1/3 justify-center">
          <Link href="/" className="flex flex-row items-center justify-center">
            <Image
              src="/kim-brand-dark.svg"
              className=""
              width={63}
              height={63}
              alt="Kim's Logo"
            />
            <div
              className={`${inter.className} flex flex-col mx-2 justify-center tracking-wider`}
            >
              <p className="font-black uppercase text-[18px]">Joachim</p>
              <p className="font-normal text-[15px] uppercase ">Mwengi</p>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex gap-4 w-1/3 justify-center">
          <Link target="_blank" href="https://github.com/Joachim-Wambua">
            <FaGithub
              className=" text-[#051118] hover:text-gray-700"
              size={24}
            />
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/joachim-wambua/"
          >
            <FaLinkedinIn
              className=" text-[#051118] hover:text-gray-700"
              size={24}
            />
          </Link>

          <Link href="#">
            <FaInstagram
              className="text-[#051118] hover:text-gray-700"
              size={24}
            />
          </Link>
        </div>

        {/* Responsive Menu */}
        <div className="md:hidden">
          {/* Menu Button */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={menuOpen ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={menuOpen ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={menuOpen ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>

          {/* Menu List */}
          {menuOpen && (
            <motion.div
              variants={menuListVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div variants={menuListItems} key={link.title}>
                  <Link className="cursor-pointer" href={link.url}>
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
