import React from 'react'
import { Button, CardImg, Col, Container, Row } from 'reactstrap'
import '../style/footer.scss'

export default function Footer() {
    return (
        <main id = "footer">
            <Container>
                <Row>
                    <Col xs = "6" lg = {{size: "3"}} className = "footer_logo">
                        <CardImg src = "./images/logoimg.png"></CardImg>
                        <p>Where the world goes for premium custom shirts</p>
                    </Col>
                    <Col xs = "6" lg = {{size: "2"}} className = "footer_menu">
                        <h5>Using bonfire</h5>
                        <p>Sell shirts online</p>
                        <p>Start a fundraiser</p>
                        <p>Order custom shirts</p>
                        <p>YouTube creators</p>
                        <p>Online stores</p>
                        <p>Log In</p>
                        <p>Track my order</p>
                    </Col>
                    <Col xs = "6" lg = {{size: "3"}} className = "footer_menu">
                        <h5>Resources</h5>
                        <p>Help center</p>
                        <p>Design templates</p>
                        <p>Request a custom design</p>
                        <p>Product catalog</p>
                        <p>Pricing calculator</p>
                        <p>Blog</p>
                        <p>Stories</p>
                    </Col>
                    <Col xs = "6" lg = {{size: "2"}} className = "footer_menu">
                        <h5>Company</h5>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Reviews</p>
                        <p>Contact</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </Col>
                    <Col xs = "6" lg = {{size: "2"}} className = "footer_menu">
                        <h5>Follow us</h5>
                        <p>
                            <span className = "fab fa-facebook-f text-light"></span>
                            <span className = "fab fa-instagram text-light"></span>
                            <span className = "fab fa-pinterest-p text-light"></span>
                            <span className = "fab fa-twitter text-light"></span>
                        </p>
                    </Col>
                </Row>
                <Row className = "footer_end">
                    <Col xs = "3">
                        <p>© 2021 Bonfire.com</p>
                        <p>DMCA Trademark Takedown</p>
                    </Col>
                    <Col xs = "6">
                        <Button>start a campaign</Button>
                    </Col>
                    <Col>
                        <CardImg src = "./images/Group.png"></CardImg>
                        <p>Based in Richmond, VA</p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
