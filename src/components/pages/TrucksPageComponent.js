import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ImageTextBox from "../ImageTextBoxComponent";
import TruckInfoCard from "../TruckInfoCardComponent";
import { useSelector, useDispatch } from 'react-redux';
import { setChoice } from '../../redux/foodTruckSlice';


function TrucksPage() {
    const foodTrucks = useSelector(state => state.foodTruckReducer.foodTrucks)
    const textObject = useSelector(state => state.textObjectReducer.textObjects[2]);
    const dispatch = useDispatch();

    const handleChange = (choice) => {
        dispatch(setChoice(choice));
    }

    const cardGallery = foodTrucks.map(foodTruck => {
        return (
            <TruckInfoCard key={foodTruck.id} foodTruck={foodTruck} />
        )
    })

    return (
        <Container fluid >
            <h1 className="truck-page-header">Our Trucks</h1>
            <Row className="justify-content-center">
                <Col xs="10" className="d-flex justify-content-center align-items-center">
                    <label htmlFor="filter" className="mr-2">Choose a cuisine </label>
                    <select onChange={(e) => handleChange(e.target.value)} id="filter">
                        <option value="everything">Everything</option>
                        <option value="burgers">Burgers</option>
                        <option value="mexican">Mexican</option>
                        <option value="sushi">Sushi</option>
                    </select>
                </Col>
            </Row>
            <Row className="p-2">
                {cardGallery}
            </Row>
            <ImageTextBox textObject={textObject}></ImageTextBox>
        </Container>
    )
}

export default TrucksPage;