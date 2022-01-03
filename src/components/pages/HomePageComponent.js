import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


function HomePage(props) {
    
    return (
        <div className="">
            <Jumbotron >
                <Container>
                    <h1 className="display-4">New York City's Best Food Trucks</h1>
                    <Link to='/ourtrucks'>
                        <Button color="info" size="lg">Find our Trucks</Button>
                    </Link>
                </Container>
            </Jumbotron>
            <Container fluid className="img-text-left p-4">
                <Row className="justify-content-center">
                    <h2>Who We Are</h2>
                </Row>
                <Row className="align-items-center">
                    <Col sm="7" className=" order-sm-last">
                        <img src='assets/images/hamburger.jpg' alt="hamburger" className="img-fluid img-thumbnail" />
                    </Col>
                    <Col sm="5">
                        <p>"We are foodies with a mission of connecting New Yorkers with the hidden gems offered
                            on
                            four wheels.
                            Whether you're looking for a quick bite or need your next event planned, we got you covered"
                        </p>
                    </Col>

                </Row>
            </Container>
            <h3>Card Gallery img only</h3>
            <h3>Image Text Right</h3>
        </div>
    )
}

export default HomePage;