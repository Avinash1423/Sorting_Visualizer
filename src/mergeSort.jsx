import React from "react";
import { useContext } from "react";
import { ArrayContext } from "./ArrayGenerator";

export const useMergeSort=()=>{

const{array,setArray,setHighlighted,speed,setSorted}=useContext(ArrayContext);
const sleep=(ms)=>new Promise((resolve=>setTimeout(resolve,ms)));  
let arrayCopy=[...array];

const mergeSortFunction=()=>{

 


const mergeSort=(arrayCopy)=> {

if(arrayCopy.length<=1) return;

let middle=Math.floor(arrayCopy.length/2);

let leftArray=new Array(middle);
let rightArray=new Array(arrayCopy.length-middle);


for(let i=0;i<arrayCopy.length;i++){

     if(i<middle) {
      leftArray[i]=arrayCopy[i];
        
     }
     else{
       rightArray[i-middle]=arrayCopy[i];
     }

}



mergeSort(leftArray);
mergeSort(rightArray);


merge(leftArray,rightArray,arrayCopy);

    }
    
       mergeSort(arrayCopy);
       setArray(arrayCopy);
   

}


const merge=async(leftArray,rightArray,arrayCopy)=>{

    
   let r=0;
   let l=0;
   let i=0;

   setSorted(prev=>[...prev,arrayCopy]);

   while(l<leftArray.length && r<rightArray.length){

       if(leftArray[l]<=rightArray[r]){

        arrayCopy[i]=leftArray[l];
        l++;

       }
       else if(rightArray[r]<leftArray[l]){

        arrayCopy[i]=rightArray[r];
        r++;

       }

      i++;

      
   }

   while(l<leftArray.length)
    {  
    arrayCopy[i++]=leftArray[l++];
      
    }

     while(r<rightArray.length)
        {
    arrayCopy[i++]=rightArray[r++];
   

        }


}


return mergeSortFunction;
}