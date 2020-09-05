import React from 'react';
import { Navbar, Form, FormControl ,Button,Nav } from 'react-bootstrap';

const Top = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">E-Notice</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/blog">All Blog</Nav.Link>
          <Nav.Link href="/contact-us">Contact us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
};

export default Top;