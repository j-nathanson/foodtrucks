import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class PriceEstimator extends Component {
    constructor(props) {
        super(props)

        // sideCost, entreeCost, and dessertCost are initialized to 0 but should change to 150, 200, and 250 respectively
        this.state = {
            sideCost: 0,
            entreeCost: 0,
            dessertCost: 0,
            costPerGuest: 14,
            totalCost: 700,
            sliderGuestValue: 50,
            isSideChecked: false,
            isEntreesChecked: false,
            isDessertsChecked: false,

        }
    }


    // When the slider moves update the states's sliderGuestValue and compute cost
    handleSliderChange = (event) => {
        const guestNum = event.target.value;
        this.setState({ sliderGuestValue: guestNum })

        this.computeCost(guestNum);
    }


    // change sideCost
    setSideCost = (cost) => {
        this.setState({ sideCost: cost })
    }
    // when clicked store the opposite boolean value in a const. Then if true, update the sideCost to 150, else update it to 0. 
    toggleIsSideChecked = () => {
        const sideBoolean = !this.state.isSideChecked
        if (sideBoolean) {
            console.log("is true");
            this.setSideCost(150);
            console.log("sideCost has changed to ", this.state.sideCost)
        } else {
            this.setSideCost(0);
            console.log("is false");
        }
        this.setState(
            { isSideChecked: sideBoolean }
        )
    }

    // the total cost should equal the "number of guest" multiplied by the "cost per guess". Then add any additional costs. 

    // For example, if we have 50 guests and the cost per person is $14, then the product of these two is $700. Then if the 'sides' checkbox is not clicked then sideCost should equal '0' so $700 + 0 = $700.

    //if the 'sides' checkbox is clicked then sideCost should equal $150, so 700+150 = $850
    computeCost = (numGuest) => {
        console.log("GUEST NUMBER " + numGuest)
        console.log("COST PER GUEST " + this.state.costPerGuest)
        console.log("SIDE COST " + this.state.sideCost)

        let laborCost = (this.state.costPerGuest * numGuest);
        console.log("LABOR COST " + laborCost);


        laborCost += this.state.sideCost;

        this.setState(
            { totalCost: laborCost }
        )
    }


    render() {
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


                <div className="row justify-content-center">
                    <label htmlFor="sides" className="ml-1">Sides</label>
                    <input type="checkbox" onChange={this.toggleIsSideChecked} name="test" id="sides"></input>
                    <label htmlFor="entrees" className="ml-1">Entrees</label>
                    <input type="checkbox" onChange={this.toggleIsEntreesChecked} name="test" id="entrees" />
                    <label htmlFor="desserts" className="ml-1">Desserts</label>
                    <input type="checkbox" onChange={this.toggleIsDessertsChecked} name="test" id="Desserts" />
                </div>

                <div className="row justify-content-center">
                    <h3>approximate cost</h3>
                </div>
                <div className="row justify-content-center">

                    <span>${this.state.totalCost}-</span> <span>{this.state.totalCostHigh}</span>
                </div>
                <Button>modal button</Button>
            </div>
        )
    }
}

export default PriceEstimator;