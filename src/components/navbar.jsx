import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../images/logovtq.png'

export default ({hasback})=>{
    return    hasback&&hasback==true?<Navbar  bg="dark" className="pd6p" collapseOnSelect expand="lg" variant="dark">
    <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">

      </Nav>
      <Nav>
        <NavDropdown title="Explore" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#features"> Blogs</Nav.Link>
        <Nav.Link href="#pricing">Marketplace</Nav.Link>
        <Nav.Link href="#pricing">Sign in</Nav.Link>
        <Nav.Link href="#pricing">Register</Nav.Link>
        <Nav.Link href="#pricing" className="btn btn-info themeBackgroundColor listingbtn">Add Listing</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>:<Navbar  collapseOnSelect expand="lg" variant="dark">
    <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">

      </Nav>
      <Nav>
        <NavDropdown title="Explore" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#features"> Blogs</Nav.Link>
        <Nav.Link href="#pricing">Marketplace</Nav.Link>
        <Nav.Link href="#pricing">Sign in</Nav.Link>
        <Nav.Link href="#pricing" className="btn btn-info themeBackgroundColor listingbtn">Add Listing</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>

}