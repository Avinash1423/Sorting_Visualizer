import { useState,useContext } from "react"
import  './navBar.css';
import { ArrayContext } from "./ArrayGenerator";
import { useEffect } from "react";
import {useBubbleSort} from "./bubbleSort";
import { useMergeSort } from "./mergeSort";
import { useInsertionSort } from "./insertionSort";
import {useSelectionSort } from "./selectionSort";

const NavBar=()=>{

    const{createNewArray,setSpeed,setSorted}=useContext(ArrayContext);
    const[seletcedMethod,setSeletcedMethod]=useState("bubble");
    const[range,setRange]=useState(20);
    const bubbleSortFunction=useBubbleSort();
    const mergeSortFunction=useMergeSort();
    const insertionSortFunction=useInsertionSort();
    const selectionSortFunction=useSelectionSort();
    const[time,SetTime]=useState(0);
   
const newMethod=(e)=>{

setSeletcedMethod(e.target.value);


}

const sortButtonFunction=()=>{

if(!seletcedMethod){

    alert("Please select a Sorting Algorithm");
}
else if(seletcedMethod=="bubble"){

bubbleSortFunction();

}

else if(seletcedMethod=="merge"){


mergeSortFunction();

}

else if(seletcedMethod=="insertion"){


insertionSortFunction();

}

else if(seletcedMethod=="selection"){


selectionSortFunction();

}

else {


    alert("Sorting fucntion to be implemented");
    //call the relevant function and pass the array

}

}  

const sliderMin=0;//ms
const sliderMax=1000;//ms

const rangeChange=(e)=>{

    const newRange=Number(e.target.value);
    setRange(newRange);
    createNewArray(newRange);
    
}

const timeChange=(e)=>{

    const newTime=Number(e.target.value);
    const delay=sliderMax-newTime;
    SetTime(delay);  
    setSpeed(delay);
    
}

useEffect(()=>{createNewArray(20)},[])

const createNewArrayButtonFunction=()=>{

    if(range){
        createNewArray(range);
        setSorted([]);
    }
    else
        {
            createNewArray(20);
             setSorted([]);
            
        }


}

return(

<div className="main">
      


<div className="slider">
     <p className="arraySizeText">Array Size</p>
    <input 
    type="range"
    min="20"
    max="100"
    value={range}
    onChange={rangeChange}
    />
</div>

<div className="slider">
     <p className="arraySizeText">Sorting Speed</p>
    <input 
    type="range"
    min={sliderMin}
    max={sliderMax}
    value={sliderMax-time}
    onChange={timeChange}
    />
</div>

<div className="selectionList">
<select id="sortingMethod" value={seletcedMethod} onChange={newMethod} >
   
    <option value="bubble">Bubble Sort</option>
    <option value="merge">Merge Sort</option>
    <option value="insertion">Insertion Sort</option>
    <option value="quick">Quick Sort</option>
    <option value="selection">Selection Sort</option>
</select>
</div>

<button className="sortButton" onClick={sortButtonFunction}>Sort</button>
<button className="createNewArrayButton" onClick={createNewArrayButtonFunction}>Create New Array </button>

</div>


)
}

export default NavBar
