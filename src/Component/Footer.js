import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer className='footer-section'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={4}>
                        <div className='footer-options'>
                            <ul>
                                <li>
                                    <Link to="/">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link to="/">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/">Refer A Friend</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='copyright-text'>
                            <p>© 2021 by BAD BEARD GANG.</p>
                        </div>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
