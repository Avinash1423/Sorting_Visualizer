import React from "react";
import { ArrayContext } from "./ArrayGenerator";
import { useContext } from "react";
import './DisplayArray.css'

const DisplayArray=()=>{

    const{array,highlighted,sorted,seletcedMethod}=useContext(ArrayContext);
    let arrayToDisplay=[];

    if(array){

     arrayToDisplay=array;

    }
    
    
    const barWidth=1000/arrayToDisplay.length;

return(
    <>
    <div className="bars">

{
    arrayToDisplay.map((number,index)=>(

          <div key={index} className="bar"

          style={{
            height:`${number *3.2}px`,
            display:"inline-block",
    backgroundColor:
  index === highlighted.i ? "#167c53ff" :     
  index === highlighted.j ? "#4c961cff" :      
  sorted.includes(index) ? "#979c00ff" :       
  "#063944ff"                              


            ,width:`${barWidth}px`,
            margin: "1px",  
       
       }}
        >
            </div>

    )
    
    )
}

</div>

<div className="info">
  { 
  seletcedMethod==="bubble" &&
  ( 
    <>
    <span className="timeComplexity">Time Complexity </span>
     <table className="infoTable">
      <thead>
      <th>Best Case</th>
      <th>Worst Case</th>
      <th>Average Case</th>
      <th style={{color:"blue",fontStyle:"oblique"}}>Space Complexity</th>
      </thead>
      <tbody>
        <td>O(n)</td>
        <td>O(n²)</td>
        <td>O(n²)</td>
        <td>O(1)</td>
      </tbody>

     </table>
</>
  ) 
  }
   { 
  seletcedMethod==="merge" &&
  ( 
    <>
    <span  className="timeComplexity">Time Complexity </span>
     <table className="infoTable">
      <thead>
      <th>Best Case</th>
      <th>Worst Case</th>
      <th>Average Case</th>
      <th style={{color:"blue",fontStyle:"oblique"}}>Space Complexity</th>
      </thead>
      <tbody>
        <td>O(n log n)</td>
        <td>O(n log n)</td>
        <td>O(n log n)</td>
        <td>O(n)</td>
      </tbody>

     </table>
</>
  ) 
  }
  { 
  seletcedMethod==="insertion" &&
  ( 
    <>
    <span  className="timeComplexity">Time Complexity </span>
     <table className="infoTable">
      <thead>
      <th>Best Case</th>
      <th>Worst Case</th>
      <th>Average Case</th>
      <th style={{color:"blue",fontStyle:"oblique"}}>Space Complexity</th>
      </thead>
      <tbody>
        <td>O(n)</td>
        <td>O(n²)</td>
        <td>O(n²)</td>
        <td>O(1)</td>
      </tbody>

     </table>
</>
  ) 
  }
  { 
  seletcedMethod==="quick" &&
  ( 
    <>
    <span  className="timeComplexity">Time Complexity </span>
     <table className="infoTable">
      <thead>
      <th>Best Case</th>
      <th>Worst Case</th>
      <th>Average Case</th>
      <th style={{color:"blue",fontStyle:"oblique"}}>Space Complexity</th>
      </thead>
      <tbody>
        <td>O(n log n)</td>
        <td>O(n²)</td>
        <td>O(n log n)</td>
        <td>O(log n)</td>
      </tbody>

     </table>
</>
  ) 
  }
  { 
  seletcedMethod==="selection" &&
  ( 
    <>
    <span  className="timeComplexity">Time Complexity </span>
     <table className="infoTable">
      <thead>
      <th>Best Case</th>
      <th>Worst Case</th>
      <th>Average Case</th>
      <th style={{color:"blue",fontStyle:"oblique"}}>Space Complexity</th>
      </thead>
      <tbody>
        <td>O(n²)</td>
        <td>O(n²)</td>
        <td>O(n²)</td>
        <td>O(1)</td>
      </tbody>

     </table>
</>
  ) 
  }

</div>

</>
);

}

export default DisplayArray;