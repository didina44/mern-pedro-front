import Vocc from './Vocc'
import {useState, useEffect} from 'react'
  import Axios from "axios";
import apiClient from "../access/http-common";
import { useQuery } from 'react-query'

const styles = {

  textAlign: "center"
};


const Vocabulary2 = (props) => {

  const [resultsLessons, setResultsLessons] = useState(null);
//const [allVocabs, setAllVocabs] = useState ([])
  ////////////
  
  const fortmatResponseVocabs = (res) => {
    return JSON.stringify(res, null, 2);
  };
/////////////

  
  const {isSuccess:loadedVocabs, isLoading: isLoadingVocabs, refetch: getAllVocabs } = useQuery(
    "query-vocabs",
    async () => {
      return await apiClient.get("/getVocabs");
    },
    {
      enabled: false,
      onSuccess: (res) => {
       // setAllVocabs(res.data)
       // console.log ('allvocabs1',JSON.stringify(allVocabs))
        console.info ('res.data', res.data)

        const resultVocabs = {
          status: res.status + "-" + res.statusText,
         headers: res.headers,
          data: res.data,
        };
        setGetResultVocabs(fortmatResponseVocabs(resultVocabs));
       // setAllVocabs(result.data)
        console.info ('resultVocabs.data',resultVocabs.data)
       // console.log ('allvocabs2',JSON.stringify(allVocabs))
      },
      onError: (err) => {
        setGetResultVocabs(fortmatResponseVocabs(err.response?.data || err));
      },
    }
  );
  ////////////
  //useEffect(() => {
   // if (isLoadingVocabs) setGetResult("loading...");
 // }, [isLoadingVocabs]);
  /////////// 
  //useEffect(() => {
   // if (loadedVocabs) console.log("loadedvocabs...");
 // }, [loadedVocabs]);

function getAllDataVocabs() {
    try {
      getAllVocabs();
    } catch (err) {
      setGetResultVocabs(fortmatResponseVocabs(err));
    }
  }    
  
useEffect(() => { 
     getAllDataVocabs() 
}, [props.listOfVocabs]);


 if (getResultVocabs) {
  return (
        <>
  <div className="dash-container" style={styles}> 

{getAllVocabs && (
            JSON.parse(getResultVocabs).data.filter (content => content.idVocab <= props.count && content.idVocab >(props.count-4) ).map (filteredContent =>(
              <div>                    
               term = {filteredContent.term} translation = {filteredContent.translation} 
                construction = {filteredContent.construction}
                IdVocab = {filteredContent.idVocab}
              </div>
            ))
          )} 
    
            </div>          
       </>
    )
  }
}
export default Vocabulary2