import React from "react";
import "../style/selling.scss";
import { CardImg, Col, Container, Row } from "reactstrap";

export default function Selling() {
  return (
    <main id="sell">
      <Container>
        <Row>
          <Col className="sell_theme">
            <p>Designed just for you</p>
            <h4>Customized Selling</h4>
            <h4>Experience</h4>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg={{ size: "6" }} md={{ size: "6" }} className="mt-4">
            <CardImg src="./images/sell.png"></CardImg>
          </Col>
          <Col xs="12" lg={{ size: "6" }} md={{ size: "6" }}>
            <p className="text">
              Our in-house design team will work with you to create a custom
              store that seamlessly represents your brand.
            </p>
            <CardImg src="./images/sell2.png"></CardImg>
          </Col>
        </Row>
        <Row>
            <Col xs = "12" lg = {{size: "4"}} md = {{size: "6"}} className = "sell_end">
                <div className = "cricle1"></div>
                <p>Free marketing samples</p>
                <p>We’ll send you free samples of your merch to use in your marketing materials.</p>
            </Col>
            <Col xs = "12" lg = {{size: "4"}} md = {{size: "6"}} className = "sell_end">
                <div className = "cricle2"></div>
                <p>Dedicated account management</p>
                <p>1-on-1 support to help you plan and execute your product launches.</p>
            </Col>
            <Col xs = "12" lg = {{size: "4"}} md = {{size: "6"}} className = "sell_end">
                <div className = "cricle3"></div>
                <p>Evergreen campaigns</p>
                <p>Decide which campaigns are always active so you never miss a sale.</p>
            </Col>
        </Row>
      </Container>
    </main>
  );
}



