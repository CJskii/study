import React, { useState } from "react";
import initFirestore from "./initFirestore";
import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  query,
  collection,
  getDocs,
} from "firebase/firestore";

const App = () => {
  const [db, setDb] = useState(initFirestore());

  const users = doc(db, "users/2023-03-01");

  const createData = ({ data }) => {
    if (!data) {
      const docData = {
        name: "test user",
        id: "test id",
        logged: false,
      };
      writeData(users, docData);
    } else {
      writeData(users, data);
    }
  };

  const writeData = async (param, data) => {
    try {
      await setDoc(param, data, { merge: true });
      console.log("Succesfully submited to db");
    } catch (error) {
      console.log(error);
    }
  };

  const orderCollection = (db, "users");

  const createNewDocument = async () => {
    const newDoc = await addDoc(orderCollection, {
      customer: "Mike",
      drink: "Latte",
      total_cost: (100 + Math.floor(Math.random() * 400)) / 100,
    });
    console.log(`Your doc was created at ${newDoc.path}`);
  };

  const readSingleDocument = async () => {
    const mySnapshot = await getDoc(users);
    if (mySnapshot.exists()) {
      const docData = mySnapshot.data();
      console.log(docData);
    }
  };

  const queryForDocuments = async () => {
    const userQuery = query(collection(db, "users"));

    const querySnapshot = await getDocs(userQuery);
    const allDocs = querySnapshot.forEach((snap) => {
      console.log(
        `Here it is ${snap.id} contains ${JSON.stringify(snap.data())}`
      );
    });
  };

  return (
    <div>
      <button onClick={() => console.log(db)}>DB console log</button>
      <button onClick={createData}>Create user</button>
      <button onClick={createNewDocument}>New Document</button>
      <button onClick={readSingleDocument}>Read Document</button>
      <button onClick={queryForDocuments}>Query</button>
    </div>
  );
};

export default App;
