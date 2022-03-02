import React from 'react'
// import { Navbar, Container, Nav, NavDropdown, Button } from 'bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../images/BBG_Logo2.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <Navbar className='navbar-section p-0' expand="lg">
            <Container>
                <Row className='w-100 align-items-center'>
                    <Col md={3}>
                        <Link className='header-logo' to="/"><img src={logo} alt="logo" /></Link>
                    </Col>
                    <Col md={6}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/">Kits</Nav.Link>
                                <NavDropdown title="Line Up" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/">Beard</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Hair</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Tools</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/">Our Story</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col md={3}>
                        <div className='header-right'>
                            <div className='login-box'>
                                <button className='login-btn'>
                                    <svg data-bbox="0 0 50 50" fill='white' data-type="shape" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 50 50"><g><path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path></g></svg>
                                    Log In
                                </button>
                            </div>
                            <div className='cart-box'>
                                <button className='cart-btn'>
                                    <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="25" height="20" version="1.1" viewBox="0 0 197.7 166" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-2"><path d="M197.9 55.9L169.9 127.4 64.5 127.4 27.6 29.8 0 29.8 0.2 16.7 36.5 16.7 73.4 114.3 160.9 114.3 183 55.9"></path><circle cx="143.8" cy="153" r="13"></circle><circle cx="90.8" cy="153" r="13"></circle></svg>
                                    <span className='cart-counter'>1</span>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>

    )
}

export default Header
