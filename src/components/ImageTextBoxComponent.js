import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

function ImageTextBox(props) {

    return (
        <Container fluid className={props.textObject.style} key={props.textObject.id}>
            <Row className="justify-content-center text-center">
                <h2>{props.textObject.heading}</h2>
            </Row>
            <Row className="align-items-center">
                <Col sm="7" className={props.textObject.imgOrder}>
                    <img src={props.textObject.img} alt={props.textObject.alt} className="img-fluid img-thumbnail" />
                </Col>
                <Col sm="5">
                    <p>{props.textObject.description}</p>
                    <Row className="justify-content-center">
                        <Link to={props.textObject.buttonLink}>
                            <Button className={props.textObject.showButton}>
                                {props.textObject.buttonText}
                            </Button>
                        </Link>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default ImageTextBox;