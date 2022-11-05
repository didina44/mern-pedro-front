import { useState, useEffect } from "react";
import Axios from "axios";

function AddGrammars(props) {
  
  return (

    <div>
  

   <input
          type="number"
          placeholder="idGram..."
          onChange={(event) => {
            props.setIdGram(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="explanans..."
          onChange={(event) => {
            props.setExplanans(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="explanandum..."
          onChange={(event) => {
            props.setExplanandum(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="example..."
          onChange={(event) => {
           props.setExample(event.target.value);
          }}
        />
        <button onClick={props.createGram}> Create Gram </button>




      <input
          type="number"
          placeholder="idGram..."
          onChange={(event) => {
        props.setIdGram(event.target.value);
          }}
        />
           
        <button onClick={props.deleteGram}> Delete Gram </button>


  <input
          type="number"
          placeholder="idLesson..."
          onChange={(event) => {
        props.setIdLesson(event.target.value);
          }}
        />
  <input
          type="text"
          placeholder="title..."
          onChange={(event) => {
        props.setTitle(event.target.value);
          }}
        />         
        <button onClick={props.createLesson}> Create Lesson </button>



      
      </div>
      
    
  );
}

export default AddGrammars;
