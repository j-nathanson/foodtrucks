import React from "react";
import CarouselComponent from "../CarouselComponent";
import PriceEstimator from "../PriceEstimatorComponent"

function CateringPage(props) {
    return (
        <div classNameName="container-fluid">
            <CarouselComponent carouselItems={props.carouselItems} />
            <div className="row">
                <PriceEstimator />
            </div>

        </div>
    )
}

export default CateringPage;