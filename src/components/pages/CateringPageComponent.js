import React from "react";
import CarouselComponent from "../CarouselComponent";
import PriceEstimator from "../PriceEstimatorComponent";
import CateringModal from "../CateringModalComponent";
import ImageTextBox from "../ImageTextBoxComponent";

function CateringPage(props) {
    return (
        <div classNameName="container-fluid">
            <CarouselComponent carouselItems={props.carouselItems} />
            <ImageTextBox textObject={props.textObjects[3]}/>
            <div className="row">
                <PriceEstimator />
            </div>
            <CateringModal/>

        </div>
    )
}

export default CateringPage;