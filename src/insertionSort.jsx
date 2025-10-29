import React from "react";
import { useContext } from "react";
import { ArrayContext } from "./ArrayGenerator";

export const useInsertionSort=()=>{

const{array,setArray,setHighlighted,speed,setSorted}=useContext(ArrayContext);

let arrayCopy=[...array];

const sleep=(ms)=>new Promise((resolve=>setTimeout(resolve,ms)));


const insertionSortFunction=async()=>{

const insertionSort=async(arrayCopy)=>{

for(let i=0;i<arrayCopy.length;i++){

    let key=arrayCopy[i];
    let j=i-1;

     setHighlighted({i:i,j:j});
     await sleep(speed);

    while(j>=0 && arrayCopy[j]>key){

       arrayCopy[j+1]= arrayCopy[j];

      j--;

     setHighlighted({i:i,j:j});
     await sleep(speed);
    }
     
     setArray([...arrayCopy]);
     await sleep(speed);

    setSorted(()=>{

    let updated=[];
   for(let k=0;k<=i;k++){

       updated.push(k);

   }
   return updated;
})

   await sleep(speed);
   arrayCopy[j+1]=key;
 setArray([...arrayCopy]);
 await sleep(speed);

}


setHighlighted({i:null,j:null});
setArray(arrayCopy);
}

await insertionSort(arrayCopy);

}



return insertionSortFunction;

}