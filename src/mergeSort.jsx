import React from "react";
import { useContext } from "react";
import { ArrayContext } from "./ArrayGenerator";

export const useMergeSort=()=>{

const{array,setArray,setHighlighted,speed,setSorted}=useContext(ArrayContext);
const sleep=(ms)=>new Promise((resolve=>setTimeout(resolve,ms)));  
let arrayCopy=[...array];

const mergeSortFunction=async()=>{

 
const mergeSort=async(arrayCopy,start,end)=> {

if(start >= end) return;

let middle=Math.floor((start+end)/2);


await mergeSort(arrayCopy,start,middle);    // merge sort left array//outcome?
await mergeSort(arrayCopy,middle+1,end);// merge right  array

await merge(arrayCopy,start,middle,end);

    }
    
  await mergeSort(arrayCopy,0,arrayCopy.length-1); //* start
       setArray([...arrayCopy]); 
     setHighlighted({i:null,j:null});  
     setSorted([...Array(arrayCopy.length).keys()]);
   
}


const merge=async(arrayCopy,start,middle,end)=>{


    let leftArray=arrayCopy.slice(start,middle+1);
    let rightArray=arrayCopy.slice(middle+1,end+1);


   let l=0;
   let r=0;
   let i=start;


   while(l<leftArray.length && r<rightArray.length){

     setHighlighted({i:l,j:r});
     await sleep(speed);

   if(leftArray[l]<=rightArray[r]){

      arrayCopy[i++]=leftArray[l++];

   }
   else{

      arrayCopy[i++]=rightArray[r++]
   }
   setArray([...arrayCopy]); 
   

   
}

   while(l<leftArray.length){ 
    setHighlighted({i:l,j:r});
     await sleep(speed);
    arrayCopy[i++]=leftArray[l++];
    setArray([...arrayCopy]); 
    
}

   while(r<rightArray.length){
    setHighlighted({i:l,j:r});
     await sleep(speed);
     arrayCopy[i++]=rightArray[r++];
     setArray([...arrayCopy]); 
    }

    setSorted(()=>{

     const updated=[];
     for(let i=start;i<=end;i++) updated.push(i);
     return updated;
     
   }


    );

     await sleep(speed);

}


return mergeSortFunction;
}