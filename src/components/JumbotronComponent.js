import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

function JumbotronComponent() {
    return (
        <Jumbotron >
            <Container>
                <h1 className='display-4'>New York City's Best Food Trucks</h1>
                <Link to='/ourtrucks'>
                    <Button color='info' size='lg'>Find our Trucks</Button>
                </Link>
            </Container>
        </Jumbotron>
    )
}

export default JumbotronComponent;