import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="">
            <Jumbotron >
                <Container>
                    <h1 className="display-4">New York City's Best Food Trucks</h1>
                    <Link to='/ourtrucks'>
                        <Button color="info" size="lg">Find our Trucks</Button>
                    </Link>
                </Container>
            </Jumbotron>
            <h3>Image Text Left</h3>
            <h3>Card Gallery img only</h3>
            <h3>Image Text Right</h3>
        </div>
    )
}

export default HomePage;