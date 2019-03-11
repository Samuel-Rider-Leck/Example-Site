import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends React.Component {
  render() {
    return(
      <Navbar bg="primary" expand="md">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img alt="Example Site"></img>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar1"></Navbar.Toggle>

        <Navbar.Collapse id="navbar1">
          <Nav className="mr-auto">
            <LinkContainer to="product/category">
              <Nav.Link>
                Products
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog/category">
              <Nav.Link>
                Blog
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>
              About
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <LinkContainer to="/" className="ml-auto" >
              <Button>Action Button</Button>
            </LinkContainer>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;