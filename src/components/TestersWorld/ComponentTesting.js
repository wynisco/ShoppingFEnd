import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';

const Product = ({ product }) => {
  const [email,setEmail] = useState("")
  const [pwd,setPwd] = useState("")
  const [errorMessage,setErrorMessage]= useState("")

  const mockData ={
    correctEmail:"test@wynisco.com",
    correctPwd:"WyniscoTraining",
  }

  console.log(pwd);
  function handleSubmit (e) {
    e.preventDefault()
  if(mockData.correctEmail=== email && mockData.correctPwd){
    window.location.replace("testswelcome")
  } 
  else {
    setErrorMessage("Please enter valid email or password")
  }
  
  }
  return (
    <Card className='my-3 p-3 rounded'>
    <h2> COMPONENT TESTING INSTRUCTIONS</h2>
    <p>  This page </p>

    <p> In all other cases it will return an error message on top </p>

    <p> Url of this page is tests/autotestform</p>
  
      
     <Form>
     <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Order Return Status
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Returned</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    </Form>
    </Card>
  )
}

export default Product
