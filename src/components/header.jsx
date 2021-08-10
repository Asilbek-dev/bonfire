import React from 'react'
import { Card, CardImg, Container } from 'reactstrap'
import '../style/header.scss'


export default function Header() {

    return (
        <>
            <Container id = "header">
                <p className = "header_theme">
                    Take your merch to the next level
                </p>
                <div className="d-lg-flex d-block flex-wrap justify-content-between align-items-center">
                    <Card>
                        <CardImg  src = "./images/Rectangle.png"></CardImg> 
                    </Card>
                    <Card className = "card2">
                        <CardImg  src = "./images/Rectangle (1).png"></CardImg> 
                    </Card>
                    <Card className = "card3">
                        <CardImg  src = "./images/Rectangle (2).png "></CardImg> 
                    </Card>
                    <Card className = "card2">
                        <CardImg  src = "./images/Rectangle (3).png "></CardImg> 
                    </Card>
                    <Card>
                        <CardImg  src = "./images/Rectangle (4).png "></CardImg> 
                    </Card>
                </div>
            </Container>
        </>
    )
}
