import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const projects = [
        {
          id: 1,
          title: "Calculator",
          image: "https://www.codewithfaraz.com/img/calculator.png",
          detail: "A fully functional e-commerce website built with React and Node.js.",
          languagesUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
          url:"/calculator"
        },
        {
          id: 2,
          title: "Bmi Calculator",
          image: "https://media.licdn.com/dms/image/D4D12AQHWPdY9noLMYA/article-cover_image-shrink_720_1280/0/1700389480737?e=2147483647&v=beta&t=ouROI_aHlq--fo4w7JE6jrvmdv3zNEspcyp7O-ssjRg",
          detail: "A blog application where users can create, read, update, and delete blog posts.",
          languagesUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
          url:"/bmicalculator"
        },
        {
          id: 3,
          title: "Todo Application",
          image: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/cover-1.png",
          detail: "A Todo application where users can create, read, update, and delete todoes.",
          languagesUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
          url:"/todo"
        },

        {
          id: 3,
          title: "ShowPasswordIcon Application",
          image: "https://www.csestack.org/wp-content/uploads/2021/02/password-show-hide-for-login-form.png",
          detail: "A ShowPasswordIcon application where users can see password by clicking  show password icon",
          languagesUsed: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
          url:"/show_password_icon"
        },
        {
          id: 4,
          title: "Small Todo Application",
          image: "https://foolishdeveloper.com/wp-content/uploads/2021/11/todo-list-javascript.jpg",
          detail: "A small todo app where user can add and delete todo from todo application",
          languagesUsed: ["HTML", "CSS", "React"],
          url:"/small_todo_app"
        },
        // Add more projects as needed
      ];

  


  return (
    <>
    
    
    <div className='flex  w-screen'>
    <div className=" flex w-[80%] mx-auto mt-10 gap-10  flex-wrap justify-center lg:flex-col xl:flex-row">
      {
  projects.map((project) => (
    
    <Link to={project.url} key={project.id} className=' xl:w-[45%] lg:w-full w-full'>
      <div className="flex flex-col cursor-pointer border-2 border-gray-400 lg:h-[250px] h-[500px] rounded shadow-lg lg:flex-row md:flex-col  ">       
        <div className="flex-1 bg-cover m-3 border-2 rounded-lg" style={{ backgroundImage: `url(${project.image})` }}></div>
        <div className="flex-1 px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.title}</div>
          <p className="text-gray-700 text-base">{project.detail}</p>
          <div className="mt-4">
            {project.languagesUsed.map((language) => (
              <span
                key={language}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  ))
}
</div>




    </div>
    </>
  )
}

export default Home
