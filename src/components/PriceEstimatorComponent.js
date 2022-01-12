import React, { Component } from "react";
import { Button, Container, Col, Row } from "reactstrap";


class PriceEstimator extends Component {
    constructor(props) {
        super(props)
        const startCost = props.catering.costPerGuest * props.catering.sliderGuestValue;

        this.state = {
            totalCost: startCost,
            sliderGuestValue: props.catering.sliderGuestValue,
            isSideChecked: false,
            isEntreeChecked: false,
            isDessertChecked: false,
        }
    }


    // When the slider moves update the states's sliderGuestValue and compute cost
    handleSliderChange = (event) => {
        const guestNum = event.target.value;
        this.setState({ sliderGuestValue: guestNum })

        this.computeCost(guestNum);
    }

    //    Update state's cost for additional items and compute a new total cost
    setSideCost = (newSideCost) => {
        const currentGuestCount = this.state.sliderGuestValue;
        const currentEntreeCost = this.state.entreeCost;
        const currentDessertCost = this.state.dessertCost;

        this.setState({ sideCost: newSideCost });
        this.computeCost(currentGuestCount, newSideCost, currentEntreeCost, currentDessertCost);
    }
    setEntreeCost = (newEntreeCost) => {
        const currentGuestCount = this.state.sliderGuestValue;
        const currentSideCost = this.state.sideCost;
        const currentDessertCost = this.state.dessertCost;

        this.setState({ entreeCost: newEntreeCost });
        this.computeCost(currentGuestCount, currentSideCost, newEntreeCost, currentDessertCost);
    }
    setDessertCost = (newDessertCost) => {
        const currentGuestCount = this.state.sliderGuestValue;
        const currentSideCost = this.state.sideCost;
        const currentEntreeCost = this.state.entreeCost;

        this.setState({ dessertCost: newDessertCost });
        this.computeCost(currentGuestCount, currentSideCost, currentEntreeCost, newDessertCost);
    }

    // togglers check and update boolean values, and call the setters
    toggleIsSideChecked = () => {
        const sideBoolean = !this.state.isSideChecked;
        const price = this.props.catering.sideCost;

        sideBoolean ? this.setSideCost(price) : this.setSideCost(0);

        this.setState(
            { isSideChecked: sideBoolean }
        )
    }
    toggleIsEntreeChecked = () => {
        const entreeBoolean = !this.state.isEntreeChecked;
        const price = this.props.catering.entreeCost;

        entreeBoolean ? this.setEntreeCost(price) : this.setEntreeCost(0);

        this.setState(
            { isEntreeChecked: entreeBoolean }
        )
    }
    toggleIsDessertChecked = () => {
        const dessertBoolean = !this.state.isDessertChecked;
        const price = this.props.catering.dessertCost;

        dessertBoolean ? this.setDessertCost(price) : this.setDessertCost(0);

        this.setState(
            { isDessertChecked: dessertBoolean }
        )
    }

    // Use the state to compute labor cost plus any extra costs
    computeCost = (numGuest, sideCost = this.state.sideCost, entreeCost = this.state.entreeCost, dessertCost = this.state.dessertCost) => {

        const costPerGuest = this.props.catering.costPerGuest;
        let cost = costPerGuest * numGuest;

        if (sideCost) {
            cost += sideCost;
        }
        if (entreeCost) {
            cost += entreeCost;
        }
        if (dessertCost) {
            cost += dessertCost;
        }
        this.setState(
            { totalCost: cost }
        )

    }


    render() {

        const isSideActive = this.state.isSideChecked;
        const isEntreeActive = this.state.isEntreeChecked;
        const isDessertActive = this.state.isDessertChecked;

        return (
            <Container fluid className="price-estimator p-5">
                <Row className="justify-content-center text-center">
                    <h1 className="price-estimator-heading">price estimator</h1>
                </Row>
                <Row className="justify-content-center">
                    <h3>number of guests: <span className="price-estimator-guests">{this.state.sliderGuestValue}</span></h3>
                </Row>
                <Row className="my-5">
                    <Col xs="2" className="startGuest">
                        <span>50</span>
                    </Col>
                    <Col xs="8">
                        <input type="range"
                            min="50" max="500" id="slide" step="10"
                            value={this.state.sliderGuestValue}
                            onChange={this.handleSliderChange} />
                    </Col>
                    <Col xs="2" className="endGuest">
                        <span>500</span>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <h3>what will you serve?</h3>
                </Row>

                <Row className="mb-5">
                    <Col xs="12" sm="8" md="6" className="mx-auto btn-box">
                   
                        <Button
                            onClick={this.toggleIsSideChecked}
                            size="lg"
                            className={isSideActive ? "btn-info" : "btn-light btn-outline-info"}>
                            Sides
                        </Button>
                        <Button
                            onClick={this.toggleIsEntreeChecked}
                            size="lg"
                            className={isEntreeActive ? "btn-info mx-2" : "btn-light btn-outline-info mx-2"}>
                            Entrees
                        </Button>
                        <Button
                            onClick={this.toggleIsDessertChecked}
                            size="lg"
                            className={isDessertActive ? "btn-info" : "btn-light btn-outline-info"}>
                            Dessert
                        </Button>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <h2>approximate cost</h2>
                </Row>
                <Row className="justify-content-center">
                    <span className="total-cost"> ${this.state.totalCost}</span>
                </Row>
            </Container>
        )
    }
}

export default PriceEstimator;