import React from "react";
import { Container } from "reactstrap";
import CarouselComponent from "../CarouselComponent";
import PriceEstimator from "../PriceEstimatorComponent";
import CateringModal from "../CateringModalComponent";
import ImageTextBox from "../ImageTextBoxComponent";
import { useSelector } from 'react-redux';

function CateringPage() {
    const textObject = useSelector(state => state.textObjectReducer.textObjects[3]);

    return (
        <Container fluid className="p-0">
            <CarouselComponent />
            <ImageTextBox textObject={textObject} />
            <PriceEstimator />
            <CateringModal />
        </Container>
    )
}

export default CateringPage;