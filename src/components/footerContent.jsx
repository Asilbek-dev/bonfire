import React from "react";
import { Button, Card, CardImg, Container } from "reactstrap";
import "../style/footerContent.scss";

export default function FooterContent() {
  return (
    <main id="footer-content">
      <Container>
        <div className="text_left">
            <p>Join Bonfire X to take your custom merch to the next level.</p>
            <Button className="bg-light">unlock access</Button>
        </div>
        <Card>
          <CardImg src="./images/girl.png"></CardImg>
          <Card>
            <CardImg src="./images/Frame.png"></CardImg>
          </Card>
        </Card>
      </Container>
    </main>
  );
}
