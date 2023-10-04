import React, { useEffect, useState } from 'react'



const BLogPost = ({title,cD,sub}) => {
    const [img, setImg] = useState("")


    
    
  return (
    <>
    <h1 className=' w-full text-5xl text-white font-bold  text-center'>{title}</h1>
    <form onSubmit={(e)=>sub(e)} className="flex w-full h-screen flex-col items-start gap-10 pt-10 text-black ml-24 relative">

        <img src={img} alt="" className='w-[300px] h-[170px] bg-yellow-300 absolute top-0 right-52 rounded-3xl ring-4 ring-blue-500' />
        <input type="text" placeholder='Enter Blog Title ' className=' w-[60%] h-10 pl-4 rounded-3xl ring-4 ring-blue-500 outline-none' />
        <input type="text" placeholder='Enter Image Url ' onChange={(e)=>setImg(e.target.value)} className=' w-[60%] h-10 pl-4 rounded-3xl ring-4 ring-blue-500 outline-none' />
        <textarea  placeholder='Write your Blog content'className=' w-[80%] h-48 pl-4 rounded-3xl ring-4 ring-blue-500 outline-none p-4'   ></textarea>
        <div className="flex w-[80%] gap-4">

        <input type="text" placeholder='Enter Blog Tag' className=' w-1/2 h-10 pl-4 rounded-3xl ring-4 ring-blue-500 outline-none' />
        <input type="text" placeholder='Enter Blog Cat' className=' w-1/2 h-10 pl-4 rounded-3xl ring-4 ring-blue-500 outline-none' />
        </div>
        <input type="text" placeholder='Enter Blog Slug' className=' w-[80%] h-10 pl-4 rounded-3xl ring-4 ring-blue-500 outline-none' />
        <button className=' w-[80%] h-10 pl-4 rounded-3xl ring-4 ring-blue-500 outline-none bg-blue-800 text-white' type='submit' >Submit</button>
        </form>

    </>
  )
}

export default BLogPost