import { useState,useContext } from "react"
import  './navBar.css';
import { ArrayContext } from "../../ArrayGenerator";
import { useEffect } from "react";
import {useBubbleSort} from "../../algorithms/bubbleSort";
import { useMergeSort } from "../../algorithms/mergeSort";
import { useInsertionSort } from "../../algorithms/insertionSort";
import {useSelectionSort } from "../../algorithms/selectionSort";
import {useQuickSort} from "../../algorithms/quicksort";


const NavBar=()=>{

    const{createNewArray,setSpeed,setSorted,setRun,run,seletcedMethod,setSeletcedMethod}=useContext(ArrayContext);
    const[range,setRange]=useState(20);
    const[time,SetTime]=useState(0);
    
    const bubbleSortFunction=useBubbleSort();
    const mergeSortFunction=useMergeSort();
    const insertionSortFunction=useInsertionSort();
    const selectionSortFunction=useSelectionSort();
    const quickSortFunction=useQuickSort();
   
   
const newMethod=(e)=>{

setSeletcedMethod(e.target.value);


}

const sortButtonFunction=async()=>{

if(!seletcedMethod){

    alert("Please select a Sorting Algorithm");
}
else if(seletcedMethod=="bubble"){
setRun(true);
await bubbleSortFunction();
setRun(false);

}

else if(seletcedMethod=="merge"){

setRun(true);
await mergeSortFunction();
setRun(false);
}

else if(seletcedMethod=="insertion"){

setRun(true);
await insertionSortFunction();
setRun(false);
}

else if(seletcedMethod=="selection"){

setRun(true);
 await selectionSortFunction();
setRun(false);
}
else if(seletcedMethod=="quick"){

setRun(true);
await quickSortFunction();
setRun(false);
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
    setSorted([]);
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
      


<div className="slider" >
     <p className="arraySizeText">Array Size</p>
    <input 
    type="range"
    min="20"
    max="100"
    value={range}
    onChange={rangeChange}
    disabled={run}
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
<select id="sortingMethod" value={seletcedMethod} onChange={newMethod}  disabled={run}>
    <option value="" disabled hidden>Select Sorting Method</option>
    <option value="bubble">Bubble Sort</option>
    <option value="merge">Merge Sort</option>
    <option value="insertion">Insertion Sort</option>
    <option value="quick">Quick Sort</option>
    <option value="selection">Selection Sort</option>
</select>
</div>

<button className="sortButton" onClick={sortButtonFunction}  disabled={run}>Sort</button>
<button className="createNewArrayButton" onClick={createNewArrayButtonFunction}  disabled={run}>Create New Array </button>

</div>


)
}

export default NavBar
