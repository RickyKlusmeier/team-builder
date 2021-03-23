import Form from './Form'
import Team from './Team'
import React, { useState } from 'react'
import './App.css';


const initalTeam = {
  memberName: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initalTeam)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      memberName: formValues.memberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };
    return (
      setTeamMembers([newMember, ...teamMembers])
    )
  }

  return (
    <div className='container'>
    <h1>Form App</h1>

    <Form values={formValues} update={updateForm} submit={submitForm}
    />

    {
      teamMembers.map(mem  => {
        return (
          <Team key={mem.id} details={mem} />
        )
      })
    }
  </div>
  );
}


export default App;
