const styles = {

  textAlign: "center"
};

const Vocc = (props) => {
    return (
        <>

            <div className="dash-container" style={styles}>
              {props.getResult && (  
          
            props.item.map (itemm =>(
              <div>    
                <span style={{ fontWeight: 'bold' }}>{itemm.term}                </span>

                  <span>--                </span>

                  
                <span style={{ fontStyle: 'italic' }}>  {itemm.translation}                </span>

                
              </div>
            ))
          
            
            )}
            </div>

        </>
    )
}
export default Vocc