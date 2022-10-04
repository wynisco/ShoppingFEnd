import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import {useState} from 'react'

const Welcome = () => {
 
  return (
    <Card className='my-3 p-3 rounded'>
    Welcome , You are now logged in with
    <Button onClick={()=>window.location.replace("/tests")}>Return to Main Testing Page</Button>


    </Card>
  )
}

export default Welcome
