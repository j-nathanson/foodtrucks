import React from "react";
import { Container } from "reactstrap";
import CarouselComponent from "../CarouselComponent";
import PriceEstimator from "../PriceEstimatorComponent";
import CateringModal from "../CateringModalComponent";
import ImageTextBox from "../ImageTextBoxComponent";

function CateringPage(props) {
    return (
        <Container fluid className="p-0">
            <CarouselComponent carouselItems={props.carouselItems} />
            <ImageTextBox textObject={props.textObjects[3]} />
            <PriceEstimator catering={props.catering} />
            <CateringModal />
        </Container>
    )
}

export default CateringPage;