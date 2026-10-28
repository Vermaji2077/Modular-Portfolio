import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialLinks = [
    { Icon: BiLogoGmail, href: "mailto:nishantv181@gmail.com" },
    { Icon: BsGithub, href: "https://github.com/Vermaji2077" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='max-w-2xl mx-auto mt-8 lg:mt-16 text-center'>
        <div className='font-extrabold text-2xl lg:text-5xl space-y-1 lg:space-y-3'>
          <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
          <h2>Something special</h2>
        </div>

        <p className='text-[#71717A] text-sm/6 lg:text-base mt-4 lg:mt-6'>
          I seek to push the limits of technology to create high-performing, user-friendly, and memorable digital experiences. Feel free to reach out directly via email, phone, or connect through GitHub.
        </p>

        <div className='font-semibold text-base lg:text-xl flex flex-col sm:flex-row items-center justify-center mt-8 gap-4 lg:gap-8'>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center gap-3 bg-white border-2 border-black px-5 py-3 rounded group shadow-sm hover:bg-black hover:text-white transition-all'
            href="mailto:nishantv181@gmail.com"
          >
            <span className='border-2 transition-all border-black group-hover:border-white rounded-full p-1'>
              <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
            </span>
            <span>nishantv181@gmail.com</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center gap-3 bg-white border-2 border-black px-5 py-3 rounded group shadow-sm hover:bg-black hover:text-white transition-all'
            href="tel:+918980264859"
          >
            <span className='border-2 transition-all border-black group-hover:border-white rounded-full p-[5px]'>
              <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
            </span>
            <span>+91 8980264859</span>
          </motion.a>
        </div>

        <div className='flex items-center justify-center gap-x-5 mt-8'>
          {socialLinks.map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
