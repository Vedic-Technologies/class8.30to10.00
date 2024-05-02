import logo from "./logo.svg";
import "./App.css";
import BmiCalculator from "./projects/bmi calculator/BmiCalculator";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TodoApp from "./projects/todo/TodoApp";
import ShowPasswordIcon from "./projects/show_password_icon/ShowPasswordIcon";
import Navbar from "./components/Navbar";
import SmallTodoApp from "./projects/small_todo_project/SmallTodoApp";
import ResponsiveNavbar from "./projects/small/responsive_navbar/ResponsiveNavbar";
import StudentsProject from "./Pages/StudentsProject";
import SideBar from "./components/SideBar";
import MainContent from "./Pages/MainContent";
import ProjectCard from "./projectList/ProjectCard";
import AnimatedDropdown from "./projects/anomated_dropdown/AnimatedDropdown";
import ListOfItems from "./projects/list_of_items/ListOfItems";

function App() {
  return (
    <div className="App">
      <Navbar />

     
      <div className="flex h-screen">
        <SideBar />
        <MainContent>
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<BmiCalculator />} />
            <Route path="/bmicalculator" element={<BmiCalculator/>} />
            <Route path="/show_password_icon" element={<ShowPasswordIcon />} />
            <Route path="/todo/*" element={<TodoApp/>} />
            <Route path="/small_todo_app" element={<SmallTodoApp />} />
            <Route path="/students_projects" element={<StudentsProject />} />
            <Route path="/responsive_navbar" element={<ResponsiveNavbar />} />
            <Route path="/animated_dropdown" element={<AnimatedDropdown/>} />
            <Route path="/list_of_items" element={<ListOfItems/>} />
            <Route path="/:id" element={<ProjectCard/>}/>
            {/* Add more routes as needed */}
         </Routes>
        </MainContent>
      </div>
     
    </div>
  );
}

export default App;
