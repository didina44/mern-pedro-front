const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Grammar = (props) => {
    return (
        <>
            <div className="dash-container" style={styles}>  
          {
            props.JsonFrench.filter (content => content.id <= props.count && content.id >(props.count-4) ).map (filteredContent =>(
              <div>        
                <p> {filteredContent.grammar}  </p>            
              </div>
            ))
          }      
            </div>

        </>
    )
}
export default Grammar