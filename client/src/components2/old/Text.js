

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Text = (props) => {
    return (
        <>
            <div className="dash-container" style={styles}>  
          {
            props.JsonFrench.filter (content => content.id <= props.count && content.id >(props.count-4) ).map (filteredContent =>(
              <div>        
                <p> {filteredContent.text}  </p>            
              </div>
            ))
          }      
            </div>

        </>
    )
}
export default Text