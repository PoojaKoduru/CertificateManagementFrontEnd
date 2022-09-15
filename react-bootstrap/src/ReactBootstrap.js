import  {Button,Alert,Breadcrumb, Form, Container, Navbar, Nav, NavDropdown,Row,Col}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function ReactBootstrap() {
  return (
    <div>
      <header>
        <Navbar bg='secondary'>
          <Container>
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse aria-controls='basic-navbar-nav'/>
            <Nav>
              <Nav.Link style ={{backgroundColor:'white',borderRadius:5}}>Home</Nav.Link>
              <Nav.Link>Gallery</Nav.Link>
              <Nav.Link>Contact Us</Nav.Link>
              <NavDropdown title ="Downloads" id ='basic-nav-dropdown'>
                <NavDropdown.Item href ="https://reactjs.org/" target='_blank'>React</NavDropdown.Item>
                <NavDropdown.Item href ="https://getbootstrap.com/" target='_blank'>Bootstrap</NavDropdown.Item>
                <NavDropdown.Item href ="https://microservices.iog/" target='_blank'>Microservices</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Container>
      <Row>
      <Col sm={6}>
        <Form>
        <Form.Label>Email:</Form.Label>
        <Form.Control type='email' placeholder="Enter your mail"/>
        <Form.Label>Password:</Form.Label>
        <Form.Control type='password' placeholder="Enter your password"/>
        <Button variant='success'>Submit</Button>
        </Form>
      </Col>
      <Col sm={6}>
      <Breadcrumb>
      <Breadcrumb.Item>Page1</Breadcrumb.Item>
      <Breadcrumb.Item>Page2</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant='primary'>This is a button</Alert>
      <Button>Click Me</Button>
      </Col>
      </Row>  
      </Container>
        </div>

    
  );
}

export default ReactBootstrap;
