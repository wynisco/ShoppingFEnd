import React from 'react'
import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

// import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

// import Form from 'react-bootstrap/Form';
// import {useState} from 'react'

const Welcome = () => {
 
  return (
    <Card className='my-3 p-3 rounded'>
    This is Main Page for Testing
    <p>Use different pages to see different components to test your application</p>
   
    <Nav className='ml-auto'>
              <LinkContainer to='/testslogin'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> LOGIN FUNCTIONALITY TEST
                </Nav.Link>
              </LinkContainer>
</Nav>
    <Nav className='ml-auto'>
              <LinkContainer to='/testscomponents'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> COMPONENT TESTING
                </Nav.Link>
              </LinkContainer>
</Nav>

    </Card>
  )
}

export default Welcome
