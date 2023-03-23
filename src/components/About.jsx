import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid  gap-8 mb-4">
            <div className="sm:text-center pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols- gap-8 px-4">
            <div className="sm:text- text-4xl font-bold">
              
            </div>
            <div>
              <p>
                {" "}
                My name is Mariam Guleid. I am a passionate web developer always seeking to increase my knowledge and sharpen my skills. 
                I graduated from the Full-Stack Web Development program with Robertson, attaining good grades in all my courses. 
                I am an easy to deal with person, a quick learner, and a perfectionist who is always looking for the best outcome in my projects/work. 
                In my free time, I am usually found spending time with my three cats, going outside, reading books, writing/journaling, organizing, or learning something new.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;