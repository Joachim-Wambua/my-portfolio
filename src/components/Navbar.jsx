"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

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
            <NavLink link={link} key={link.title} />
          ))}
        </div>

        {/* Logo */}
        <div className="md:hidden lg:flex w-1/3 justify-center">
          <Link href="/" className="flex flex-row items-center justify-center">
            <Image
              src="/kim-brand-dark.png"
              className=""
              width={63}
              height={63}
              alt="Kim's Logo"
            />
            <div className="flex flex-col mx-2 justify-center tracking-wider">
              <p className="font-black uppercase text-md">Joachim</p>
              <p className="font-normal text-[13.5px] uppercase ">Mwengi</p>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex gap-4 w-1/3 justify-center">
          <Link href="https://github.com/Joachim-Wambua">
            <Image
              src="/github.png"
              width={24}
              height={24}
              alt="Github Profile"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/joachim-wambua/">
            <Image
              src="/linkedin.png"
              width={24}
              height={24}
              alt="LinkedIn Profile"
            />
          </Link>

          <Link href="">
            <Image
              src="/instagram.png"
              width={24}
              height={24}
              alt="Instagram Profile"
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
                  <Link href={link.url}>{link.title}</Link>
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
