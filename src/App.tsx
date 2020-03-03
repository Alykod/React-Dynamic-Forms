import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './form';

function App() {
  const [state, setState] = useState<any>({
    name: '',
    age: '',
    phoneNumber: '',
    email: '',
    password: ''
  })

  useEffect(()=> {
    console.log("state", state)
  }, [state])

 const handleProps = (value: any, id: string) => {
    setState({...state, [id]: value})
 }
  return (
    <>
     <Form values={Values}/>
    </>
  );
}

export default App;



const Values = [
  {id: "name", label: "User Name", min: 2, max: 10},
  {data: "", id: "number", label: "Phone Number"},
  {data: "1231242", id: "email", label: "Email Address"},
  {data: "", id: "password", inputType: "password", label: "Password"}
]