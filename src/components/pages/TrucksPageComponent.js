import React, { Component } from "react";
import ImageTextBox from "../ImageTextBoxComponent";
import TruckInfoCard from "../TruckInfoCardComponent";

class TrucksPage extends Component {

    addStar = () => {
        return (
            <i className="fa fa-star"></i>
        )
    }
    render() {
        const cardGallery = this.props.foodTrucks.map(foodTruck => {
            return (
                <TruckInfoCard key={foodTruck.id} foodTruck={foodTruck} />
            )
        })
        return (
            <div className="container-fluid" >
                <h1 className="truck-page-header">Our Trucks</h1>
                <div className="row p-2">
                    {cardGallery}
                </div>

                <ImageTextBox textObject={this.props.textObjects[2]}></ImageTextBox>
            </div>
        )
    }

}


export default TrucksPage;