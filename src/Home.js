import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const projects = [
        {
          id: 1,
          title: "E-commerce Website",
          image: "https://www.codewithfaraz.com/img/calculator.png",
          detail: "A fully functional e-commerce website built with React and Node.js.",
          languagesUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
          url:"/calculator"
        },
        {
          id: 2,
          title: "Blog App",
          image: "https://media.licdn.com/dms/image/D4D12AQHWPdY9noLMYA/article-cover_image-shrink_720_1280/0/1700389480737?e=2147483647&v=beta&t=ouROI_aHlq--fo4w7JE6jrvmdv3zNEspcyp7O-ssjRg",
          detail: "A blog application where users can create, read, update, and delete blog posts.",
          languagesUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
          url:"/bmicalculator"
        },
        // Add more projects as needed
      ];

  


  return (
    <>
    <div className="w-screen center">
    <div className="py-5 px-10 text-5xl bg-blue-900 text-white rounded-full center w-fit m-[40%]">Class Projects</div>
    </div>
    
    <div className='flex gap-20 m-32'>
       
        {
      projects.map((project) => (
     <Link to={project.url}>
     <div key={project.id} className="cursor-pointer border-2 border-gray-400  max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={project.image} alt={project.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-700 text-base">{project.detail}</p>
            <div className="mt-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {project.languagesUsed.map((language) => (
                  <span key={language}>{language}</span>
                ))}
              </span>
            </div>
          </div>
        </div>
        </Link>
      ))
    }
    </div>
    </>
  )
}

export default Home
