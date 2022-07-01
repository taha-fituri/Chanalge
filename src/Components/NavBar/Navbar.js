import "../../App.css";
import "./Navbar.css";
import {
  Button,
  Container,
  NavDropdown,
  Nav,
  FormControl,
  Form,
  Navbar,
} from "react-bootstrap";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Cars Salling</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Cars</Nav.Link>
            <NavDropdown title="Componies" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Audi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">PMW</NavDropdown.Item>
              <NavDropdown.Item href="#action4">KIA</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Hyundai</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Puy
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
