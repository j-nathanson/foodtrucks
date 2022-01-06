import React from "react"
import { Card, CardBody, CardHeader, CardImg } from "reactstrap";

export default function TruckInfoCard() {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <Card>
                <CardImg src="/assets/images/big-d-2.jpeg" className="card--image" alt="truck" />
                <CardHeader>Big D Food truck</CardHeader>
                <CardBody>
                    <p>rating</p>
                    <a href="http://www.bigdsgrub.com/menu/">Check out our menu</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, expedita.</p>
                </CardBody>
            </Card>
        </div>
    )
}