import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import JumbotronComponent from "../JumbotronComponent";
import ImgTextLeft from "../ImgTextLeftComponent";


function HomePage(props) {
    
    return (
        <div className="">
           <JumbotronComponent/>
            <ImgTextLeft/>
            <h3>Card Gallery img only</h3>
            <h3>Image Text Right</h3>
        </div>
    )
}

export default HomePage;