import React, { useState} from 'react';
import Form from "./Form";
import './App.css';

function App() {
  const [members, setMembers] = useState([ {
    id: Date.now(),
      name: "",
      email: "",
      role: ""
  } ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addNewMember={addNewMember} members={members} />
    </div>
  );
}

export default App;
