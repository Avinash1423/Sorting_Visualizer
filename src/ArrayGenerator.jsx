import React, { useState } from "react";
import {createContext } from "react";

export const ArrayContext=createContext();

export const ArrayContextProvider=(props)=>{

    const[array,setArray]=useState([])

const createNewArray=(size)=>{
const newArray=[];
for(let i=0;i<size;i++){

newArray.push(Math.floor(Math.random()*100)+1);

}

setArray(newArray);

}

return (

    <ArrayContext.Provider value={{createNewArray,array}}>
        {props.children}
    </ArrayContext.Provider>

);

}


