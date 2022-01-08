import React, { Component } from "react";
import { Button, } from "reactstrap";


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
            <div className="container-fluid price-estimator p-5">
                <div className="row justify-content-center text-center">
                    <h1 className="price-estimator-heading">price estimator</h1>
                </div>
                <div className="row justify-content-center">
                    <h3>number of guests: <span className="price-estimator-guests">{this.state.sliderGuestValue}</span></h3>
                </div>
                <div className="row my-5">
                    <div className="col-2 startGuest">
                        <span>50</span>
                    </div>
                    <div className="col-8">
                        <input type="range"
                            min="50" max="500" id="slide" step="10"
                            value={this.state.sliderGuestValue}
                            onChange={this.handleSliderChange} />
                    </div>
                    <div className="col-2 endGuest">
                        <span>500</span>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <h3>what will you serve?</h3>
                </div>

                <div className="row mb-5">
                    <div className="col-12 col-sm-8 col-md-6 mx-auto btn-box">
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

                    </div>
                </div>

                <div className="row justify-content-center">
                    <h2>approximate cost</h2>
                </div>
                <div className="row justify-content-center">
                    <span className="total-cost"> ${this.state.totalCost}</span>
                </div>
            </div>
        )
    }
}

export default PriceEstimator;