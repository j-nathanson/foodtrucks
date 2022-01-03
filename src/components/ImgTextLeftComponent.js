import React from "react";
import { Container, Row, Col } from "reactstrap";

function ImgTextLeft() {
    return (
        <Container fluid className="img-text-left p-4">
            <Row className="justify-content-center">
                <h2>Who We Are</h2>
            </Row>
            <Row className="align-items-center">
                <Col sm="7" className=" order-sm-last">
                    <img src='assets/images/hamburger.jpg' alt="hamburger" className="img-fluid img-thumbnail" />
                </Col>
                <Col sm="5">
                    <p>
                        "We are foodies with a mission of connecting New Yorkers with the hidden gems offered on four wheels. Whether you're looking for a quick bite or need your next event planned, we got you covered."
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default ImgTextLeft;