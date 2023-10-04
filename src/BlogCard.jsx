import React from 'react'

const BlogCard = ({d ,us,u ,del}) => {

  const ssb =(d)=>{
    localStorage.setItem("datas",JSON.stringify({
      title: d.title,
      imgUrl: d.imgUrl,
      content: d.content,
      tag:d.tag,
      cat: d.cat,
      slug:d.slug,
      id:d._id,
    }))
    us(!u);
    console.log("hello");
  }

  return (
    <>

    <div className="flex w-[400px] h-[500px] bg-slate-300 rounded-3xl ring-4 ring-yellow-600 flex-col text-black relative">
        <img src={d.imgUrl} alt="" className='w-[400px] h-[250px] bg-white rounded-t-3xl' />
        <h1 className='w-full mt-3 text-center font-bold'>{d.title}</h1>
        <p  className='w-full mt-3 text-center font-bold bg-white h-[30%]  rounded-3xl overflow-hidden'>{d.content}</p>
        <h2 className='w-full mt-3 text-center font-bold  flex justify-between p-2'>
            <span>{d.cat}</span>
            <span>{d.tag}</span>
        </h2>

        <button className='p-2 bg-green-700 absolute top-0 left-0 rounded-tl-3xl rounded-br-3xl 'onClick={()=>ssb(d)}>Update</button>
        <button className='p-2 bg-red-700 absolute top-0 right-0 rounded-tr-3xl rounded-bl-3xl'  onClick={()=> del(d._id)}>Delete</button>

    </div>
    </>
  )
}

export default BlogCard