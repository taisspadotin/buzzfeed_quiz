import React,{Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './style.scss';

class Header extends Component{
	render(){
		return(
			<Navbar collapseOnSelect expand="lg" className="header">
			  <Navbar.Brand href="/">Quizzes</Navbar.Brand>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href="#features">Testes</Nav.Link>
			      <NavDropdown title="News" id="collasible-nav-dropdown">
			        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
			        <NavDropdown.Divider />
			        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
			      </NavDropdown>
			    </Nav>
			    <Nav>
			      <Nav.Link eventKey={2} href="#memes">
			      </Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
			);
	}
}

export default Header;