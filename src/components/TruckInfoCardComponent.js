import React, { Component } from "react"
import { Card, CardBody, CardHeader, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

export default class TruckInfoCard extends Component {

    createStarBox = (numOfStars) => {

        let box = [];
        for (let i = numOfStars; i > 0; i--) {
            box.push(this.addStar(i))
        }
        return (
            <div>{box}  <i className="fa fa-yelp"></i></div>
        )
    }

    addStar = (key) => <i key={key} className="fa fa-star" />

    render() {

        return (
            <div className="col-12 col-md-6 col-lg-4">
                <Card className="truck-info-card m-2">
                    <CardImg src={this.props.foodTruck.imgCard} alt={this.props.foodTruck.className} />
                    <CardHeader>
                        <h4 className="text-center">{this.props.foodTruck.name}</h4>
                    </CardHeader>
                    <CardBody className="p-3">
                        <div className="row mb-2">
                            <div className="col-4 pr-0 d-flex justify-content-center">
                                {this.createStarBox(this.props.foodTruck.rating)}
                            </div>
                            <div className="col pl-0 d-flex justify-content-center">
                                <a href={this.props.foodTruck.menu}>Check out our menu</a>
                            </div>
                        </div>
                        <p>{this.props.foodTruck.description}</p>
                    </CardBody>
                </Card>
            </div>
        )
    }
}