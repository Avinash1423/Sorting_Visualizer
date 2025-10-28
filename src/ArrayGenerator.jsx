import React, { useState } from "react";
import {createContext } from "react";

export const ArrayContext=createContext();

export const ArrayContextProvider=(props)=>{

    const[array,setArray]=useState([]);
    const[speed,setSpeed]=useState(0);
    //
    const[highlighted,setHighlighted]=useState({i:null,j:null}); //bubbleSort
    const[sorted,setSorted]=useState([]);//bubbleSort
    
  
    

const createNewArray=(size)=>{
const newArray=[];
for(let i=0;i<size;i++){

newArray.push(Math.floor(Math.random()*100)+1);

}

setArray(newArray);

}

return (

    <ArrayContext.Provider value={{createNewArray,array,setArray,highlighted,setHighlighted,speed,setSpeed,sorted,setSorted}}>
        {props.children}
    </ArrayContext.Provider>

);

}


