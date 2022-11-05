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
////////test
//import createGram from './old/AddUsers'
//import createGram1 from './old/AddUsers'
/////////test

//const StyledContainer = styled(Container)`color: red;`;
//const Button = styled.button``

const StyledCard = styled(Card)`color: white; margin-top:7px` 

 const Public2 = () => {
 
  ////////for grams 
   const [idGram, setIdGram] = useState(1)
   const [explanans, setExplanans] = useState("")
  const [explanandum, setExplanandum] = useState("")
  const [example, setExample] = useState("")
  const [listOfGrams, setListOfGrams] = useState([])
//////////for parags
    const [idParag, setIdParag] = useState(1)
   const [text, setText] = useState("")
  const [textTrans, setTextTrans] = useState("")
    const [listOfParags, setListOfParags] = useState([])
  
   ////////////////test

   
const [count, setCount] = useState(1)
const [lesson, setLesson] = useState(1)

const plusCount = () => {
setCount(count + 4)
  setLesson(lesson + 1)
}
const minusCount = () => {
  if (count>7)
setCount(count - 4)
  if (lesson>1)
    setLesson(lesson - 1)}
   /////////////

  
    const [idVocab, setIdVocab] = useState(1);
  const [term, setTerm] = useState("");
  const [translation, setTranslation] = useState("");
  const [construction, setConstruction] = useState("");
   const [listOfVocabs, setListOfVocabs] = useState([]);
const [resultsLessons, setResultsLessons] = useState([]);
   
   //////////////////
   const createVocab = () => {
    Axios.post("https://mern-pedro.elasistefan.repl.co/createVocab", {
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

   const createVocab2 = () => {
    Axios.post("https://mern-pedro.elasistefan.repl.co/vocabs", {
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
    Axios.post("https://mern-pedro.elasistefan.repl.co/createGram", {
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


   const createParag = () => {
    Axios.post("https://mern-pedro.elasistefan.repl.co/createParag", {
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




   
   const [getResultLesson, setGetResultLesson] = useState(null);

  const fortmatResponseLesson = (res) => {
    return JSON.stringify(res, null, 2);
  };

  
  const {isSuccess:loadedLesson, isLoading: isLoadingLesson, refetch: getLesson } = useQuery(
    "query-lesson",
    async () => {
      return await apiClient.get("/lessonById22");
    },
    {
      enabled: false,
      onSuccess: (res) => {   
        console.info ('res.data', res.data)

        const resultLesson = {
          status: res.status + "-" + res.statusText,
         headers: res.headers,
          data: res.data,
        };
        setGetResultLesson(fortmatResponseLesson(resultLesson));
        console.info ('resultLesson.data',resultLesson.data)
        console.info ('gresultLesson.data',getResultLesson)

      },
      onError: (err) => {
        setGetResultLesson(fortmatResponseLesson(err.response?.data || err));
      },
    }
  );
  

function getAllDataLesson() {
    try {
      getLesson();
      console.info ('gresultLesson.data',getResultLesson)

    } catch (err) {
      setGetResultLesson(fortmatResponseLesson(err));
    }
  }    
  
useEffect(() => { 
     getAllDataLesson() 
  
}, [listOfVocabs,listOfGrams,listOfParags]);

/////////////////

const getAllDataLessons22 = async () => {
    try {
       const resp = await Axios.get("https://mern-pedro.elasistefan.repl.co/alessonById22");
      
        console.log(resp.data);
      setResultsLessons(resp.data);
      console.info(resultsLessons);

    } catch (err) {

        console.error(err);
    }
  
};
   
   useEffect(() => {
    getAllDataLessons22 ()
     console.info(resultsLessons);

    },[listOfVocabs,listOfGrams,listOfParags]);

   
//const getTodos = () => {
  //  Axios
    //  .get('https://mern-pedro.elasistefan.repl.co/alessonById22')
    //  .then((res) => {
     //   if (res.data) {
       //   setResultsLessons(res.data);
     //console.log(resultsLessons);
     //     console.info(res.data);
     //   }
    //  })
    //  .catch((err) => console.log(err));
 // };
   //////////////////////
   
//useEffect(() => {
  //  getTodos ()
   //  console.log(resultsLessons);

   // },[listOfVocabs,listOfGrams,listOfParags]);

   
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

   <Button variant="secondary">Lesson {lesson} </Button>
                  </span>

      <span>
    <Button variant="outline-light" onClick={plusCount}>Next Lesson</Button>
   
     </span>
        </div>  
   
      <Row>
        <Col>
        <Button style={{ background: '#003300' }} >Text</Button>
          <StyledCard style={{ background: '#003300' }}>


            
{resultsLessons.parags && (
  resultsLessons.parags.map (filteredContent =>(

              <div>                    
              text = {filteredContent.text}
        textTrans = {filteredContent.textTrans}
        id Parag = {filteredContent.idParag}
               </div>
            ))
          )} 


            
{resultsLessons.vocabs && (
            resultsLessons.parags.map (filteredContent =>(
              <div>                    
               term = {filteredContent.term} translation = {filteredContent.translation} 
                construction = {filteredContent.construction}
                IdVocab = {filteredContent.idVocab}
              </div>
            ))
          )} 


            
            
         <Text2 listOfParags={listOfParags} count={count} />
         <AddTexts  createParag={createParag} setIdParag={setIdParag}  setText={setText} setTextTrans={setTextTrans}   /> 
   </StyledCard>    
        </Col>


        
        <Col>
        <Button style={{ background: '#331a00' }}>Vocabulary</Button>
                    <StyledCard style={{ background: '#331a00' }}>
      <Vocabulary2  listOfVocabs={listOfVocabs} count={count} />
      <AddVocabs2 createVocab={createVocab} setIdVocab={setIdVocab}  setTranslation={setTranslation} setTerm={setTerm} setConstruction={setConstruction}  />
                    </StyledCard>

        </Col>
        
        <Col>
          <Button style={{ background: '#00008B' }}>Grammar</Button>
                    <StyledCard style={{ background: '#00008B' }} >
                <Grammar2 listOfGrams={listOfGrams} count={count} /> 
                      <AddGrammars createGram={createGram} setIdGram={setIdGram}  setExample={setExample} setExplanans={setExplanans} setExplanandum={setExplanandum}   />
                    </StyledCard>

        </Col>
        
      </Row>
     
   
   
 </Container> 
        </>
    )
}
  export default Public2