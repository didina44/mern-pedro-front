import {useState, useEffect} from 'react'
  import Axios from "axios";
import apiClient from "../access/http-common";
import { useQuery } from 'react-query'

const styles = {

  textAlign: "center"
};


const Grammar2 = (props) => {

  const [getResultGrams, setGetResultGrams] = useState(null);
//const [allVocabs, setAllVocabs] = useState ([])
  ////////////
  
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
/////////////

  
  const {isSuccess:loadedGrams, isLoading: isLoadingGrams, refetch: getAllGrams } = useQuery(
    "query-grams",
    async () => {
      return await apiClient.get("/getGrams");
    },
    {
      enabled: false,
      onSuccess: (res) => {
       // setAllVocabs(res.data)
       // console.log ('allvocabs1',JSON.stringify(allVocabs))
        console.info ('res.data', res.data)

        const result = {
          status: res.status + "-" + res.statusText,
         headers: res.headers,
          data: res.data,
        };
        setGetResultGrams(fortmatResponse(result));
       // setAllVocabs(result.data)
        console.info ('result.data',result.data)
       // console.log ('allvocabs2',JSON.stringify(allVocabs))
      },
      onError: (err) => {
        setGetResultGrams(fortmatResponse(err.response?.data || err));
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

function getAllData() {
    try {
      getAllGrams();
    } catch (err) {
      setGetResultGrams(fortmatResponse(err));
    }
  }    
  
useEffect(() => { 
     getAllData() 
}, [props.listOfGrams]);

  ////////////
   
 //const clearGetOutput = () => {
   // setGetResult(null);
 // };
///////////////////
  
  //const filteredVocabs = JSON.parse(getResult).data.find(obj => {
 //  return obj.idd <= props.count && obj.idd >(props.count-4)    
  //})
  //console.info ('filtered vocabs', filteredVocabs)

//if (!filteredVocabs) return null;
 if (getResultGrams) {
  return (
        <>
  <div className="dash-container" style={styles}> 


     {
 props.listOfGrams.map (filteredContent =>(
              <div>        
                <p> explanans is {filteredContent.explanans}  </p> 
              </div>
              ))
          } 

    
{getAllGrams && (
            JSON.parse(getResultGrams).data.filter (content => content.idGram <= props.count && content.idGram >(props.count-4) ).map (filteredContent =>(
              <div>                    
              explanans = {filteredContent.explanans}
        explanandum = {filteredContent.explanandum}
        example = {filteredContent.example}
        id Gram = {filteredContent.idGram}
               </div>
            ))
          )} 
            </div>          
       </>
    )
  }
}
export default Grammar2