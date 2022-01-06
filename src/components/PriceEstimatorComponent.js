import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class PriceEstimator extends Component {
    constructor(props) {
        super(props)


        this.state = {
            costPerGuest: 14,
            totalCost: 700,
            sliderGuestValue: 50,
            isSideChecked: false,
            isEntreeChecked: false,
            isDessertChecked: false,
            sideCost: 0,
            entreeCost: 0,
            dessertCost: 0

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

        sideBoolean ? this.setSideCost(150) : this.setSideCost(0);

        this.setState(
            { isSideChecked: sideBoolean }
        )
    }
    toggleIsEntreeChecked = () => {
        const entreeBoolean = !this.state.isEntreeChecked;

        entreeBoolean ? this.setEntreeCost(200) : this.setEntreeCost(0);

        this.setState(
            { isEntreeChecked: entreeBoolean }
        )
    }
    toggleIsDessertChecked = () => {
        const dessertBoolean = !this.state.isDessertChecked;

        dessertBoolean ? this.setDessertCost(100) : this.setDessertCost(0);

        this.setState(
            { isDessertChecked: dessertBoolean }
        )
    }

    // Use the state to compute labor cost plus any extra costs
    computeCost = (numGuest, sideCost = this.state.sideCost, entreeCost = this.state.entreeCost, dessertCost = this.state.dessertCost) => {

        const costPerGuest = this.state.costPerGuest;
        let laborCost = costPerGuest * numGuest;

        if (sideCost) {
            laborCost += sideCost;
        }
        if (entreeCost) {
            laborCost += entreeCost;
        }
        if (dessertCost) {
            laborCost += dessertCost;
        }
        this.setState(
            { totalCost: laborCost }
        )
    }


    render() {
        const isSideActive = this.state.isSideChecked;
        const isEntreeActive = this.state.isEntreeChecked;
        const isDessertActive = this.state.isEntreeChecked;
        return (
            <div className="container-fluid price-estimator p-5">
                <div className="row justify-content-center">
                    <h1>price estimator</h1>
                </div>
                <div className="row justify-content-center"> number of guests: {this.state.sliderGuestValue}
                </div>
                <div className="row">
                    <div className="col-2 startGuest">
                        <span>50</span>
                    </div>
                    <div className="col-8"> <input type="range" className="mb-4" min="50" max="500" id="slide" step="10" value={this.state.sliderGuestValue} onChange={this.handleSliderChange} />
                    </div>
                    <div className="col-2 endGuest">
                        <span>500</span>
                    </div>
                </div>


                <div className="row">
                    <div className="col-8 col-md-6 mx-auto d-flex justify-content-around border">
                        <Button
                            onClick={this.toggleIsSideChecked}
                            size="lg"
                            className={isSideActive ? "btn-info" : "btn-light btn-outline-info"}>
                            Sides
                        </Button>
                        <Button
                            onClick={this.toggleIsEntreeChecked}
                            size="lg"
                            className={isEntreeActive ? "btn-info" : "btn-light btn-outline-info"}>
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
                    <h3>approximate cost</h3>
                </div>
                <div className="row justify-content-center">

                    <span>${this.state.totalCost}</span>
                </div>

            </div>
        )
    }
}

export default PriceEstimator;