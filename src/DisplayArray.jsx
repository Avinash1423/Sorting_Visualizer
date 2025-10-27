import React from "react";
import { ArrayContext } from "./ArrayGenerator";
import { useContext } from "react";
import './DisplayArray.css'

const DisplayArray=()=>{

    const{array}=useContext(ArrayContext);
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
            backgroundColor:"#00ff44ff",
            width:`${barWidth}px`,
            margin: "1px",  
       
       }}
          >
            </div>

    )
    
    )
}

</div>

</>
);

}

export default DisplayArray;