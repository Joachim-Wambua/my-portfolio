"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const greeting = "Let's Talk";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 mb-5 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <motion.div>
            {greeting.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </motion.div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full sm:h-full lg:w-1/2 bg-gradient-radial from-[#F9FCFF] to-[#DEE4EA] rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Joachim,</span>
          <textarea
            id=""
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="message"
            rows={6}
          />
          <span>My E-mail Address is:</span>
          <input
            className="bg-transparent border-b-2 border-b-black outline-none"
            type="email"
            name="sender_email"
          />
          <span>Regards</span>
          <button class="font-semibold w-full rounded-lg before:ease relative h-24 overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-24 before:w-3 before:translate-x-0 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-700 hover:before:-translate-x-100">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your Message Was Sent Successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something Went Wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
