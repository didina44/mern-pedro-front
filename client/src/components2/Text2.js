
const styles = {

  textAlign: "center"
};


const Text2 = (props) => {

  
 if (props.resultsLesson.parag) {
  return (
        <>
  <div className="dash-container" style={styles}> 

{props.resultsLesson.parags && (
  props.resultsLesson.parags.map (filteredContent =>(

              <div>                    
              text = {filteredContent.text}
        textTrans = {filteredContent.textTrans}
        id Parag = {filteredContent.idParag}
               </div>
            ))
          )}     
            </div>          
       </>
    )
  }
}
export default Text2