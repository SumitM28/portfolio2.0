import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "@/components/Icons/LiIcon";
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] sm:w-[65%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl dark:text-light">
          {type}
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/90">
          {time} | {place}
        </span>
        <p className=" font-medium w-full dark:text-light/75">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div>
      <div className="w-[100%] sm:w-[75%]  mx-auto relative mt-14 mb-[450px]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-1 h-full bg-dark origin-top dark:bg-light"
          ref={ref}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type={"Bachelor Of Science In Elcectronics & Communication"}
            time={"2020 - 2024"}
            place={"Raja Balwant Singh Engineering Technical Campus"}
            info={
              "Relevant courses encompassed Electronics Fundamentals, Digital Signal Processing, and Communication Systems Design."
            }
          />
          <Details
            type={"Frontend Development Course"}
            time={"2022 - 2023"}
            place={"Relevel by Unacademy"}
            info={
              "In our comprehensive frontend course, you'll delve into the art of crafting captivating user experiences. Master HTML, CSS, and JavaScript, and explore cutting-edge frameworks like React. Learn to design responsive and accessible interfaces, optimize performance, and integrate APIs seamlessly. "
            }
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
