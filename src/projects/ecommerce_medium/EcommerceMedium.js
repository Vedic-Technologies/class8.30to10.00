import React, { useEffect, useState } from 'react'

const EcommerceMedium = () => {

  const [data,setData]=useState();

  useEffect(()=>
  {
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res=>{setData(res.products);console.log(res)});
  },[])

const showdata=()=>
  {
    data.map((product)=>console.log(product.title))
  }

  return (
    <div className=' w-full bg-blue-400 flex '>
      <div className=" left min-w-72 bg-red-300">left</div>
  <div className="right mt-10 ">
     <div className="text-2xl text-center"> All Products</div>
     <div className="flex flex-wrap m-auto w-[90%] gap-10 cente mt-10 ">
   
   {data && data.map((product)=>
  {
    return(
      <>       
       <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className=" center border-b-2 border-gray-500"><img className=" h-[250px]  object-cover" src={product.images[0]} alt={product.title} /></div>
    
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{product.title}</div>
      
      <p className="text-gray-700 text-base">
        {product.description}
      </p>
      
      <div className="mt-2 text-gray-600 text-sm">
        Category: {product.category}
      </div>
      <div className="mt-2 text-pink-600 text-lg font-semibold">
        ${product.price.toFixed(2)} <span className="line-through text-gray-500">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
      </div>
      <div className="flex items-center mt-2">
        <strong>Rating:</strong>
        <span className="ml-2">{product.rating}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-green-600">{product.availabilityStatus}</span>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  </div>
      </>
    )
  })} </div>
  </div>
 
  
    </div>
  )
}

export default EcommerceMedium 