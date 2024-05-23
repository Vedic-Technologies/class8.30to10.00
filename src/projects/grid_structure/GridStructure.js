import React, { useEffect, useState } from 'react';

const CardComponent = () => {
  const [name, setName] = useState('');
  const [work, setWork] = useState('');
  const [marks, setMarks] = useState('');

  const [user,setUser]=useState(null)

  const [items, setItems]=useState([]);
  
useEffect(()=>
{
const temp_items=localStorage.getItem('my_items');
setItems(JSON.parse(temp_items))
},[])

const addCard=()=>
  {
    setItems([...items,{name:name,work:work,marks:marks}])
console.log(items);
localStorage.setItem('my_items',JSON.stringify([...items,{name:name,work:work,marks:marks}]))
  
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-72 bg-blue-200 rounded-xl p-10 mb-10">
        <input 
          type="text" 
          name="name" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Name"
          className="mb-2 p-1 w-full"
        />
        <input 
          type="text" 
          name="work" 
          value={work}
          onChange={(e)=>setWork(e.target.value)}
          placeholder="Work"
          className="mb-2 p-1 w-full"
        />
        <input 
          type="text" 
          name="marks" 
          value={marks}
          onChange={(e)=>setMarks(e.target.value)}
          placeholder="Marks"
          className="mb-4 p-1 w-full"
        />

        <button className='bg-blue-700 text-white text-2xl mt-4 py-1 px-10 rounded-xl'
        onClick={()=>addCard()}
        >+</button>
      </div>

      {/* card */}
<div className="flex gap-10 flex-wrap">
{items && (items.map((item)=>{
  return(
    
    <div className="w-72 bg-white rounded-xl shadow-lg p-4 flex ">
<div           
  className="size-24 mr-4 uppercase rounded-md bg-blue-700 center text-white font-semibold text-7xl"
><div>{item.name[0]}</div></div>
<div>
  <h2 className="text-3xl font-bold">{item.name}</h2>
  <div className="text-lg tracking-widest ">{item.work}</div>
  <p className="text-lg">{item.marks}</p>
</div>
</div>
    
  )
})
)
}
</div>    
     

     
    </div>
  );
}

export default CardComponent;
