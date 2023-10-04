import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import BLogPost from "./BLogPost";
import BlogCard from "./BlogCard";
import UpdatBlogPost from "./UpdateBlogPost";


function App() {

  const [getDATA, setGetDATA] = useState()
  const [ushow, setUShow] = useState(false)
  const [cshow, setCShow] = useState(false)
  const [uData, setUData] = useState({})
  


  // {
  //   title: "this is first001",
  //   imgUrl: "img.jpg001",
  //   content: "this is first content001",
  //   tag: "normal",
  //   cat: "internet",
  //   slug: "this-is-first-001",
  // }

  const hello = async (e) => {
    e.preventDefault()
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);
    // console.log(e.target[3].value);
    // console.log(e.target[4].value);
    // console.log(e.target[5].value);
    // return
    const res = await axios.post(
      "https://expertdevelopersblog.vercel.app/api/blog",
        {
    title: e.target[0].value,
    imgUrl: e.target[1].value,
    content: e.target[2].value,
    tag: e.target[3].value,
    cat: e.target[4].value,
    slug:e.target[5].value,
  }
      ,
      {
        header: { "Content-Type": "application/json" },
      }
    );

    let d = await res.data;

    console.log(d);
    helloget()
    setCShow(false)
  };


  const helloUpdate = async (e) => {
    e.preventDefault()
    const id = JSON.parse(localStorage.getItem("datas"))
    const res = await axios.put(
      `https://expertdevelopersblog.vercel.app/api/blog/${id.id}`,
      {
        title: e.target[0].value,
        imgUrl: e.target[1].value,
        content: e.target[2].value,
        tag: e.target[3].value,
        cat: e.target[4].value,
        slug:e.target[5].value,
      },
      {
        header: { "Content-Type": "application/json" },
      }
    );

    let d = await res.data;
    
    

    console.log(d);
    setUShow(false)
    helloget()

  };
  const helloget = async () => {
    const res = await axios.get(
      `https://expertdevelopersblog.vercel.app/api/blog`
    );

    let d = await res.data;

    console.log(d);
    setGetDATA(d)
  };
  const hellodel = async (id) => {
    const res = await axios.delete(
      `https://expertdevelopersblog.vercel.app/api/blog/${id}`
    );

    let d = await res.data;

    console.log(d);
    helloget()
  };


  useEffect(() => {
    
    helloget()
  
    
  }, [])
    

  return (
    <>
    <div className="w-full h-auto ">
      <button className=" bg-white p-4 " onClick={()=> setCShow(!cshow)}>➕</button>
    </div>
    {
      ushow && <UpdatBlogPost title={"Update Blog Post"}  sub={helloUpdate} od={uData}  />
    }
    {
      cshow && <BLogPost title={"Create Blog Post"}  sub={hello} />
    }
          

    <div className="w-full  min-h-screen  flex flex-wrap justify-center gap-12 p-4">
    
    {
      getDATA?.blog.map((e,i)=>

        <BlogCard key={i} d={e} us={setUShow} u={ushow} del={hellodel} />
      
      )
    }
     
    </div>



          </>
  );
}

export default App;