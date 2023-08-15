import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "@/components/Icons/LiIcon";

interface DetailsProps {
  position: any;
  company: any;
  companyLink: any;
  time: any;
  address: any;
  work: any;
  location: any;
}
const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  location,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] sm:w-[65%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl dark:text-light">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/90">
          {time} | {address} | {location}
        </span>
        <p className=" font-medium w-full dark:text-light/75">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div>
      <div className="w-[100%] sm:w-[75%]  mx-auto relative mt-14">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-1 h-full bg-dark origin-top dark:bg-light"
          ref={ref}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Backend Developer Intern"}
            company={"Providentia Technologies"}
            companyLink={"https://providentiatech.ai/"}
            time={"July 2023 - Present"}
            address={"Noida, Uttar Pradesh"}
            location={"Remote"}
            work={
              "Contributed as a backend developer within the Providentia Technologies team, instrumental in enhancing the functionality of our proprietary systems. Spearheaded advancements in data processing efficiency and backend infrastructure, amplifying overall system performance and user experience."
            }
          />
          <Details
            position={"Web Developer Intern"}
            company={"TWILEARN"}
            companyLink={"https://www.twilearn.com/"}
            time={"Mar 2023 - Apr 2023"}
            address={"Maharashtra"}
            location={"Remote"}
            work={
              "Collaborated with a team of web developers to design and develop responsive and user-friendly websites using HTML, CSS, JavaScript and jQuery. Implemented modern frontend frameworks like React to create interactive and dynamic user interfaces. Assisted in the integration of backend functionalities with RESTful APIs to facilitate seamless data exchange between frontend and backend components."
            }
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
