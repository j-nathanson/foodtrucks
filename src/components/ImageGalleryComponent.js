import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";



// <Card>
// <Link to={`/directory/${campsite.id}`}>
//     <CardImg width='100%' src={campsite.image} alt={campsite.name} />
//     <CardImgOverlay>
//         <CardTitle>{campsite.name}</CardTitle>
//     </CardImgOverlay>
// </Link>
// </Card>

const renderCard = (foodTruck) => {
    console.log(foodTruck);
    return (
        <Link className=" col-sm-6 col-md-4 p-1" to="/ourtrucks">
            <Card key={foodTruck.id}>
                <CardImg top src={foodTruck.imgMain} />
                <CardImgOverlay>
                    <CardTitle>{foodTruck.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>

    )
}



function ImageGallery(props) {

    const directory = props.foodTrucks.map(foodTruck => renderCard(foodTruck))

    return (
        <div className="container-fluid bg-info">
            <div className="row text-center justify-content-center">
                <h2>Our Trucks</h2>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>

    )
}


export default ImageGallery;