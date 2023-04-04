import {Navbar, Container, Nav} from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Myron's Portfolio</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>


        </Container>
      </Navbar>
    )
}

export default NavBar