import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../style/products.scss'

export default function Products() {
    return (
        <main className = "bg-dark">
            <Container id = "product">
                <Row>
                    <Col lg = {{size: "3"}} md = {{size: "12"}} sm = {{size: "12"}} className = "text-center">
                        <div className="d-flex justify-content-around mb-5 mt-5 py-3">
                            <img src="./images/image1.png" alt="" />
                            <img src="./images/image2.png" alt="" />
                        </div>
                        <div className="d-flex justify-content-around mb-5 mt-5 py-3">
                            <img src="./images/image3.png" alt="" />
                            <img src="./images/image4.png" alt="" />
                        </div>
                        <div className="d-flex justify-content-around mb-5 mt-5 py-3">
                            <img src="./images/image5.png" alt="" />
                            <img src="./images/image6.png" alt="" />
                        </div>
                    </Col>
                    <Col lg = {{size: "6"}} md = {{size: "12"}} sm = {{size: "12"}} className = "text-center">
                        <div className="product_text mb-5 mt-5 py-3">
                            <p>More than just t-shirts</p>
                            <p>unlock exclusive products</p>
                            <p>With Bonfire X, you’ll unlock access to premium products from top merchandising brands. Your custom merch can be tailored to your exact needs.</p>
                        </div>
                    </Col>
                    <Col lg = {{size: "3"}} md = {{size: "12"}} sm = {{size: "12"}} className = "text-center">
                        <div className="d-flex justify-content-around mb-5 mt-5 py-3">
                            <img src="./images/image7.png" alt="" />
                            <img src="./images/image2.png" alt="" />
                        </div>
                        <div className="d-flex justify-content-around mb-5 mt-5 py-3">
                            <img src="./images/image9.png" alt="" />
                            <img src="./images/image10.png" alt="" />
                        </div>
                        <div className="d-flex justify-content-around mb-5 mt-5 py-3">
                            <img src="./images/image6.png" alt="" />
                            <img src="./images/image11.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
