import React from "react";
import { Container, Button, Card, Row, Col } from "reactstrap";
import "../style/service.scss";


const images = [
  {
    color: "#F3C3CF"
  },
  {
    color: "#EB9038"
  },
  {
    color: "#8DC4F3"
  },
  {
    color: "#E95B44"
  },
]
const images2 = [
  {
    color: "#B7B7B7"
  },
  {
    color: "#F3C3CF"
  },
  {
    color: "#EB9038"
  },
]
const images3 = [
  {
    color: "#8DC4F3"
  },
  {
    color: "#E95B44"
  },
  {
    color: "#B7B7B7"
  },
  {
    color: "#F3C3CF"
  },
]
export default function Service() {
  return (
    <>
      <Container id="service" className = "py-5">
        <p className="service_theme">
          Introducing Bonfire X—the exclusive merch concierge service for the
          world’s top creators.
        </p>
        <div className="text-center">
          <Button className="bg-light">unlock access</Button>
        </div>
        <Card>
          <div className="card_inside">
            <div>
              <span>
                <img src="./images/Vector.png" alt="" />
              </span>
              <p>
                Join the
                <i>
                  <svg
                    width="54"
                    height="53"
                    viewBox="0 0 54 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.992 24.4634L52.3237 0.910889H46.029L28.7703 23.0287L9.9496 0.910889H4.07293H1.16549H0.392273L23.3267 27.806L6.43902 46.0921L0.392273 52.3961H6.68643L24.9196 29.6683L44.3123 52.3961H45.1786H51.9673H53.8543L29.992 24.4634Z"
                      fill="url(#paint0_radial)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(27.1233 0.910889) rotate(90) scale(51.4852 53.462)"
                      >
                        <stop stop-color="#EB9038" />
                        <stop offset="0.515625" stop-color="#F3C3CF" />
                        <stop offset="1" stop-color="#8DC4F3" />
                      </radialGradient>
                    </defs>
                  </svg>
                </i>
                club
              </p>
              <div className="d-flex border-0">
                <div className="card_text">
                  <h5>Fully tailored</h5>
                  <h6>Custom store</h6>
                </div>
                <div className="card_text mx-4">
                  <h5>Unique </h5>
                  <h6>Merch access</h6>
                </div>
                <div className="card_text border-0">
                  <h5>Custom </h5>
                  <h6>Revenue splits</h6>
                </div>
              </div>
            </div>
            <h4>admit one</h4>
            <h3>admit one</h3>
          </div>
          <div className="card_cricle"></div>
        </Card>
        <Row className=" mt-5 card_one">
          <div className="card_two">
            <Row>
              <div className = "card_two_one">
                {images.map(({color}) => (
                  <svg width="162" height="158" viewBox="0 0 162 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89.606 72.122L156.941 0.23999H137.949L85.93 67.779L29.176 0.23999H11.465H2.66498H0.381958L69.5 82.367L18.594 138.214L0.381958 157.479H19.318L74.289 88.047L132.77 157.479H135.387H155.883H161.564L89.606 72.122Z" fill={color}/>
                  </svg>
                ))}
              </div>
            </Row>
            <Row>
              <div className = "card_two_two">
                {images2.map(({color}) => (
                  <svg width="162" height="158" viewBox="0 0 162 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89.606 72.122L156.941 0.23999H137.949L85.93 67.779L29.176 0.23999H11.465H2.66498H0.381958L69.5 82.367L18.594 138.214L0.381958 157.479H19.318L74.289 88.047L132.77 157.479H135.387H155.883H161.564L89.606 72.122Z" fill={color}/>
                  </svg>
                ))}
              </div>
            </Row>
            <Row>
              <div  className = "card_two_three">
                {images3.map(({color}) => (
                  <svg width="162" height="158" viewBox="0 0 162 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89.606 72.122L156.941 0.23999H137.949L85.93 67.779L29.176 0.23999H11.465H2.66498H0.381958L69.5 82.367L18.594 138.214L0.381958 157.479H19.318L74.289 88.047L132.77 157.479H135.387H155.883H161.564L89.606 72.122Z" fill={color}/>
                  </svg>
                ))}
              </div>
            </Row>
            <div className="card_cricle bg-dark"></div>
          </div>
        </Row>
      </Container>
    </>
  );
}
