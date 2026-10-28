import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a Computer Science undergraduate and passionate Full-Stack Developer currently pursuing my B. Tech in Computer Science & Engineering at ITM (SLS) Baroda University (2023–2027). I specialize in building robust web applications using React.js, Node.js, Express.js, and modern database architectures.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I have hands-on experience developing end-to-end solutions, from grocery e-commerce platforms with automated workflows and Stripe payments (YourMart) to consultancy booking systems (Aviation) and interactive learning platforms (DSA Visualizer & Chatbot). I maintain a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Committed to continuous growth, I have completed specialized training in AI/ML, Deep Learning, and emerging technologies through the Code Unnati Program (Edunet Foundation & SAP). Feel free to check out my projects on GitHub or reach out for collaboration.
        </p>
      </motion.div>
    </div>
  );
}
