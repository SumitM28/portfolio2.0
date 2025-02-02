"use client";
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons/GitHubIcon";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
const projects = [
  {
    name: "Hotel Booking Website",
    type: "Fullstack (MERN) Project",
    description:
      "This is an hotel booking project built using the MERN stack (MongoDB, Express, React, Node.js, Hooks). The project includes a backend server, a front-end client, and a database.",
    github: "https://github.com/SumitM28/Booking-App",
    live: "",
    img: "/images/projects/hotel.png",
  },
  {
    name: "Job Search App",
    type: "Android Application",
    description:
      "This is an Job App like indeed and LinkedIn built using the React Native and expo CLI. The project includes a front-end client, which fetching data from an API (Rapid Api).",
    github: "https://github.com/SumitM28/Job-App/",
    live: "https://expo.dev/@sumitm28/Job_app?serviceType=classic&distribution=expo-go",
    img: "/images/projects/job.jpg",
  },
  {
    name: "E-Commerce Website",
    type: "Fullstack (MERN) Project",
    description:
      "This is an E-commerce project built using the MERN stack (MongoDB, Express, React, Node.js, Redux). The project includes a backend server, a front-end client, and a database.",
    github: "https://github.com/SumitM28/E-Commerce-App",
    live: "",
    img: "/images/projects/ecommerce.png",
  },
  {
    name: "Uber Eats Clone",
    type: "Android Application",
    description:
      "UberEats is an on-demand food delivery like Swiggy and Zomato built using React Native and expo CLI. This project based on front-end UI. and for the information i use the static data",
    github: "https://github.com/SumitM28/uber-eats-clone",
    live: "",
    img: "/images/projects/uber.jpg",
  },
  {
    name: "Food Website",
    type: "Frontend Project",
    description:
      "This is a responsive Frontend website. It includes such technologies like HTML, CSS, JavaScript etc.",
    github: "https://github.com/SumitM28/Food-App",
    live: "https://sumit-food.netlify.app/",
    img: "/images/projects/food.png",
  },
  {
    name: "Invoice Application",
    type: "Android Application",
    description:
      "This is a android application designed to help businesses and individuals create, manage, and send invoices to clients or customers. Which contains the technologies like React Native, React etc. ",
    github: "https://github.com/SumitM28/Invoice-application",
    live: "",
    img: "/images/projects/invoice.png",
  },
  {
    name: "Music Player",
    type: "Frontend Project",
    description:
      "This is a responsive music player website. It includes such technologies like HTML, CSS, JavaScript etc.",
    github: "https://github.com/SumitM28/music-player",
    live: "https://64d60cae8e0cde4defaa22e7--poetic-starlight-e17d99.netlify.app/",
    img: "/images/projects/music.png",
  },
];

export default function page() {
  return (
    <>
      <TransitionEffect />
      <div className="max-w-screen-xl w-full mx-auto h-full px-4 sm:px-6 ">
        <div className="flex justify-center mt-8">
          <AnimatedText className={"project_text_shadow"}>
            Projects
          </AnimatedText>
        </div>

        <div className="flex flex-col gap-16 my-24">
          {projects?.map((project, i) => (
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className={
                i % 2 === 0
                  ? "w-full flex-col md:w-[70%] md:flex-row h-full rounded-xl p-5 gap-4  flex bg-dark/10 dark:bg-light/10 "
                  : "w-full flex-col md:w-[70%] md:flex-row h-full rounded-xl p-5 gap-4  flex ml-auto bg-dark/10  dark:bg-light/10 "
              }
              key={i}
            >
              <div
                className={
                  i % 2 === 0
                    ? "w-full md:w-[50%] h-[200px] md:h-[350px]"
                    : "w-full md:w-[50%] h-[500px] md:h-[350px]"
                }
              >
                <Image
                  src={project.img}
                  alt=""
                  width={400}
                  height={350}
                  className="w-full h-full object-contain hover:scale-110 transition-all cursor-pointer"
                />
              </div>
              <div className="w-full md:w-[50%] border-red-600 md:px-6 flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-dark dark:text-light">
                  {project.name}
                </h1>
                <h2 className="text-base font-semibold text-[#bc67ce] mb-3">
                  {project.type}
                </h2>
                <p className="text-sm text-dark/75 font-medium dark:text-light/75">
                  {project.description}
                </p>
                <div className="flex mt-8 gap-4">
                  <Link
                    href={project.github}
                    className="w-8 hover:scale-110 transition-all dark:bg-light rounded-full"
                    target="_blank"
                  >
                    <GithubIcon />
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live}
                      className="w-8 bg-dark rounded-full p-1 hover:scale-110 transition-all dark:bg-light"
                      target="_blank"
                    >
                      <Image
                        src={"/images/projects/preview.png"}
                        width={12}
                        height={12}
                        className="w-full"
                        alt=""
                      />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
