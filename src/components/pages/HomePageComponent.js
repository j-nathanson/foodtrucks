import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import JumbotronComponent from "../JumbotronComponent";
import ImgTextBox from "../ImgTextBoxComponent";


function HomePage(props) {
    
    return (
        <div className="">
           <JumbotronComponent/>
            <ImgTextBox textObject={props.textObject}/>
            <h3>Card Gallery img only</h3>
            <h3>Image Text Right</h3>
        </div>
    )
}

export default HomePage;