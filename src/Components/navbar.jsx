import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand className="mx-auto">List App</Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
