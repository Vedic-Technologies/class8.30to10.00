import React from "react";
import projectList from "../projectList/ProjectListData";
import { Link } from "react-router-dom";

const Projects = ({ difficultyLevel, selectedItem, handleItemClick }) => {
   
  return (
    <>
       <div className="text-black text-lg border-b-2 border-gray-400 pb-2 text-left font-medium mt-10">
        Projects Level - {difficultyLevel}
      </div>
      <ul className="flex flex-col gap-3 mt-5 text-black justify-start items-start">
        {projectList
          .filter((project) => project.difficulty_level === difficultyLevel)
          .map((project, index) => (
            <Link to={`/${project.id}`} className="w-full" key={index}>
              <li
                className={`flex text-lg items-center gap-3 py-1 px-2 w-full rounded-md cursor-pointer ${
                  selectedItem === project.id ? "bg-blue-800 text-white" : "hover:bg-blue-800 hover:text-white "
                }`}
                onClick={() => handleItemClick(project.id)}
              >
                {project.icon}
                {project.title}
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Projects;
