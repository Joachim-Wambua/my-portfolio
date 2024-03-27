"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll">
        {/* Text Container */}
        <div className="px-4 sm:px-8 md:px-12 lg-px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* Biography Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography Title */}
            <h1 className="font-bold text-2xl"> BIOGRAPHY</h1>
            {/* Biography Description */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              labore provident porro voluptate harum culpa expedita accusantium.
              Ipsum, quidem voluptatem nulla necessitatibus est totam doloremque
              adipisci voluptatum quo? Possimus, aspernatur! Sed reprehenderit
              dolore perferendis corrupti commodi similique.
            </p>
            {/* Quote */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* Signature */}
            <div className="self-end">
              {/* TODO: Add Signature */}
              <Image
                src="/signature.png"
                alt="Kim's signature"
                width={360}
                height={180}
              />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            <div className="flex gap-4 flex-wrap">
              {/* Skills List */}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ReactJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NextJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                VueJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Jupyter Notebook
              </div>
            </div>

            {/* Scroll Svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* Experience Container */}
          <div className="">
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="font-bold text-2xl">EXPERIENCE</h1>
              {/* EXperience List */}
              <div className="">
                {/* Experience List Item */}
                <div className="flex justify-between h-48">
                  {/* Left */}
                  <div className="w-1/3">
                    {/* Job Title */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Software Engineer
                    </div>
                    {/* Description */}
                    <div className="p-3 text-sm italic">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Autem commodi corrupti official.
                    </div>
                    {/* Job Date */}
                    <div className="p-3 text-blue-600 text-sm font-semibold">
                      2024 - Present
                    </div>
                    {/* Job Company */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      KomezArt
                    </div>
                  </div>
                  {/* Center */}
                  <div className="w-1/6"></div>
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-600 bg-white -left-2 "></div>
                  </div>
                  {/* Right */}
                  <div className="w-1/3"></div>
                </div>

                {/* Experience List Item */}
                <div className="flex justify-between h-48">
                  {/* Left */}
                  {/* Center */}
                  <div className="w-1/6"></div>
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-600 bg-white -left-2 "></div>
                  </div>
                  {/* Right */}
                  <div className="w-1/3">
                    {/* Job Title */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Software Engineer
                    </div>
                    {/* Description */}
                    <div className="p-3 text-sm italic">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Autem commodi corrupti official.
                    </div>
                    {/* Job Date */}
                    <div className="p-3 text-blue-600 text-sm font-semibold">
                      2024 - Present
                    </div>
                    {/* Job Company */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      KomezArt
                    </div>
                  </div>
                </div>

                {/* Experience List Item */}
                <div className="flex justify-between h-48">
                  {/* Left */}
                  <div className="w-1/3">
                    {/* Job Title */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Software Engineer
                    </div>
                    {/* Description */}
                    <div className="p-3 text-sm italic">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Autem commodi corrupti official.
                    </div>
                    {/* Job Date */}
                    <div className="p-3 text-blue-600 text-sm font-semibold">
                      2024 - Present
                    </div>
                    {/* Job Company */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      KomezArt
                    </div>
                  </div>
                  {/* Center */}
                  <div className="w-1/6"></div>
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-600 bg-white -left-2 "></div>
                  </div>
                  {/* Right */}
                  <div className="w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
