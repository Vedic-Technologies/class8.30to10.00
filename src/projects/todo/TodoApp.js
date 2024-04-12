import React from "react";

const TodoApp = () => {
  return (
    <div>
      <div className="text-5xl mt-10 text-blue-700 ">Todo Application</div>

      <div className="mt-10 w-[80%] h-[450px] m-auto  ">

        <div className=" text-[20px] font-semibold flex py-2  items-center shadow-xl rounded-full justify-around border-2 border-gray-300">
        
        
         <div className="flex border-2 border-red-300 items-center justify-center bg-red-200 py-2 px-16 rounded-full cursor-pointer min-w-[350px] text-center">
         <div className="">All Todoes</div>
         <div className="bg-red-500 text-white h-8 w-8 rounded-full ml-3 ">5</div>
         </div>
        
         <div className="flex items-center justify-center bg-blue-200 py-2 px-16 rounded-full cursor-pointer min-w-[350px]">
         <div className="">In Progress</div>
         <div className="bg-blue-500 text-white h-8 w-8 rounded-full ml-3 ">5</div>
         </div>
         <div className="flex items-center bg-blue-200 py-2 px-16 rounded-full cursor-pointer min-w-[350px] text-center">
         <div className="">Completed Todoes</div>
         <div className="bg-blue-500 text-white h-8 w-8 rounded-full ml-3 ">5</div>
         </div>
        </div>

        <div className="mt-5 bg-green-400 h-full rounded-[40px]">All items ....</div>

      </div>
    </div>
  );
};

export default TodoApp;
