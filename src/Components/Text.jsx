import React, { useState } from "react";
import Draggable from 'react-draggable'; // The default
function Text (){
    const [edit,setEdit]= useState(false);
const [val,setVal] =useState("Double Click You Can Edit Boss");

    return (
        <>
        <Draggable>
           {
           edit ? (<input onDoubleClick={(e)=>setEdit(false)}
           value={val}
           onChange={(e) => setVal(e.target.value)}
           />) :(<h5 onDoubleClick={(e)=>{
            setEdit(true)
           }}> Hi you Can Edit Me On Double Click</h5>)
           } 
    
        </Draggable>
        </>)
}
export default Text;