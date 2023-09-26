import React from 'react';
import './App.css';
import {Container,NavbarBrand,Navbar} from 'react-bootstrap';
import Counter from './Components/Counter';
import Register from './Components/register';
import UserList from './Components/userList';




let App =() =>{
  return (
    <>
     <Navbar expand="lg" bg="info" variant='dark' >
      <Container>
        <NavbarBrand>React Bootstrap</NavbarBrand>
      </Container>
    </Navbar>
    <Counter/>
    <Register/>
    <UserList/>
    </>
  );
}

export default App;