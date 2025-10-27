import { useState,useContext } from "react"
import  './navBar.css';
import { ArrayContext } from "./ArrayGenerator";
import { useEffect } from "react";

const NavBar=()=>{

    const{createNewArray}=useContext(ArrayContext);
    const[seletcedMethod,setSeletcedMethod]=useState("");
    const[range,setRange]=useState(20);

   
const newMethod=(e)=>{

setSeletcedMethod(e.target.value);


}

const sortButtonFunction=()=>{

if(!seletcedMethod){

    alert("Please select a Sorting Algorithm");
}
else if(seletcedMethod=="bubble"){

alert("Bubble Sort");

}

else {


    alert("Sorting fucntion to be implemented");
    //call the relevant function and pass the array

}

}  

const rangeChange=(e)=>{

    const newRange=Number(e.target.value);
    setRange(newRange);
    createNewArray(newRange);
    
}

useEffect(()=>{createNewArray(20)},[])

const createNewArrayButtonFunction=()=>{

    if(range){
        createNewArray(range)
    }
    else
        {
            createNewArray(20)
        }


}

return(

<div className="main">
<div className="slider">
    <input 
    type="range"
    min="20"
    max="100"
    value={range}
    onChange={rangeChange}
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
