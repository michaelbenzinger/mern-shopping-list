import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar container="sm" color="dark" dark expand="sm" className="mb-5">
        {/* <Container> */}
        <NavbarBrand href="/">ShoppingList</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/michaelbenzinger">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default AppNavbar;
