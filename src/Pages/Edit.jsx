import React, { useState,createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Cards from "../Components/Cards";
import { Button } from "react-bootstrap";
import Text from "../Components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
function EditImage() {
  const [params] = useSearchParams();
  console.log(params);
  const [count,setCount]= useState(0);
  const memeref= createRef();
  function addText(){
   
setCount(count+1);
console.log("Added text");

  }

  return (
    <div>
       <div ref={memeref}>
        <div style={{margin:"5px"}}>
     <img src={params.get("url")} style={{height:"500px", width:"auto"}}/>
     </div>
     
     {
  Array(count).fill(0).map((e, index) => (
    <Text key={index} />
  ))
}
     </div>
     <div>
     <Button style={{margin:"5px"}} onClick={addText}>EditMemes</Button>
     <Button style={{margin:"5px"}} onClick={(e)=>exportComponentAsJPEG(memeref)} >SaveMemes</Button>

     </div>
  
    </div>
  );
}

export default EditImage;
