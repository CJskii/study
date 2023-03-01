import React, { useState } from "react";
import initFirestore from "./initFirestore";
import { doc, setDoc } from "firebase/firestore";

const App = () => {
  const [db, setDb] = useState(initFirestore());

  const users = doc(db, "users/2023-03-01");

  const addUser = () => {
    const docData = {
      name: "test user",
      id: "test id",
      logged: false,
    };
    setDoc(users, docData);
  };

  return (
    <div>
      <button onClick={() => console.log(db)}>DB console log</button>
      <button onClick={addUser}>Add me</button>
    </div>
  );
};

export default App;
