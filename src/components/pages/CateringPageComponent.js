import React from "react";
import CarouselComponent from "../CarouselComponent"

function CateringPage(props) {
    return (
        <div classNameName="container-fluid">
            <CarouselComponent carouselItems={props.carouselItems}/>
            <h3>Price Estimator</h3>
            <h3>Modal</h3>
        </div>
    )
}

export default CateringPage;