import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Advance",
      count: 86,
    },
    {
      logo: "logo-css3",
      level: "Expect",
      count: 90,
    },
    {
      logo: "logo-nodejs",
      level: "Beginner",
      count: 40,
    },
    {
      logo: "logo-react",
      level: "Intermediate",
      count: 80,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="h-screen flex justify-center  -mt-[100px] items-center dark:bg-gray-800">
  <div className="max-w-xl mx-auto w-full">
    {/* To achieve the desired progress, you can update the 'stroke-dasharray' property. */}
    {/* <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">
      Skills
    </h4> */}
    <div className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
        I have completed Fusion 360 & Cura software courses.
        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
          80%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#FF6464"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "79.2px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </div>
    <div className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
          Proficient in using Ender 3 (3D) Printer
{" "}
        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
          95%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#9272D4"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "94.05px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </div>
    <div className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
        Currently, I am learning SolidWorks for designing.
        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
          65%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#5185D4"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "64.35px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </div>
    <div className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
        I'm proficient in Arduino for various robotics projects.

        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
          90%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#eba134"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "74.25px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </div>

    <div className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#d35454]">
        I'have experience working EMG Sensors and ESP-32.

        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#70b06a]">
          80%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#eb34e1"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "74.25px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </div>


    <div className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
        I am competent in creating robotic systems and models.

        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
          90%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#CA5623"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "74.25px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </div>


  
  </div>
</div>

      </div>
    </section>
  );
};

export default Skills;
