import { Link } from 'react-router-dom'
import react, { useState } from 'react';
import Vocabulary from './Vocabulary'
//import AddUsers from './AddUsers'
import AddGrammars from './AddGrammars'
import AddTexts from './AddTexts'
import AddVocabs from './AddVocabs'

import JsonFrench from '../french.json'
import Grammar from './Grammar'
import Text from './Text'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


//const StyledContainer = styled(Container)`color: red;`;
//const Button = styled.button``
const StyledCard = styled(Card)`color: white; margin-top:7px`

 const Public2 = () => {
 
const [count, setCount] = useState(4)
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
  return (
  
        <>       
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
         <Text JsonFrench={JsonFrench} count={count} />
   </StyledCard>    
        </Col>
        
        <Col>
        <Button style={{ background: '#331a00' }}>Vocabulary</Button>
                    <StyledCard style={{ background: '#331a00' }}>
      <Vocabulary JsonFrench={JsonFrench} count={count} />
                    </StyledCard>

        </Col>
        
        <Col>
          <Button style={{ background: '#00008B' }}>Grammar</Button>
                    <StyledCard style={{ background: '#00008B' }} >
                <Grammar JsonFrench={JsonFrench} count={count} />          </StyledCard>

        </Col>
        
      </Row>
     
   <AddTexts  />
   <AddVocabs  />
  <AddGrammars  />

   
 </Container> 
        </>
    )
}
  export default Public2