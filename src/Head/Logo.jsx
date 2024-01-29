import React, { useState } from 'react';
import { Container, Navbar, Button, Form, Offcanvas } from 'react-bootstrap';

const MyCanvas = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
   // или лучше div
  return (
    <Container> 
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="https://react-bootstrap.netlify.app/docs/components/offcanvas/">My Elektrikell</Navbar.Brand>
        <Button variant="outline-primary" onClick={handleOffcanvasToggle}>
          Search
        </Button>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="navbar-nav">
          {}
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group controlId="formFrom">
              <Form.Label>From</Form.Label>
              <Form.Control type="date" placeholder="From Date" />
            </Form.Group>

            <Form.Group controlId="formUntil">
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" placeholder="Until Date" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default MyCanvas;

// function Logo () {
//     return (
//         <></>
//     )
// }

// export default Logo;