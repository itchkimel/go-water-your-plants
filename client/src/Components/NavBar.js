import React from 'react';
import { Link } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Nav className="mr-auto" >
          
          <Nav.Link as={Link} to="/plants" >
            {" "}Plants{" "}
          </Nav.Link>

          <Button variant="outline-light">   
            <Nav.Link as={Link} to="/your_plants">
              {" "}Your Plants{" "}
            </Nav.Link>
          </Button>
         
          <Button variant="outline-light">   
            <Nav.Link as={Link} to="/signup">
              {" "}Signup{" "}
            </Nav.Link>
          </Button>
          
          <Button variant="outline-light">
            <Nav.Link as={Link} to="/login">
              {" "}Login{" "}
            </Nav.Link>
          </Button>
          
          <Button
            variant="outline-light">
            {" "}Logout{" "}
          </Button>
        </Nav>
        
      </Navbar>
    </>
  );
};

export default NavBar;