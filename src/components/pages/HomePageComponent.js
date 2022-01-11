import React from "react";
import JumbotronComponent from "../JumbotronComponent";
import ImageTextBox from "../ImageTextBoxComponent";
import ImageGallery from "../ImageGalleryComponent";

function HomePage(props) {

    return (
        <div>
            <JumbotronComponent />
            <ImageTextBox textObject={props.textObjects[0]} />
            <ImageGallery foodTrucks={props.foodTrucks} />
            <ImageTextBox textObject={props.textObjects[1]} />
        </div>
    )
}

export default HomePage;