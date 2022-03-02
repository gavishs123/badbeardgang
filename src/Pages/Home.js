import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Layout from '../Component/Layout'
import Titlelogo from '../images/BBG_Logo2-1.png'
import InstaIcon from '../images/insta-icon.png'
import FacebookIcon from '../images/facebook-icon.png'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import AboutImg from '../images/BBG_Logo_face3.png'
import { Link } from 'react-router-dom'
import ProductImg from '../images/IMG_0088_edited.jpg'
function Home() {
    return (
        <Layout>
            <section className='top-banner-section'>
                <div className='top-banner-detail'>
                    <img className='title-logo' src={Titlelogo} alt="logo" />
                    <h1>SUAVE. CLEAN. SUITED</h1>
                    <ul className='top-banner-social'>
                        <li>
                            <a href='#' className='insta-btn' target="_blank"><img src={InstaIcon} alt="logo" /></a>
                        </li>
                        <li>
                            <a href='#' className='facebook-btn' target="_blank"><img src={FacebookIcon} alt="logo" /></a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='about-section'>
                <Container>
                    <Row>
                        <Col>
                            <div className='about-details'>
                                <div className='about-details-left'>
                                    <h3>HIGHEST QUALITY BEARD + HAIR MONTHLY SUBSCRIPTION BOX. </h3>
                                </div>
                                <div className='about-details-center'>
                                    <img className='about-img' src={AboutImg} alt="logo" />
                                </div>
                                <div className='about-details-right'>
                                    <h2>HOW IT WORKS</h2>
                                    <p>Choose from three box options. Every box includes Beard Oil, Styling Balm, Mustache Wax, and Utility Cream. Each box features all our favorite fragrances.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='product-section'>
                <Container>
                    <Row>
                        <Col>
                            <div className='product-section-detail'>
                                <div className='product-section-detail-left'>
                                    <h2>TRY<br />OUR<br />RAZORS</h2>
                                </div>
                                <div className='product-section-detail-right'>
                                    <Link to="/">
                                        <div className='product-section-img'>
                                            <img className='product-img' src={ProductImg} alt="logo" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='our-oil-section'>
                <Container>
                    <Row>
                        <Col>
                            <div className='our-oil-detail'>
                                <h4>OUR OILS</h4>
                                <p>Bad Beard Gang offers the highest premium carrier oils, styling balms, mustache wax, and utility cream that are perfectly blended with essential oils in house, not a factory. With both oils equally blended, it's designed perfectly to give and feel that healthy appearance with a light scent. Perfectly conditioned for all four seasons. All our beard care line help hydrate, condition, promote growth, and help control or eliminate dandruff. We have the best oils on the market, those are the facts.</p>
                                <Link to="/">Pick Your Box!</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default Home