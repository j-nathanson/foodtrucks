import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import { useSelector, useDispatch, } from 'react-redux'
import { changeGuestNum, toggleSides, toggleEntrees, toggleDessert } from '../redux/estimatorSlice'

function PriceEstimator() {
    // SELECT VARIABLES FROM THE STORE
    const guestNum = useSelector(state => state.estimatorReducer.guestNum);
    const costPerGuest = useSelector(state => state.estimatorReducer.costs.costPerGuest);

    const sideCost = useSelector(state => state.estimatorReducer.costs.sideCost);
    const entreeCost = useSelector(state => state.estimatorReducer.costs.entreeCost);
    const dessertCost = useSelector(state => state.estimatorReducer.costs.dessertCost);

    // Boolean values
    const isSideChecked = useSelector(state => state.estimatorReducer.isSideChecked);
    const isEntreeChecked = useSelector(state => state.estimatorReducer.isEntreeChecked);
    const isDessertChecked = useSelector(state => state.estimatorReducer.isDessertChecked);

    const dispatch = useDispatch();

    const total = () => {
        let cost = guestNum * costPerGuest;
        if (isSideChecked) {
            cost += sideCost
        }
        if (isEntreeChecked) {
            cost += entreeCost
        }
        if (isDessertChecked) {
            cost += dessertCost
        }
        return cost
    }

    return (
        <Container fluid className='price-estimator p-5'>
            <Row className='justify-content-center text-center'>
                <h1 className='price-estimator-heading'>price estimator</h1>
            </Row>
            <Row className='justify-content-center'>
                <h3>number of guests: <span className='price-estimator-guests'>{guestNum}</span></h3>
            </Row>
            <Row className='my-5'>
                <Col xs='2' className='startGuest'>
                    <span>50</span>
                </Col>
                <Col xs='8'>
                    <input type='range'
                        min='50' max='500' id='slide' step='10'
                        value={guestNum}
                        onChange={(e) => dispatch(changeGuestNum(e.target.value))} />
                </Col>
                <Col xs='2' className='endGuest'>
                    <span>500</span>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <h3>what will you serve?</h3>
            </Row>
            <Row className='mb-5'>
                <Col xs='12' sm='8' md='6' className='mx-auto btn-box'>
                    <Button
                        onClick={() => dispatch(toggleSides())}
                        size='lg'
                        className={isSideChecked ? 'btn-info' : 'btn-light btn-outline-info'}>
                        Sides
                    </Button>
                    <Button
                        onClick={() => dispatch(toggleEntrees())}
                        size='lg'
                        className={isEntreeChecked ? 'btn-info mx-2' : 'btn-light btn-outline-info mx-2'}>
                        Entrees
                    </Button>
                    <Button
                        onClick={() => dispatch(toggleDessert())}
                        size='lg'
                        className={isDessertChecked ? 'btn-info' : 'btn-light btn-outline-info'}>
                        Dessert
                    </Button>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <h2>approximate cost</h2>
            </Row>
            <Row className='justify-content-center'>
                <span className='total-cost'> ${total()}</span>
            </Row>
        </Container >
    )
}

export default PriceEstimator;