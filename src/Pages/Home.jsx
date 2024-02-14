import React  from "react";
import Cards from "../Components/Cards";
import { useState,useEffect } from "react";
import Getallmemes from "../Api/Memes";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage (){

    const [data,setdata]=useState([]);
useEffect((()=>{
    Getallmemes().then((memes)=>{setdata(memes.data.memes)});
}),[])
return (
    <>
    
      <div className="row">
        {data.map((ele) => <Cards title={ele.name} img={ele.url} />)}
      </div>
    
  </>
  
)

}

export default HomePage;