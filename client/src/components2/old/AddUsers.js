import { useState, useEffect } from "react";
import Axios from "axios";

function AddUsers() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
 //////////
  
const [listOfGrams, setListOfGrams] = useState([]);
useEffect(() => {
    Axios.get("https://mern-pedro.elasistefan.repl.co/api/grams").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createGram = () => {
    Axios.post("https://mern-pedro.elasistefan.repl.co/api/grams", {
      explanans,
      explanandum,
      example,
      idGram
    }).then((response) => {
      setListOfGrams([
        ...listOfGrams,
        {
          explanans,
      explanandum,
      example,
      idGram
        },
      ]);
    });
  };
//////////create gram within lessons
const createGram1 = () => {
    Axios.post("https://mern-pedro.elasistefan.repl.co/api/addToLesson/:id", {
      explanans,
      explanandum,
      example,
      idGram
    }).then((response) => {
      setListOfGrams([
        ...listOfGrams,
        {
          explanans,
      explanandum,
      example,
      idGram
        },
      ]);
    });
  };
  
///////////////////////voila


  //////////////////////////
  useEffect(() => {
    Axios.get("https://mern-pedro.elasistefan.repl.co/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("https://mern-pedro.elasistefan.repl.co/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };

  return (

    <div>
  
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default AddUsers;

