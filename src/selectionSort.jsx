import React from "react";
import { useContext } from "react";
import { ArrayContext } from "./ArrayGenerator";

export const useSelectionSort=()=>{

const{array,setArray,setHighlighted,speed,setSorted}=useContext(ArrayContext);

const selectionSortFunnction=async()=>{
     
    const sleep=(ms)=>new Promise(resolve=>(setTimeout(resolve,ms)));
    let arrayCopy=[...array];

 const selectionSort=async()=>{

    for(let i=0;i<arrayCopy.length;i++){

        let min=i;

    for(let j=i+1;j<arrayCopy.length;j++){

        setHighlighted({i:min,j:j});
        await sleep(speed);

           if(arrayCopy[min]>arrayCopy[j]){

            min=j;
        setHighlighted({i:min,j:j});
        await sleep(speed);
           }
        }

        let temp=arrayCopy[i];
        arrayCopy[i]=arrayCopy[min];
        arrayCopy[min]=temp;

        setArray([...arrayCopy]);
        await sleep(speed);

        
        setSorted(prev=>[...prev,i]);
        await sleep(speed);

    

        

    }

 // setSorted([...Array(arrayCopy.length).keys()]);
 setHighlighted({i:null,j:null});
  setArray([...arrayCopy]);
 }

await selectionSort(arrayCopy);

    }

 return selectionSortFunnction;

}