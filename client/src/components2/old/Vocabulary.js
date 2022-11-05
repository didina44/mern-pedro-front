import Vocc from './Vocc'

const styles = {

  textAlign: "center"
};

const Vocabulary = (props) => {
    return (
        <>
  <div className="dash-container" style={styles}>  
          {
            props.JsonFrench.filter (content => content.idd <= props.count && content.idd >(props.count-4) ).map (filteredContent =>(
              <div>                    
                <Vocc item={filteredContent.vocabulary}  />
              </div>
            ))
          }      
            </div>          
       </>
    )
}
export default Vocabulary