import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs="4" sm="6" className="links-container">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/catering'>Catering</Link></li>
                            <li><Link to='/ourtrucks'>Our Trucks</Link></li>
                        </ul>
                    </Col>

                    <Col xs="8" sm="6" className="mx-auto">
                        <div className="text-center mb-3">
                            <h5>Social</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="http://instagram.com/" target="_blank" rel="noreferrer" className="btn btn-lg"><i className="fa fa-instagram fa-2x"></i></a>
                            <a href="http://facebook.com/" target="_blank" rel="noreferrer" className="btn btn-lg"><i className="fa fa-facebook fa-2x"></i></a>
                            <a href="http://twitter.com/" target="_blank" rel="noreferrer" className="btn btn-lg"><i className="fa fa-twitter fa-2x"></i></a>
                            <a href="http://youtube.com/" target="_blank" rel="noreferrer" className="btn btn-lg"><i className="fa fa-youtube fa-2x"></i></a>
                        </div>
                    </Col>
                </Row >
            </Container >
        </footer >
    )
}

export default Footer;

