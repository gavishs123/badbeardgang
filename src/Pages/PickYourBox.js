import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../Component/Layout'
// import OwlCarousel from 'react-owl-carousel';

function PickYourBox() {
    return (
        <Layout>
             <section className='pick_your_box_section'>
                <Container>

                    <Row>
                      <Col xs={12}>
                      {/* <OwlCarousel className='owl-theme' loop margin={10} nav>
                            <div class='item'>
                                <h4>1</h4>
                            </div>
                            <div class='item'>
                                <h4>2</h4>
                            </div>
                            <div class='item'>
                                <h4>3</h4>
                            </div>
                            <div class='item'>
                                <h4>4</h4>
                            </div>
                            <div class='item'>
                                <h4>5</h4>
                            </div>
                            <div class='item'>
                                <h4>6</h4>
                            </div>
                            <div class='item'>
                                <h4>7</h4>
                            </div>
                            <div class='item'>
                                <h4>8</h4>
                            </div>
                            <div class='item'>
                                <h4>9</h4>
                            </div>
                            <div class='item'>
                                <h4>10</h4>
                            </div>
                            <div class='item'>
                                <h4>11</h4>
                            </div>
                            <div class='item'>
                                <h4>12</h4>
                            </div>
                        </OwlCarousel> */}
                      </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='pick_your_box_title'>
                                <h1>PICK YOUR BOX.</h1>
                            </div>
                        </Col>
                       
                    </Row>
                    <div className='card_wrp'>
                        <Row>
                            <Col lg={4} md={4}>
                                <div className='benefits_box_card'>
                                    <div className='pick_box_card'>
                                        <div className='card_title'>
                                            <h2>BEARD CARE</h2>
                                        </div>
                                        <div className='card_price'>
                                            <span className='price_currency'>$</span>
                                            <span className='price_amount'>30</span>
                                        </div>
                                        <p className='plane_duration'>Every month</p>
                                        <a className='plan_tagline' href=''>Click To See More</a>
                                        <span className='plan_valid'>Valid for 12 months</span>
                                        <button className='pick_box_card_button'>Select</button>
                                    </div>
                                    <div className='benefits'>
                                        <ul className='benefits_list'>
                                            <li>BBG UTILITY CREAM</li>
                                            <li>TEAKWOOD STYLING BALM</li>
                                            <li>CITRUS TREE MUSTACHE WAX</li>
                                            <li>TEAKWOOD BEARD OIL</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className='benefits_box_card'>
                                    <div className='pick_box_card best_value_card'>
                                        <div className='best_value_title'>Best Value</div>
                                        <div className='card_title'>
                                            <h2>BEARD + HAIR</h2>
                                        </div>
                                        <div className='card_price'>
                                            <span className='price_currency'>$</span>
                                            <span className='price_amount'>45</span>
                                        </div>
                                        <p className='plane_duration'>Every month</p>
                                        <a className='plan_tagline' href=''>Click To See More</a>
                                        <span className='plan_valid'>Valid for 12 months</span>
                                        <button className='pick_box_card_button'>Select</button>
                                    </div>
                                    <div className='benefits'>
                                        <ul className='benefits_list'>
                                            <li>BBG UTILITY CREAM</li>
                                            <li>TEAKWOOD STYLING BALM</li>
                                            <li>CITRUS TREE MUSTACHE WAX</li>
                                            <li>TEAKWOOD BEARD OIL</li>
                                            <li>CITRUS TREE MUSTACHE WAX</li>
                                            <li>BAD BEARD GANG SHAMPOO</li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className='benefits_box_card'>
                                    <div className='pick_box_card'>
                                        <div className='card_title'>
                                            <h2>THE BIG BOX</h2>
                                        </div>
                                        <div className='card_price'>
                                            <span className='price_currency'>$</span>
                                            <span className='price_amount'>75</span>
                                        </div>
                                        <p className='plane_duration'>&nbsp;</p>
                                        <a className='plan_tagline' href=''>Click To See More (1 Box a Year)</a>
                                        <span className='plan_valid'>Valid for one year</span>
                                        <button className='pick_box_card_button'>Select</button>
                                    </div>
                                    <div className='benefits'>
                                        <ul className='benefits_list'>
                                            <li>TEAKWOOD BBG UTILITY CREAM</li>
                                            <li>SPICEDWOOD STYLING BALM</li>
                                            <li>CITRUS TREE BEARD OIL</li>
                                            <li>MERRILL STREET MUSTACHE WAX</li>
                                            <li>BAD BEARD GANG SHAMPOO</li>
                                            <li>BAD BEARD CONDITIONER</li>
                                            <li>BAD BEARD GANG BAMBOO COMB</li>
                                            <li>THE STAND OFF</li>
                                            <li>THE SHAKE DOWN BODY SCRUBBER</li>
                                            <li>BEARD SCRUBBER</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default PickYourBox