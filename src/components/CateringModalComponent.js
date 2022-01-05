import React, { Component } from "react";
import { Button, Label, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CateringModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit = (values) => {
        this.toggleModal();
        console.log(values);

    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <Button onClick={this.toggleModal} color="info" className="btn-lg mb-3">Start Here</Button>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Book a truck
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)} className="container">

                            <div className="form-group">
                                <Label htmlFor="name">Your Name</Label>
                                <Control.text model=".name" id="name" name="name" className='form-control' placeholder="John Truckman" />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="email">Your Name</Label>
                                <Control.text type="email" model=".email" id="email" name="email" className='form-control' placeholder="gyroking99@gmail.com" />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="date">Date of Event</Label>
                                <Control.text type="date" model=".date" id="date" name="date" className='form-control' />
                            </div>
                            <div className="form-group">
                                <div className="row justify-content-center">
                                    <Label>How many guest are you expecting?</Label>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row justify-content-center">
                                            <Label htmlFor="lessThan100">50-200</Label>
                                        </div>
                                        <Control.radio model=".guests" id="lessThan100" name="guests" value="small" className='form-control' />
                                    </div>

                                    <div className="col">
                                        <div className="row justify-content-center">
                                            <Label htmlFor="medium">200-350</Label>
                                        </div>
                                        <Control.radio model=".guests" id="medium" name="guests" value="medium" className='form-control' />
                                    </div>
                                    <div className="col">
                                        <div className="row justify-content-center">
                                            <Label htmlFor="large">350+</Label>
                                        </div>
                                        <Control.radio model=".guests" id="large" name="guests" value="large" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="foodTrucks">Select your favorite truck</Label>
                                <Control.select model=".foodTrucks" id="foodTrucks" name="foodTrucks" className='form-control'>
                                    <option value="none" selected disabled hidden>Select an Option</option>
                                    <option value="Big D's Grub">Big D's Grub</option>
                                    <option value="Tacos El Poblanito">Tacos El Poblanito</option>
                                    <option value="Stuf'd Truck">Stuf'd Truck</option>
                                    <option value="Tacos El Bronco">Tacos El Bronco</option>
                                    <option value="Poke Motion">Poke Motion</option>
                                    <option value="Dirty Bird">Dirty Bird</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="text">Any additional info?</Label>
                                <Control.textarea model=".text" id="text" name="text" className="form-control" rows={6} />
                            </div>
                            <Button type="submit" value="submit" color="info"> submit</Button>
                        </LocalForm>

                    </ModalBody>

                </Modal>
            </div>
        )
    }
}



export default CateringModal;