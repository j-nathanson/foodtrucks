import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';


const renderCard = (foodTruck) => {

    return (
        <Link className='col-sm-6 col-md-4 p-1' to='/ourtrucks'>
            <Card key={foodTruck.id}>
                <CardImg top src={foodTruck.imgMain} />
                <CardImgOverlay>
                    <CardTitle>{foodTruck.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

function ImageGallery() {

    const foodTrucks = useSelector(state => state.foodTruckReducer.foodTrucks)
    const directory = foodTrucks.map(foodTruck => renderCard(foodTruck))

    return (
        <Container fluid className='bg-info image-gallery'>
            <Row className='text-center justify-content-center'>
                <h2>Our Trucks</h2>
            </Row>
            <Row>
                {directory}
            </Row>
        </Container>
    )
}

export default ImageGallery;