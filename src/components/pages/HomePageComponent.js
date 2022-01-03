import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import JumbotronComponent from "../JumbotronComponent";
import ImgTextBox from "../ImgTextBoxComponent";


function HomePage(props) {
    
    return (
        <div className="">
           <JumbotronComponent/>
            <ImgTextBox textObject={props.textObjects[0]}/>
            <h3>Card Gallery img only</h3>
            <ImgTextBox textObject={props.textObjects[1]}/>
        </div>
    )
}

export default HomePage;