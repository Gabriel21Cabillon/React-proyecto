import React, { } from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import './NavbarStyle.css'
import CartWidget from './CartWidget';
import {Link} from "react-router-dom"


function Navbarr({greeting}) {
    return (
      <div>
        <p>{greeting}</p>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand className="Title" href="#">TRAPPIN BAR</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">


              <Link
                to="/"
                  className="inicio px-3 py-2"
                  aria-current="page"
              >
              INICIO
              </Link>
              <Link
                to="category/cerveza"
                  className="cerveza px-3 py-2"
                  aria-current="page"
              >
              Cerveza
              </Link>
              <Link
                to="category/vino"
                  className="vino px-3 py-2"
                  aria-current="page"
              >
              Vino
              </Link>



              <Nav className=" navPrincipal me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}
                navbarScroll>
                {/* <NavDropdown title="BEBIDAS" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Cerveza</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Vino</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Tragos</NavDropdown.Item>
                </NavDropdown> */}
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

