"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const greeting = "Get in Touch";
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
        },
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
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
        {/* TEXT */}
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
            🚀
          </motion.div>
        </div>

        {/* FORM */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-gradient-radial from-[#F9FCFF] to-[#DEE4EA] rounded-xl text-[17px] flex flex-col gap-8 justify-center p-24 "
        >
          <span>Dear Joachim,</span>

          <span>My Name is</span>
          <input
            type="text"
            name="sender_name"
            className="bg-transparent border-b-2 border-black outline-none"
            placeholder="Your Name"
            required
          />

          <span>My E-mail Address is:</span>
          <input
            type="email"
            name="sender_email"
            className="bg-transparent border-b-2 border-black outline-none"
            placeholder="Your Email Address"
            required
          />

          <span>Message:</span>
          <textarea
            name="message"
            rows={6}
            className="bg-transparent border-b-2 border-black outline-none"
            placeholder="Tell me about your project..."
            required
          />

          <button className="font-semibold w-full rounded-lg p-3 bg-black text-white shadow-xl transition-all hover:shadow-gray-700">
            Start a Conversation
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
