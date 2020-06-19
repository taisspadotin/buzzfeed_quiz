import React,{Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './style.scss';
import {Icon} from 'semantic-ui-react';

class Header extends Component{
	render(){
		return(
			<Navbar collapseOnSelect expand="lg" className="header">
			  <Navbar.Brand href="/">Quizzes</Navbar.Brand>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="mr-auto" >
			      <Nav.Link href="#features">News</Nav.Link>
			      <Nav.Link href="#features">Vozes</Nav.Link>
			      <Nav.Link href="#features">Tasty Demais</Nav.Link>
			      <Nav.Link href="#features">Testes</Nav.Link>
			      <Nav.Link href="#features">Shopping</Nav.Link>
			      <Nav.Link href="#features">Sing In</Nav.Link>
			    </Nav>
			    <Nav className="end">
			    	<Icon name="bomb"/>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
			);
	}
}

export default Header;