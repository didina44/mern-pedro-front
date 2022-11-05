import { useState, useEffect } from "react";
import Axios from "axios";

function AddVocabs2(props) {
  
  return (

    <div>
  

   <input
          type="number"
          placeholder="idVocab..."
          onChange={(event) => {
            props.setIdVocab(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="term..."
          onChange={(event) => {
            props.setTerm(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="translation..."
          onChange={(event) => {
            props.setTranslation(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="construction..."
          onChange={(event) => {
            props.setConstruction(event.target.value);
          }}
        />
        <button onClick={props.createVocab}> Create Vocab </button>


      <input
          type="number"
          placeholder="idVocab..."
          onChange={(event) => {
        props.setIdVocab(event.target.value);
          }}
        />
           
        <button onClick={props.deleteVocab}> Delete Vocab </button>

      </div>
      
    
  );
}

export default AddVocabs2;

