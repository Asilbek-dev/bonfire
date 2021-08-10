import { React, useState } from "react";
import {
  Container,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import "../style/navbar.scss";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggle1 = () => setDropdownOpen1((prevState1) => !prevState1);

  const [count, setcount] = useState(false);
  const buttonClick = () => {
    setcount(!count);
  };


  return (
    <>
      <Container className = "d-flex justify-content-between px-4 align-items-center" id = "navbar">
        <NavbarBrand className="navbar_logo d-flex align-items-center">
          <img src="./images/logoimg.png" alt="" />
          <span>bonfire</span>
          <img src="./images/logo.png" alt="" />
        </NavbarBrand>
        <Nav className= {count ? "nav navbar nav2" : "nav navbar nav1"}>
          <NavItem>
              <NavLink className = "text-light" href="/">Fundraise</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "text-light" href="/">Customize</NavLink>
            </NavItem>
          <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className = "text-light" nav caret>Sell online</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown isOpen={dropdownOpen1} toggle={toggle1}>
            <DropdownToggle className = "text-light" nav caret>Explore</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Button className = "navbar_button">LOG IN</Button>
        </Nav>
        <div className = "d-lg-none">
            <i className = {count ? "fas fa-times " : "fas fa-bars "} onClick = {buttonClick}></i>
          </div>
      </Container>
    </>
  );
}
