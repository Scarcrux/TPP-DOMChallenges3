import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Colorizer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={props.handleaddrow}>Add Row</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={props.handleaddcolumn}>Add Column</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Color
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Red
                </DropdownItem>
                <DropdownItem>
                  Green
                </DropdownItem>
                <DropdownItem>
                  Blue
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>TPP</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
