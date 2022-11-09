import React, { } from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import './NavbarStyle.css'
import CartWidget from './CartWidget';


function Navbarr({greeting}) {
    return (
      <div>
        <p>{greeting}</p>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand className="Title" href="#">TRAPPIN BAR</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className=" navPrincipal me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link className="inicio" href="#action1">INICIO</Nav.Link>
                <Nav.Link className="hamburguesas" href="#action2">HAMBURGUESAS</Nav.Link>
                <NavDropdown title="BEBIDAS" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Alcoholicas</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Refrescos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Tragos</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="contactanos" href="#">Contactanos!</Nav.Link>
              </Nav>
              <CartWidget className="carritoLogo" />
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="btnSearch" variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
  
  export default Navbarr;




  // export default class navbar extends Component {
//   render() {
//     return (

//       );
//     }
// }

