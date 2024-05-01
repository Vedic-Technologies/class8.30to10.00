import React, { useState } from "react";
import { motion } from "framer-motion";


const AnimatedDropdown = () => {

    const [toggle, setToggle] = useState(false);
    const [selectedItem, setSelectedItem] = useState({
      id: 0,
      text: "select Item",
    });
  
    const mediaText = [
      { id: 1, text: "Facebook",icon:<i class="fa-brands fa-facebook text-blue-700"></i> },
      { id: 2, text: "Twitter",icon:<i class="fa-brands fa-x-twitter text-black"></i>},
      { id: 3, text: "YouTube", icon : <i class="fa-brands fa-youtube text-red-500"></i>},
      { id: 4, text: "Linkin",icon: <i class="fa-brands fa-linkedin text-blue-600"></i> },
    ];
    const handleItemClick = (item) => {
      setToggle(!toggle);
      setSelectedItem(item);
    };
  

  return (
    <div className="h-screen w-full bg-blue-300  center ">
    <div id="dropdown">
      <div
        className="border border-zinc-600 bg-white rounded select-none
w-48 flex justify-between px-2 cursor-pointer py-[1px]"
        onClick={() => setToggle(!toggle)}
      >
        <div className="">
          {selectedItem ? selectedItem?.text : "Select Item"}{" "}
        </div>

        <motion.div
         animate={{ rotate: toggle ? 180 : 0 }}
         transition={{ duration: 0.2}}
         drag
         >
          <i className="fa-solid fa-angle-down"></i>
        </motion.div>
        
      </div>

      {toggle && (
        <div className="mt-3 bg-white p-1 absolute w-48">
          <ul className=" divide-slate-400">
            {mediaText.map((item,index) => {
              return (
                <motion.li  
                initial={{x:-250}}
                animate={{x:0}}    
                transition={{ delay:index*0.2}}   
                  key={item.id}
                  className="cursor-pointer mt-1 fon rounded hover:bg-red-400 px-1 py-[2px] "
                  onClick={() => handleItemClick(item)}
                >
                  <motion.div className="flex gap-2"
                  initial={{x:0}}
                  whileHover={{x:10, duration:0.3}}
                 
                  >
                    <div className="text-blue-500">{item.icon}</div>
                    <div className="">{item.text}</div>
                  </motion.div>
                  
                </motion.li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  </div>
  )
}

export default AnimatedDropdown