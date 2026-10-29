import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "YourMart – Full-Stack Grocery E-Commerce Platform",
    tech: "React.js | Vite | Tailwind CSS | Node.js | Express.js | Neon | Stripe | Inngest",
    description: "Developed a full-stack grocery platform featuring product browsing, cart management, ordering, inventory control, and delivery tracking. Implemented secure authentication, delivery partner assignment, OTP verification, Stripe payment processing, and automated order workflows using Inngest.",
    image: "/assets/project1.png",
    link: "https://your-mart-by-nish.vercel.app/"
  },
  {
    id: 2,
    title: "DSA Visualizer and Chatbot – Interactive Learning Platform",
    tech: "HTML5 | CSS3 | JavaScript | Python",
    description: "Developed an interactive web platform for DSA algorithm visualization with an integrated AI chatbot for student assistance. Designed interactive learning features to deepen conceptual understanding and intuitive problem solving.",
    image: "/assets/project2.png",
    link: "https://vermaji2077.github.io/dsa/"
  },
  {
    id: 3,
    title: "Aviation – Visa Consultancy and Booking System",
    tech: "HTML5 | JavaScript | React.js | Express.js | Node.js | MySQL",
    description: "Developed a full-stack platform for visa appointment booking, user registration, and consultancy service management. Implemented client and service package management with robust MySQL database integration.",
    image: "/assets/project3.png",
    link: "https://github.com/Vermaji2077/aviation"
  },
  {
    id: 4,
    title: "3-D Portfolio – Interactive Web Experience",
    tech: "Three.js | React Three Fiber | JavaScript | Tailwind CSS | WebGL",
    description: "An immersive 3D portfolio website showcasing creative web development skills through interactive 3D environments, dynamic WebGL animations, and engaging visual effects. It focuses on delivering an immersive user experience while optimizing 3D asset loading and rendering performance.",
    image: "/assets/project4.png",
    link: "https://nish-port-folio.netlify.app/"
  },
  {
    id: 5,
    title: "ECHO – Interactive Editorial Portfolio",
    tech: "HTML5 | CSS3 | JavaScript (ES6+) | React.js | OGL | WebGL | Canvas API | CSS 3D Transforms",
    description: "ECHO is a modern, interactive portfolio showcasing software development projects, academic qualifications, certifications, and technical skills. It combines editorial typography, scroll-driven animations, WebGL liquid card effects, a 3D cylindrical navigation system, interactive project modals, and in-browser PDF certificate previews to deliver an immersive user experience.",
    image: "/assets/project5.png",
    link: "https://echo-by-nish.vercel.app/"
  },
  {
    id: 6,
    title: "Personal Developer Portfolio – Main Portfolio",
    tech: "React.js | Tailwind CSS | JavaScript | HTML5 | CSS3 | Framer Motion",
    description: "My primary portfolio website showcasing full-stack projects, technical certifications, and professional journey as a developer. Built with responsive UI/UX design, interactive case studies, smooth animations, and optimized web performance.",
    image: "/assets/project6.png",
    link: "https://vermaji2077.github.io/Portfolio/"
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              {project.tech && (
                <p className="text-xs lg:text-sm font-medium text-[#A1A1AA]">
                  {project.tech}
                </p>
              )}

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

