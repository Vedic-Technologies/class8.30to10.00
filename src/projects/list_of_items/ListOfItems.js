import React, { useState } from "react";
import items from "./Items";
import { Link } from "react-router-dom";
const ListOfItems = () => {
    const [selected, setSelected]=useState(0);
    const dosomething=(id)=>{
        setSelected(id);
        
    }
  return (
    <div className="bg-red-300 w-full h-full center">
      <div className="w-2/5 h-full bg-blue-200 flex flex-col pt-20 px-5 gap-10  items-start justify-start mt-32 overflow-auto   ">
        {items.map((list) => (
          <div

         
            className={`w-full border-2 p-5  text-left rounded-lg select-none  ${selected === list.id ?'bg-red-800 text-white':'bg-white hover:bg-red-300'} `}
            key={list.id}
          >
            <div className={`text-lg w-full cursor-pointer`}
            onClick={()=>dosomething(list.id)}
            >
              {list.title}
            </div>           
          </div>
        ))}
      </div>
      <div className="w-3/5 h-full center bg-green-200 text-lg ">More Functionality in <Link className="text-blue-600 ml-2" > Here</Link></div>
   
    
    </div>
  );
};

export default ListOfItems;
