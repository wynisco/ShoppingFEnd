import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import Alert from 'react-bootstrap/Alert';

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
    <h2> TESTING LOGIN INSTRUCTIONS</h2>
    <p>  To successfully Login, us  e  email as test@wynisco.com and password as WyniscoTraining
    Once you login it will replace the current page url with to /testswelcome</p>

    <p> In all other cases it will return an error message on top </p>

    <p> Url of this page is tests/autotestform</p>
  
   
   {errorMessage.length >0 && <Alert key="danger" variant="danger">
         Please enter valid email or password
        </Alert>

  }     
     <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPwd(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={(e)=>{handleSubmit(e)}}variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
  )
}

export default Product
