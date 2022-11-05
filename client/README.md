{ params:
      { idd: count }})

onDoubleClick ={ () => {
    setIdParag((filteredContent.idParag),
   () => {deleteParag()})
}}


                  
                  onDoubleClick222={deleteParag({idParag : filteredContent.idParag} )}



//const getAllDataLessons = async () => {
    //try {
     //   const resp = await Axios.get("https://mern-pedro.elasistefan.repl.co/lessonById22");
      
       // console.log(resp.data);
     // setResultsLessons(resp.data);
     // console.info(resultsLessons);

  //  } catch (err) {
        // Handle Error Here
      //  console.error(err);
   // }
  
//};
   
  // useEffect(() => {
    //getAllDataLessons ()
    // console.info(resultsLessons);

   // },[listOfVocabs,listOfGrams,listOfParags]);

   /////////////
   //async function getVocabs() {
   // const { data } = await Axios.get("https://mern-pedro.elasistefan.repl.co/getVocabs")
    //return data
///}
  //////////////////


{isSuccess && (
            allVocabs.filter (content => content.idd <= props.count && content.idd >(props.count-4) ).map (filteredContent =>(
              <div>                    
                <Vocc item={filteredContent.vocabulary}  />
              </div>
            ))
          )} 

 
 useEffect(() => {
    Axios.get("https://mern-pedro.elasistefan.repl.co/getVocabs").then((response) => {
      setListOfVocabs(response.data)
      console.log (JSON.stringify(response.data))



    });
  }, [listOfVocabs]);
      console.log (JSON.stringify(listOfVocabs))


   {
            getResult.filter (content => content.idd <= props.count && content.idd >(props.count-4) ).map (filteredContent =>(
              <div>                    
                <Vocc item={filteredContent.vocabulary}  />
              </div>
            ))
          } 