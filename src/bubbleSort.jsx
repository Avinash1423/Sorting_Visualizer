import React from "react";
import { useContext } from "react";
import { ArrayContext } from "./ArrayGenerator";


export const useBubbleSort=()=>{

const{setArray,array,setHighlighted,speed,setSorted}=useContext(ArrayContext);

const sleep=(ms)=>new Promise((resolve=>setTimeout(resolve,ms)));
 

 const bubbleSortFunction=async()=>{

  let SortedArray=[];
  let arr=[...array];
  
  for(let i=0;i<arr.length;i++){


    for(let j=0;j<arr.length-i-1;j++){

      
       setHighlighted({i:j,j:j+1});
        

       await sleep(speed);
       if (arr[j]>arr[j+1]){

          let temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;

 
         setArray([...arr]);  
         
         await sleep(speed);
      
       }
       setHighlighted({i:null,j:null});
   

       
            
    }
           
          setSorted(prev=>[...prev,arr.length-i-1]);


  }
   setHighlighted({i:null,j:null});
   

  SortedArray=arr;
  setArray(SortedArray);
  setSorted([...Array(arr.length).keys()]);
}

return bubbleSortFunction;
}







