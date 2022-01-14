import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle, Container, Row } from "reactstrap";


const renderCard = (foodTruck) => {

    return (
        <Link className="col-sm-6 col-md-4 p-1" to="/ourtrucks" key={foodTruck.id}>
            <Card >
                <CardImg top src={foodTruck.imgMain} />
                <CardImgOverlay>
                    <CardTitle>{foodTruck.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

function ImageGallery(props) {

    const directory = props.foodTrucks.map(foodTruck => renderCard(foodTruck))

    return (
        <Container fluid className="bg-info image-gallery">
            <Row className="text-center justify-content-center">
                <h2>Our Trucks</h2>
            </Row>
            <Row>
                {directory}
            </Row>
        </Container>
    )
}

export default ImageGallery;