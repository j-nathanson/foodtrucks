import React from "react";
import JumbotronComponent from "../JumbotronComponent";
import ImageTextBox from "../ImageTextBoxComponent";
import ImageGallery from "../ImageGalleryComponent";
import { useSelector } from 'react-redux';

function HomePage(props) {
    const textObjectTop = useSelector(state => state.textObjectReducer.textObjects[0]);
    const textObjectBottom = useSelector(state => state.textObjectReducer.textObjects[1]);
  
    return (
        <div>
            <JumbotronComponent />
            <ImageTextBox textObject={textObjectTop} />
            <ImageGallery foodTrucks={props.foodTrucks} />
            <ImageTextBox textObject={textObjectBottom} />
        </div>
    )
}

export default HomePage;