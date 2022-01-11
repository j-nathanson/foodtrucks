import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ImageTextBox from "../ImageTextBoxComponent";
import TruckInfoCard from "../TruckInfoCardComponent";

function FilterCardGallery(props) {
    if (props.choice === "everything") {
        const cardGallery = props.foodTrucks.map(foodTruck => {
            return (
                <TruckInfoCard key={foodTruck.id} foodTruck={foodTruck} />
            )
        })
        return cardGallery;
    } else {
        const cardGallery = props.foodTrucks.filter(foodTruck => foodTruck.cuisine === props.choice).map(foodTruck => {
            return (
                <TruckInfoCard key={foodTruck.id} foodTruck={foodTruck} />
            )
        })
        return cardGallery;
    }
}
class TrucksPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choice: "everything"
        }
    }

    handleChange = (event) => {
        const choice = event.target.value;
        this.setState({ choice: choice });

    }

    render() {
        return (
            <Container fluid >
                <h1 className="truck-page-header">Our Trucks</h1>
                <Row className="justify-content-center">
                    <Col xs="10" className="d-flex justify-content-center align-items-center">
                        <label htmlFor="filter" className="mr-2">Choose a cuisine </label>
                        <select onChange={this.handleChange} id="filter">
                            <option value="everything">Everything</option>
                            <option value="burgers">Burgers</option>
                            <option value="mexican">Mexican</option>
                            <option value="sushi">Sushi</option>
                        </select>
                    </Col>
                </Row>
                <Row className="p-2">
                    <FilterCardGallery choice={this.state.choice} foodTrucks={this.props.foodTrucks} />
                </Row>
                <ImageTextBox textObject={this.props.textObjects[2]}></ImageTextBox>
            </Container>
        )
    }
}

export default TrucksPage;