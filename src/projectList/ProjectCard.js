import React from "react";
import { useParams } from "react-router-dom";
import projectData from "./ProjectListData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === parseInt(id));

  return (
    <>
      <div className="text-center text-black text-4xl font-bold mt-32">
        {project.title}
      </div>
      <motion.div className="flex w-4/5 m-auto pt-20  pb-20 ">
        <motion.div
          className="flex w-full mx-auto mt-0 gap-10 flex-wrap justify-center flex-col m-auto "
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 * 0.2 }}
        >
          {
            <div
              key={project.id}
              className="xl:w-full lg:w-full w-full relative overflow-hidden h-[500px] rounded-2xl shadow-vedic-shadow"
            >
              <div className="flex flex-col  border border-gray-400 lg:h-full h-full rounded-2xl  lg:flex-row md:flex-col">
                <div className="flex-1  m-3 border-2 rounded-xl bg-red-500" style={{backgroundImage:`url(${project.image})`,backgroundSize:"cover"}}>
                  {/* <img src={project.image} alt="" className="h-full w-auto rounded-lg" /> */}
                </div>

                <div className="flex-1 px-6 py-4">
                  <div className="font-bold text-3xl mb-2 mt-10 ">
                    {project.title}
                  </div>
                  <p className="text-gray-700 text-xl p-[2px] mt-20 border-s-4 border-green-400">
                    {project.detail}
                  </p>
                  <div className="mt-20">
                    {project?.languagesUsed.map((language) => (
                      <motion.span
                        key={language}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4 mb-2"
                        initial={{ opacity: 0, y: 90 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 * 0.2 }}
                      >
                        {language}
                      </motion.span>
                    ))}
                  </div>
                  <div className="mt-10 center gap-5">
                    <Link
                      to={project.url}
                      className=" bg-blue-700 text-white py-2 px-6 rounded-lg center hover:bg-blue-900"
                    >
                      View Demo 
                      <div
                      whileHover={{ scale: 3, z:100,  opacity:0 }}
                      ><i class="fa-regular fa-paper-plane ml-3"></i></div>
                    </Link>
                    <Link
                      href={project.url}
                      className="bg-blue-700 center text-white py-2 px-6 rounded-lg hover:bg-blue-900"
                    >
                      Visit Code <div className="ml-3"><i class="fa-solid fa-code"></i></div>
                    </Link>
                    <Link
                      href={project.url}
                      className="bg-blue-700 center text-white py-2 px-6 rounded-lg hover:bg-blue-900"
                    >
                      Visit Report <div className="ml-3"><i class="fa-solid fa-pen-nib"></i></div>
                    </Link>
                  </div>
                </div>
                {/* <div className="absolute -right-10 -top-10 size-20 bg-red-700 text-2xl rounded-full flex justify-start items-center text-white shadow-md"></div> */}
              </div>
            </div>
          }
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
