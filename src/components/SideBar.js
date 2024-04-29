// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import projectList from "../projectList/ProjectListData";

const SideBar = () => {
  return (
    <div className="bg-gray-200 text-white w-[400px] h-full p-10 mt-20 ">
        <div className=" text-black text-lg border-b-2 border-gray-400 pb-2 text-left font-medium">Small Projects</div>
      <ul className="flex flex-col gap-3 mt-5 text-black justify-start items-start ">
        {projectList.map((project, index) => (
          <li key={index} className="flex text-lg items-center gap-3 hover:bg-blue-800 hover:text-white py-1 px-2 w-full rounded-md cursor-pointer">
            {/* <img src={project.image} alt="" className="w-[25px] h-[25px]  rounded " /> */}
           {project.icon}
            <Link to={project.url}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
