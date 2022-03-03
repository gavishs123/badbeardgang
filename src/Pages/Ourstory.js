import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../Component/Layout'
import beardman from '../images/banner_image.webp'


function OurStory() {
    return (
        <Layout>
            <section className='our-story-banner'>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col md={6} className="text-center">
                            <h1 className='banner-title'> SUAVE. CLEAN. SUITED. BOXED. SHIPPED. </h1>
                            <p className='banner-text'>Bad Beard Gangs mission is to change the Beard Game. We got tired of overpaying for products that are low quality. Because of this, we have vowed to find the highest standard of raw material, make it from scratch and share it with the world, without draining your wallet.</p>
                        </Col>
                        <Col md={6}>
                            <img className='man-image img-fluid' src={beardman} alt="beardman" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='raw_materials'>
                <Container>
                    <Col lg={12} className="text-center">
                        <div className='raw_materials_detail'>
                            <h1 className='our_story_title'>100% RAW MATERIALS</h1>
                            <h6 className='our_story_sub_title'>Here at BBG, we care about your face, hair, and skin.</h6>
                            <p className='our_story_text'>Bad Beard Gang offers the highest premium carrier oils, styling balms, mustache wax, and utility cream that are combined with essential oils in house, not a factory. With natural oils equally blended, it is designed to provide an overall healthy appearance with a light scent. Our products are perfectly conditioned for all four seasons. The entire beard care line helps to hydrate, condition, promote  growth, and control or eliminate dandruff. We have the best oils on the market, that is a fact! </p>
                            <p className='our_story_text'>It is no secret that we provide products that are essential to cleanse you from your chin all the way up to your scalp. However, we are focused on four main organic ingredients, Shea butter, Argon oil, Castor seed oil and Tea tree oil.  All which are perfectly blended with carrier oils to promote healthy skin and hair. Bad Beard Gang shampoo is immaculately formulated to give that fresh clean feeling to your beard and scalp. Our conditioner makes hair silky, deeply moisturized and provides a shine while taming frizz and split ends.</p>
                            <p className='our_story_text'>We are actively testing and searching for the highest quality of natural ingredients to bring to you, performance is key! Our collection of products will get bigger only when they perform at their best.</p>
                        </div>
                    </Col>
                </Container>
            </section>
        </Layout>
    )
}
    
export default OurStory