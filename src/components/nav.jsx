import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a2f3bd86c9d94aa0ae07cc97515ccb5a";

function NavScrollExample({setfoodData,fetchFood}) {
  
  const [query,setquery] = useState(" ");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);

 

  const submit = (e) => {
    e.preventDefault(); 
    fetchFood(); 
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><h1>Food&#127829;Hub</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my- my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            
            
            
          </Nav>
          <Form  style={{marginRight:"100px" , width:"80%"}}className="d-flex" onSubmit={submit} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
               <Button  type="submit">Search</Button>
               {/* <input type="submit" value="search"/> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
