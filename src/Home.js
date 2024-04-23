import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Navbar from "./components/Navbar";

const Home = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Calculator",
      image: "https://www.codewithfaraz.com/img/calculator.png",
      detail: "A fully functional e-commerce website built with React and Node.js.",
      languagesUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      url: "/calculator",
      projectLevel: "easy",
    },
    {
      id: 2,
      title: "Bmi Calculator",
      image: "https://media.licdn.com/dms/image/D4D12AQHWPdY9noLMYA/article-cover_image-shrink_720_1280/0/1700389480737?e=2147483647&v=beta&t=ouROI_aHlq--fo4w7JE6jrvmdv3zNEspcyp7O-ssjRg",
      detail: "A blog application where users can create, read, update, and delete blog posts.",
      languagesUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      url: "/bmicalculator",
      projectLevel: "easy",
    },
    {
      id: 3,
      title: "Todo",
      image: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/cover-1.png",
      detail: "A Todo application where users can create, read, update, and delete todoes.",
      languagesUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      url: "/todo",
      projectLevel: "medium",
    },
    {
      id: 4,
      title: "ShowPasswordIcon",
      image: "https://www.csestack.org/wp-content/uploads/2021/02/password-show-hide-for-login-form.png",
      detail: "A ShowPasswordIcon application where users can see password by clicking  show password icon",
      languagesUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      url: "/show_password_icon",
      projectLevel: "easy",
    },
    {
      id: 5,
      title: "Small Todo",
      image: "https://foolishdeveloper.com/wp-content/uploads/2021/11/todo-list-javascript.jpg",
      detail: "A small todo app where user can add and delete todo from todo application",
      languagesUsed: ["HTML", "CSS", "React"],
      url: "/small_todo_app",
      projectLevel: "easy",
    },
    {
      id: 6,
      title: "Responsive navbar",
      image: "https://img.freepik.com/free-vector/web-elements-user-interface-kit_23-2147495061.jpg?t=st=1713379114~exp=1713382714~hmac=7cd498a41716b3e6785f4d97e2a8a643a71f61de00f189ca6c7f671cf118ae46&w=826",
      detail: "A responsive navbar that works properly on all devices",
      languagesUsed: ["HTML", "tailwind", "React"],
      url: "/responsive_navbar",
      projectLevel: "easy",
    },
    {
      id: 7,
      title: "Image Slider",
      image: "https://www.jqueryscript.net/images/Awesome-Fully-Responsive-jQuery-Slider-FlexSlider.jpg",
      detail: "An image slider made in react and tailwind css",
      languagesUsed: ["HTML", "tailwind", "React"],
      url: "/image_slider",
      projectLevel: "easy",
    },
    {
      id: 8,
      title: "Digital Clock & Timer",
      image: "https://i.ibb.co/3Sf5KkN/ezgif-com-video-to-gif.gif",
      detail: "An digital clock and also time that has start stop and reset functions",
      languagesUsed: ["HTML", "tailwind", "React"],
      url: "/digital_clock_timer",
      projectLevel: "easy",
    },
  ]);

  const [filteredLevel, setFilteredLevel] = useState("default");

  const filteredProjects = filteredLevel === "default" ? projects : projects.filter(project => project.projectLevel === filteredLevel);

  return (
    <>
      <Navbar setFilteredLevel={setFilteredLevel} />
      <div className="flex w-screen pt-20 -z-20 pb-20">
        <div className="flex w-[80%] mx-auto mt-10 gap-10 flex-wrap justify-center lg:flex-col xl:flex-row">
          {filteredProjects.map((project, index) => (
            <Link to={project.url} key={project.id} className="xl:w-[45%] lg:w-full w-full relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col cursor-pointer border-2 border-gray-400 lg:h-[250px] h-[500px] rounded shadow-lg lg:flex-row md:flex-col"
              >
                <div className="flex-1 bg-cover m-3 border-2 rounded-lg" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="flex-1 px-6 py-4">
                  <div className="font-bold text-xl mb-2">{project.title}</div>
                  <p className="text-gray-700 text-base">{project.detail}</p>
                  <div className="mt-4">
                    {project.languagesUsed.map((language) => (
                      <span key={language} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{language}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute -right-10 -top-10 size-20 bg-red-700 text-2xl rounded-full flex justify-start items-center text-white shadow-md">
                  <span className="ml-4 mt-7">{index + 1}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
