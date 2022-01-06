import React from "react";
import ImageTextBox from "../ImageTextBoxComponent";
import TruckInfoCard from "../TruckInfoCardComponent";

function TrucksPage(props) {
    return (
        <div className="container-fluid">
            <h3>Header</h3>
            <div className="row">
            <TruckInfoCard />
            <TruckInfoCard />
            <TruckInfoCard />
            </div>
            
            <ImageTextBox textObject={props.textObjects[2]}></ImageTextBox>
        </div>
    )
}

export default TrucksPage;