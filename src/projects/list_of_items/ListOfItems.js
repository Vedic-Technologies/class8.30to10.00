import React, { useEffect, useState } from "react";

const ListOfItems = () => {
  const [allTodoes, setAllTodoes] = useState([]);
  const [completedTodoes, setCompletedTodoes] = useState([]);
  const [add, setAdd] = useState();
  const addtodo = () => {
    setAllTodoes([...allTodoes, add]);
  };

  const handleDelete = (id) => {
    const filteredTodoes = allTodoes.filter((item, index) => index !== id);
    setAllTodoes(filteredTodoes);
    localStorage.setItem("alltodoes", JSON.stringify(filteredTodoes));
  };

  const moveToComplted = (id) => {
    const filteredTodoes = allTodoes.filter((item, index) => index === id);
    setCompletedTodoes([...completedTodoes, filteredTodoes]);
    handleDelete(id);
    localStorage.setItem("completedtodoes", JSON.stringify(filteredTodoes));
  };
  const moveToAllTodoes = (id) => {
    const filteredTodoes = completedTodoes.filter(
      (item, index) => index === id
    );
    setAllTodoes([...allTodoes, filteredTodoes]);
    handleDeleteCompleted(id);
    localStorage.setItem("alltodoes", JSON.stringify(filteredTodoes));
  };

  const handleDeleteCompleted = (id) => {
    const filteredTodoes = completedTodoes.filter(
      (item, index) => index !== id
    );
    setCompletedTodoes(filteredTodoes);
    localStorage.setItem("completedtodoes", JSON.stringify(filteredTodoes));
  };

  return (
    <>
      <div className="w-full h-screen flex item center justify-center ">
        <div className="bg-red-200 p-10 h-[600px] ">
          <h1 className="text-3xl m-5">All todoes</h1>
          <div className="flex gap-5">
            <input
              type="text"
              className="w-60 px-5 py-1 rounded-md"
              onChange={(e) => setAdd(e.target.value)}
            />
            <button
              className="border border-black py-1 px-7 rounded-md bg-blue-700 text-white"
              onClick={() => addtodo()}
            >
              Add Todo
            </button>
          </div>

          {allTodoes.map((name, index) => {
            return (
              <div
                key={index}
                className="py-2 px-3 border w-60 m-2 border-blue-200 rounded-lg  flex justify-between select-none bg-white"
              >
                {name}

                <div className="flex gap-3">
                  <i
                    class="fa-regular fa-circle-right text-blue-700 cursor-pointer"
                    onClick={() => moveToComplted(index)}
                  ></i>
                  <i
                    class="fa-regular fa-trash-can text-red-500 cursor-pointer"
                    onClick={() => handleDelete(index)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-200 p-20 h-[600px] ">
          <h1 className="text-3xl m-5">Completed Todoes</h1>
          {completedTodoes.map((name, index) => {
            return (
              <div
                className={`py-2 px-3 border w-60 m-2 border-blue-200 rounded-lg  flex justify-between bg-white
                `}               
              >
                {name}
                <div className="flex gap-3">
                  <i
                    class="fa-regular fa-circle-left text-blue-700 cursor-pointer "
                    onClick={() => moveToAllTodoes(index)}
                  ></i>
                  <i
                    class="fa-regular fa-trash-can text-red-500 cursor-pointer "
                    onClick={() => handleDeleteCompleted(index)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListOfItems;
