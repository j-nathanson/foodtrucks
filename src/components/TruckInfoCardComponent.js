import React from 'react';
import { Card, CardBody, CardHeader, CardImg, Col } from 'reactstrap';

function TruckInfoCard(props) {

    const createStarBox = (numOfStars) => {
        let box = [];
        for (let i = numOfStars; i > 0; i--) {
            box.push(addStar(i))
        }
        return (
            <div>{box}<i className='fa fa-yelp'></i></div>
        )
    }

    const addStar = (key) => <i key={`${props.foodTruck.id} star ${key}`} className='fa fa-star' />

    const stars = createStarBox(props.foodTruck.rating);

    return (
        <Col sm='12' md='6' lg='4'>
            <Card className='truck-info-card m-2'>
                <CardImg src={props.foodTruck.imgCard} alt={props.foodTruck.className}
                />
                <CardHeader>
                    <h4 className='text-center'>{props.foodTruck.name}</h4>
                </CardHeader>
                <CardBody className='p-3'>
                    <div className='row mb-2'>
                        <div className='col-4 pr-0 d-flex justify-content-center'>
                            {stars}
                        </div>
                        <div className='col pl-0 d-flex justify-content-center'>
                            <a href={props.foodTruck.menu}>Check out our menu</a>
                        </div>
                    </div>
                    <p>{props.foodTruck.description}</p>

                </CardBody>
            </Card>
        </Col>
    )
}

export default TruckInfoCard