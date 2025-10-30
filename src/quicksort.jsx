import React from "react";
import {useContext } from "react";
import {ArrayContext} from "./ArrayGenerator";


export const useQuickSort=()=>{

   const{array,setArray,setHighlighted,speed,setSorted}=useContext(ArrayContext);

    const sleep=(ms)=>new Promise(resolve=>setTimeout(resolve,ms));

     let arrayCopy=[...array];
     const quickSortFunction=async()=>{
  
    const quickSort=async(start,end,arrayCopy)=>{

        if(start>=end) return;
        let pivot= await pivotFunction(start,end,arrayCopy);
          setSorted(()=>{
         
          let updated=[0];

          for(let k=0;k<=end;k++){

            updated.push(k);
          }
           
          return updated;

        });

       await  quickSort(start,pivot-1,arrayCopy);//error here

       await  quickSort(pivot+1,end,arrayCopy);

         
    }

     await quickSort(0,arrayCopy.length-1,arrayCopy);
     setHighlighted({i:null,j:null});
     setSorted([...Array(arrayCopy.length).keys()]);
     setArray([...arrayCopy]);
     
  }

    const pivotFunction=async(start,end,arrayCopy)=>{

     let pivot=end;
     let j=start-1;
     let i=start;

     for(i=start;i<end;i++){
          
        if(arrayCopy[i]<arrayCopy[pivot]){

           j++;
           setHighlighted({i:i,j:j});
           await sleep(speed);

         
          let temp=arrayCopy[i];
          arrayCopy[i]=arrayCopy[j];
          arrayCopy[j]=temp;

          
            setArray([...arrayCopy]);
            await sleep(speed);

            setHighlighted({i:i,j:j});
           await sleep(speed);

        }

     }

       
          

            j++;
           setHighlighted({i:i,j:j});
           await sleep(speed);

     
      let temp=arrayCopy[j];
      arrayCopy[j]=arrayCopy[pivot];
      arrayCopy[pivot]=temp;

            setArray([...arrayCopy]);
            await sleep(speed);

            
          setHighlighted({i:i,j:j});
           await sleep(speed);

          
          
      return j;

    
    }      
  
   
  
return quickSortFunction;

}

