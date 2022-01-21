import React, { useState } from 'react';
import { Button, Col, Container, Label, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { postFeedback } from '../redux/formSlice';
import { useDispatch } from 'react-redux';

// Validators
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const isEmail = val => emailPattern.test(val);

function CateringModal() {
    const [isModalOpen, setModal] = useState(false);
    const dispatch = useDispatch();

    const toggleModal = () => {
        setModal(!isModalOpen);
    }
    const handleSubmit = (values) => {
        toggleModal();
        dispatch(postFeedback(values))
    }
    return (
        <Container>
            <Row className='justify-content-center toggle-modal-btn'>
                <Button onClick={() => toggleModal()} color='info' size='lg' className='mb-3'>
                    Start Here
                </Button>
            </Row>
            <Modal isOpen={isModalOpen} toggle={() => toggleModal()}>
                <ModalHeader toggle={() => toggleModal()}>
                    Book a truck
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)} className='container'>
                        <div className='form-group'>
                            <Label htmlFor='name'>Your Name</Label>
                            <Control.text model='.name' id='name' name='name' className='form-control' placeholder='John Truckman'
                                validators={{
                                    required,
                                    minLength: minLength(2),
                                    maxLength: maxLength(20)
                                }} />
                            <Errors className="text-danger" model=".name" show="touched" component="div" messages={{
                                required: "Required",
                                minLength: "Must be at least 2 characters",
                                maxLength: 'Must be 20 characters or less'
                            }}
                            />
                        </div>
                        <div className='form-group'>
                            <Label htmlFor='email'>Your Name</Label>
                            <Control.text type='email' model='.email' id='email' name='email' className='form-control' placeholder='gyroking99@gmail.com'
                                validators={{
                                    required,
                                    isEmail,
                                }} />
                            <Errors className="text-danger" model=".email" show="touched" component="div" messages={{
                                required: "Required",
                                isEmail: "Please enter a valid email."

                            }}
                            />
                        </div>
                        <div className='form-group'>
                            <Label htmlFor='date'>Date of Event</Label>
                            <Control.text type='date' model='.date' id='date' name='date' className='form-control' validators={{ required }} />
                            <Errors className="text-danger" model=".date" show="touched" component="div" messages={{ required: "Required" }} />
                        </div>
                        <div className='form-group'>
                            <div className='row justify-content-center'>
                                <Label>How many guest are you expecting?</Label>
                            </div>
                            <Row>
                                <Col>
                                    <Row className='justify-content-center'>
                                        <Label htmlFor='lessThan100'>50-200</Label>
                                    </Row>
                                    <Control.radio model='.guests' id='lessThan100' name='guests' value='small' className='form-control' validators={{ required }} />
                                    <Errors className="text-danger" model=".guests" show="touched" component="div" messages={{ required: "Required" }} />
                                </Col>
                                <Col>
                                    <Row className='justify-content-center'>
                                        <Label htmlFor='medium'>200-350</Label>
                                    </Row>
                                    <Control.radio model='.guests' id='medium' name='guests' value='medium' className='form-control' />
                                </Col>
                                <Col>
                                    <Row className='justify-content-center'>
                                        <Label htmlFor='large'>350+</Label>
                                    </Row>
                                    <Control.radio model='.guests' id='large' name='guests' value='large' className='form-control' />
                                </Col>
                            </Row>
                        </div>
                        <div className='form-group'>
                            <Label htmlFor='foodTrucks'>Select your favorite truck</Label>
                            <Control.select model='.foodTrucks' id='foodTrucks' name='foodTrucks' className='form-control'>
                                <option value='none' selected disabled hidden>Select an Option</option>
                                <option value="Big D's Grub">Big D's Grub</option>
                                <option value='Tacos El Poblanito'>Tacos El Poblanito</option>
                                <option value="Stuf'd Truck">Stuf'd Truck</option>
                                <option value='Tacos El Bronco'>Tacos El Bronco</option>
                                <option value='Poke Motion'>Poke Motion</option>
                                <option value='Dirty Bird'>Dirty Bird</option>
                            </Control.select>
                        </div>
                        <div className='form-group'>
                            <Label htmlFor='text'>Any additional info?</Label>
                            <Control.textarea model='.text' id='text' name='text' className='form-control' rows={6} />
                        </div>
                        <Button type='submit' value='submit' color='info'>Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </Container>
    )
}

export default CateringModal;