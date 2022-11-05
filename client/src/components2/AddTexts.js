import { useState, useEffect } from "react";
import Axios from "axios";

function AddTexts(props) {
  
  return (

    <div>
  

   <input
          type="number"
          placeholder="idParag..."
          onChange={(event) => {
        props.setIdParag(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="text..."
          onChange={(event) => {
            props.setText(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="textTrans..."
          onChange={(event) => {
            props.setTextTrans(event.target.value);
          }}
        />
       
        <button onClick={props.createParag}> Create Parag </button>



<input
          type="number"
          placeholder="idParag..."
          onChange={(event) => {
        props.setIdParag(event.target.value);
          }}
        />
           
        <button onClick={props.deleteParag}> Delete Parag </button>


      
      </div>
      
    
  );
}

export default AddTexts;
