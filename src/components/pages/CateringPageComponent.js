import React from "react";
import CarouselComponent from "../CarouselComponent";
import PriceEstimator from "../PriceEstimatorComponent";
import CateringModal from "../CateringModalComponent";

function CateringPage(props) {
    return (
        <div classNameName="container-fluid">
            <CarouselComponent carouselItems={props.carouselItems} />
            <div className="row">
                <PriceEstimator />
            </div>
            <CateringModal/>

        </div>
    )
}

export default CateringPage;