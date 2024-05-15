import React, { useState } from "react";
import Projects from "./Projects";

const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className="bg-gray-200 text-white w-[400px] h-full p-10 mt-10 hidden xl:block">
      <Projects difficultyLevel="Beginner" selectedItem={selectedItem} handleItemClick={handleItemClick} />
      <Projects difficultyLevel="Intermediate" selectedItem={selectedItem} handleItemClick={handleItemClick} />
      <Projects difficultyLevel="Advanced" selectedItem={selectedItem} handleItemClick={handleItemClick} />
    </div>
  );
};

export default SideBar;
