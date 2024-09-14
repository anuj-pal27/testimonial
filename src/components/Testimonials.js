import { Card } from "./Card"
import React, { useState } from 'react';
import {FiAlignLeft, FiChevronLeft,FiChevronRight} from "react-icons/fi";

const Testimonials=({data})=>{
    let [index,setIndex] =useState(0);
function leftShiftHandler(){
if(index-1<0){
     index=data.length-1;
}else{
    index=index-1;
}
setIndex(index);
}
function rightShiftHandler(){
  
if(index+1>=data.length){
    index=0;
}
else{index=index+1}
setIndex(index);
}
function surpriseHandler(){
  let randomIndex=  Math.floor(Math.random()*data.length)
    setIndex(randomIndex);
}

return (<div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center 
mt-10 p-10 transition-all duration-700 rounded-lg hover:shadow-xl">
    <Card data={data[index]}/>
    <div className="flex text-3xl mt-7 gap-3 text-violet-400 font-bold mx-auto">
            <button className="cursor-pointer hover:text-violet-500" onClick={leftShiftHandler}><FiChevronLeft/></button>
            <button className="cursor-pointer hover:text-violet-500" onClick={rightShiftHandler}><FiChevronRight/></button>
        </div>
        <div className="mt-6">
            <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 
            cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg" onClick={surpriseHandler}>Surprise Me</button>
        </div>
</div>)
}
export default Testimonials;