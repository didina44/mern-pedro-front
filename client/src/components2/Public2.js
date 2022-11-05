//import { Link } from 'react-router-dom'
//import { useQuery } from "react-query";
import apiClient from "../access/http-common";
import { useQuery } from 'react-query'
import  { useState, useEffect, useCallback } from 'react';
import Vocabulary2 from './Vocabulary2'
//import AddUsers from './AddUsers'
import AddGrammars from './AddGrammars'
import AddTexts from './AddTexts'
import AddVocabs2 from './AddVocabs2'
//import JsonFrench from '../french.json'
import Grammar2 from './Grammar2'
import Text2 from './Text2'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
  import Axios from "axios";


const StyledCard = styled(Card)`color: white; margin-top:7px` 

 const Public2 = () => {
 
  ////////for grams 
   const [idGram, setIdGram] = useState(1)
   const [explanans, setExplanans] = useState("")
  const [explanandum, setExplanandum] = useState("")
  const [example, setExample] = useState("")
  const [listOfGrams, setListOfGrams] = useState([])
//////////for parags
    const [idParag, setIdParag] = useState(2)
   const [text, setText] = useState("")
  const [textTrans, setTextTrans] = useState("")
    const [listOfParags, setListOfParags] = useState([])
  
   ////////////////test

   
const [count, setCount] = useState(22)

   ///////////
   const [lesson, setLesson] = useState({
    idLesson: 22,
    title: "Introduction - pronounciation"
  });
const [idLesson, setIdLesson] = useState(1);
  const [title, setTitle] = useState("");   
/////////
   
const plusCount = () => {
setCount(count + 1)
  setLesson(lesson + 1)
}
const minusCount = () => {
  if (count>2)
setCount(count - 1)
  if (lesson>1)
    setLesson(lesson - 1)}
   /////////////

  
    const [idVocab, setIdVocab] = useState(1);
  const [term, setTerm] = useState("");
  const [translation, setTranslation] = useState("");
  const [construction, setConstruction] = useState("");
   const [listOfVocabs, setListOfVocabs] = useState([]);

   ////////
   const [resultsLesson, setResultsLesson] = useState([]);
   
   //////////////////
   const createVocab = () => {
    Axios.put(`https://mern-pedro.elasistefan.repl.co/addToAlessonById/:idd?idd=${count}`,{
      idVocab,
      term,
      translation,
      construction,
    }).then((response) => {
      setListOfVocabs([
        ...listOfVocabs,
        {
          idVocab,
       term,
      translation,
      construction,
        },

      ]);
    });
  };

   
    const createGram = () => {
    Axios.put(`https://mern-pedro.elasistefan.repl.co/addtoAlessonById/:idd?idd=${count}`,{
      explanans,
      idGram, explanandum, example
    }).then((response) => {
      setListOfGrams([
        ...listOfGrams,
        {
          explanans,
      idGram, explanandum, example
        },
      ]);
   console.info (listOfGrams)

    });
  };


   
///////////////

   const createParag = async () => {
    const creatte = await Axios.put(`https://mern-pedro.elasistefan.repl.co/addtoAlessonById/:idd?idd=${count}`,{
      text,
      idParag, textTrans
    }).then((response) => {
      setListOfParags([
        ...listOfParags,
        {
          text,
      idParag, textTrans
        },
      ]);
   console.info (listOfParags)

    });
  };
///////////
   const deleteParag = async () => {
     
    const del = await Axios.put(`https://mern-pedro.elasistefan.repl.co/removeFromAlessonById/:idd?idd=${count}`,{
      idParag
    }).then((response) => {
      setListOfParags([
        ...listOfParags,
        {
         
        },
      ]);
   console.info (listOfParags)

    });
  };
//////////
   const deleteGram = async () => {
     
    const del = await Axios.put(`https://mern-pedro.elasistefan.repl.co/removeFromAlessonById/:idd?idd=${count}`,{
      idGram
    }).then((response) => {
      setListOfGrams([
        ...listOfGrams,
        {
         
        },
      ]);
   console.info (listOfGrams)

    });
  };

   
/////////

const deleteVocab = async () => {
     
    const del = await Axios.put(`https://mern-pedro.elasistefan.repl.co/removeFromAlessonById/:idd?idd=${count}`,{
      idVocab
    }).then((response) => {
      setListOfVocabs([
        ...listOfVocabs,
        {
         
        },
      ]);
   console.info (listOfVocabs)

    });
  };
   ////////////
const getAllDataLessonById = async () => {
    try {
       const resp = await Axios.get(`https://mern-pedro.elasistefan.repl.co/alessonById/:idd?idd=${count}`)
      
        console.log(resp.data);
      setResultsLesson(resp.data);
      console.info(resultsLesson);

    } catch (err) {

        console.error(err);
    }
  
};
   
   useEffect(() => {
    getAllDataLessonById ()
     console.info(resultsLesson);

    },[count,listOfVocabs,listOfGrams,listOfParags, lesson]);

   //////////////

   const createLesson = () => {
    Axios.post("https://mern-pedro.elasistefan.repl.co/createAlesson", {
      idLesson,
      title,
      
    }).then((response) => {
      setLesson(
        {
          idLesson,
       title,
        },

      );
    });
  };
   
  return  (
        <>   
     
<div className="dash-container">  
            </div>
          
 <Container fluid style={{ color: 'red', background:'black' }}>
   <div className="app" style={{ padding: 22 }}>
     <span>
    <Button variant="outline-light" onClick={minusCount}>Previous Lesson</Button>
   
     </span>
           <span style={{ marginLeft: 7, marginRight: 7 }} >

   <Button variant="secondary">Lesson {count} - 
      {resultsLesson.title && (<span> 
 {resultsLesson.title} </span>)}
  
  </Button>
                  </span>

      <span>
    <Button variant="outline-light" onClick={plusCount}>Next Lesson</Button>
   
     </span>
        </div>  
   
      <Row>
        <Col>
        <Button style={{ background: '#003300' }} >Text</Button>
          <StyledCard style={{ background: '#003300' }}>

            {resultsLesson.parags && (
  resultsLesson.parags.map (filteredContent => (
              <div>                   
              text = {filteredContent.text}
        textTrans = {filteredContent.textTrans}
        id Parag = {filteredContent.idParag}

              <span>
       
</span>
                
               </div>
            ))
          )}     
            
        </StyledCard>            
 <AddTexts resultsLesson={resultsLesson} createParag={createParag} setIdParag={setIdParag}  setText={setText} setTextTrans={setTextTrans} deleteParag={deleteParag}   /> 
            
    

        </Col>


        
        <Col>
        <Button style={{ background: '#331a00' }}>Vocabulary</Button>
                    <StyledCard style={{ background: '#331a00' }}>


        {resultsLesson.vocabs && (
            resultsLesson.vocabs.map (filteredContent =>(
              <div>                    
               term = {filteredContent.term} 
                translation = {filteredContent.translation} 
                construction = {filteredContent.construction}
                IdVocab = {filteredContent.idVocab}
              </div>
            ))
          )}               
                                       
                                 </StyledCard>
                   
                      
                      <AddVocabs2 resultsLesson={resultsLesson} createVocab={createVocab} setIdVocab={setIdVocab}  setTranslation={setTranslation} setTerm={setTerm} setConstruction={setConstruction}
 deleteVocab={deleteVocab}                        
                        />

          
        </Col>
        
        <Col>
          <Button style={{ background: '#00008B' }}>Grammar</Button>
                    <StyledCard style={{ background: '#00008B' }} >



                      
{resultsLesson.grams && (
            resultsLesson.grams.map (filteredContent =>(
              <div>                    
               explanans = {filteredContent.explanans} 
                explanandum = {filteredContent.explanandum}
                IdGram = {filteredContent.idGram}
              </div>
            ))
          )}                       
                      
              </StyledCard>           
                      
                      <AddGrammars resultsLesson={resultsLesson} createGram={createGram} setIdGram={setIdGram}  setExample={setExample} setExplanans={setExplanans} setExplanandum={setExplanandum} deleteGram={deleteGram} 
                        
                        createLesson={createLesson} setIdLesson={setIdLesson} setTitle={setTitle} />
                 

        </Col>
        
      </Row>
     
   
   
 </Container> 
        </>
    )
}
  export default Public2