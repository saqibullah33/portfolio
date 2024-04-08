import React from "react";
import project1 from '../assets/images/hireMe.png'
import project2 from '../assets/images/about.jpg'

const projects = [
  {
    title: "Arduino-based RC Car",
    description: "A remote-controlled car designed and built using Arduino, enabling precise control and maneuverability.",
    image: project1
  },
  {
    title: "Line Follower Robot",
    description: "A robot capable of autonomously following a predefined path using sensors, demonstrating proficiency in robotics and sensor integration.",
    image: project2
  },
  {
    title: "Arduino-based Robotic Hand",
    description: "A functional robotic hand controlled by Arduino, showcasing skills in robotics and mechanical design.",
    image: project1
  },
  {
    title: "Obstacle Avoidance Robot",
    description: "A robot equipped with sensors to detect and navigate around obstacles autonomously, highlighting expertise in robotics and programming.",
    image: "https://example.com/obstacle_avoidance_robot_image.jpg"
  },
  {
    title: "EMG Sensor",
    description: "Implementation of an EMG sensor system, showcasing proficiency in working with advanced sensor technology for biofeedback applications.",
    image: "https://example.com/emg_sensor_image.jpg"
  },
  {
    title: "Radar System (Arduino-based)",
    description: "Design and implementation of a radar system using Arduino, demonstrating skills in hardware and signal processing.",
    image: "https://example.com/radar_system_image.jpg"
  },
  {
    title: "Car Parking Barrier System",
    description: "Engineering of a car parking barrier system for efficient and controlled vehicle access, showcasing practical engineering skills.",
    image: "https://example.com/parking_barrier_image.jpg"
  },
  {
    title: "Door Opening using Keyboard",
    description: "Development of a door opening mechanism controlled by a keyboard, exhibiting creativity in solving real-world problems using technology.",
    image: "https://example.com/door_opening_image.jpg"
  },
  {
    title: "Ultron (Robo war)",
    description: "Creation of Ultron, a competitive robot designed for Robo War competitions, demonstrating expertise in robotic design and combat engineering.",
    image: "https://example.com/ultron_image.jpg"
  }
];


const Project = () => {
  return (
    <>

      
      <section id='projects' className="bg-gray-2 d-flex gap-5 px-10 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
        <div className="mx-auto"><h3 className="text-4xl text-center py-10 font-semibold">
          My<span className="text-cyan-600"> Projects</span>
        </h3></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <SingleCard
                key={index}
                image={project.image}
                CardTitle={project.title}
                CardDescription={project.description}
                // Button={project.Button}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

const SingleCard = ({
  image,
  CardDescription,
  CardTitle,
  Button,
  titleHref,
}) => {
  return (
    <>
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <a href={image}><img src={image} alt="" className="w-full" /></a>
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary text-black sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color text-black">
            {CardDescription}
          </p>
          {Button && (
            <a
              href="#"
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
    </>
  );
};
