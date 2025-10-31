import React, { useState } from "react";
import {createContext } from "react";

export const ArrayContext=createContext();

export const ArrayContextProvider=(props)=>{

    const[array,setArray]=useState([]);
    const[speed,setSpeed]=useState(0);
    const[seletcedMethod,setSeletcedMethod]=useState("");
    const[run,setRun]=useState(false);

    //
    const[highlighted,setHighlighted]=useState({i:null,j:null}); 
    const[sorted,setSorted]=useState([]);
    
  
    

const createNewArray=(size)=>{
const newArray=[];
for(let i=0;i<size;i++){

newArray.push(Math.floor(Math.random()*100)+1);

}

setArray(newArray);

}

return (

    <ArrayContext.Provider value={{createNewArray,array,setArray,seletcedMethod,setSeletcedMethod,highlighted,setHighlighted,speed,setSpeed,sorted,setSorted,run,setRun}}>
        {props.children}
    </ArrayContext.Provider>

);

}


