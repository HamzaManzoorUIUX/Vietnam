import React from 'react';
import Heading5 from '../components/home/heading5';
import { Form, Button } from 'react-bootstrap'
import Footer from '../components/home/footer'
import Nav from '../components/navbar'
const feat = [{ name: "Bed", val: "4" }, { name: "Bath", val: "1" }, { name: "Sqft", val: "200" }];
export default () => {
    return <><div className="bgimgcoverlisting">
        {//Top Section
        }
        <div className="pd6p navback-color zIndex3" >
            <Nav hasback={true} />
        </div>
        <div className="pd6p zIndex3">
            <div className="pb-8p">
                <h1 className="headtext">Add Listing</h1>
                <h5 className="headtextchild mt-3 ">Home/Add Listing</h5>
            </div>
        </div>
    </div>
        {
            //happing Cities
        }

        <div className="pd6p mt-5" >
            <Heading5 title="Detailed Information" classes="form-head-main" />
            <div className="row">
                <div className="col-md-6">
                    <Form>
                        <Form.Group className="mt-3" controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Build</Form.Label>
                                    <Form.Control as="select" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>

                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="exampleForm.ControlSelect21">
                                    <Form.Label>Bedrooms</Form.Label>
                                    <Form.Control as="select" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>

                        </div>

                            <div >
                            <p className="form-group">Features</p>

                                </div>
                        <div className="dsp-flex dsp-flex-wrap">

                            {['Central Airconditioned', 'Window Covering', 'Swimming Pool', 'Heating System', 'Security System'].map((type) => (
                                <div key={`default-${type}`} className="mb-3 mr-4">
                                    <Form.Check
                                        type="checkbox"
                                        id={`default-${type}`}
                                        label={`${type}`}
                                    />


                                </div>
                            ))}
                        </div>

                        <Heading5 title="Contact Details" classes="form-head-main mt-4" />
                        <Form.Group className="mt-4" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                    
                                </Form.Group>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                 
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Phone(optional)</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone number" />
                                    
                                </Form.Group>
                            </div>

                        </div>
                       <div className="dsp-flex mt-3">
                       <button className="btn btn-info themeBackgroundColor listingbtn">
                                    Publish
                        </button>
                       </div>
                    </Form>
                </div>
            </div>

        </div>
        <div className="pd6p mt-5 pt-5">
            <Footer />
        </div>

    </>
}