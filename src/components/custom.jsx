import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import '../style/custom.scss'

export default function Custom() {
    return (
        <>
            <Container id = "custom">
                <Row>
                    <Col className = "custom_theme mt-5">
                        <p>Trusted by top creators</p>
                        <div className="d-flex justify-content-around align-items-center flex-wrap py-2 px-5">
                            <img className = "mb-3" src="./images/Rectangle (5).png" alt="" />
                            <img className = "mb-3" src="./images/Rectangle (6).png" alt="" />
                            <img className = "mb-3" src="./images/Rectangle (7).png" alt="" />
                            <img className = "mb-3" src="./images/Rectangle (8).png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className = "custom_background">
                <Container>
                    <Card>
                        <img src="./images/Rectangle (9).png" alt="" />
                        <div className="card_text">
                            <p>Lock in the extra profits</p>
                            <p>Custom</p>
                            <p>Revenue Splits</p>
                            <p>Bonfire X members get exclusive access to our straightforward boosted revenue sharing program that is individually customized for each creator.</p>
                        </div>
                    </Card>
                </Container>
            </div>
        </>
    )
}
