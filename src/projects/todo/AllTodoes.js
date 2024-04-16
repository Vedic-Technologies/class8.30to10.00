import React from 'react'

const AllTodoes = () => {
  return (
    <div className='bg-blue-300 h-[450px] w-4/5 m-auto rounded-3xl mt-5'>
     
      <div className="flex p-5 gap-10 items-center">

       <div className=" flex flex-col items-start">
        <div className="">Todo</div>
        <input type="text" className='w-60 p-2'/>
       </div>
       <div className=" flex flex-col items-start ">
        <div className="">Shedule</div>
        <input type="password" className='w-60 p-2'/>
       </div>

       <div className="bg-blue-700 text-white py-2 px-7 cursor-pointer hover:bg-blue-900 text-xl rounded-lg"
       onClick={()=>alert("working")}
       >Add Todo</div>

</div> 
       
    </div>
  )
}

export default AllTodoes
