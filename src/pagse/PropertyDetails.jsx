import React from 'react';
import PropertyCarosal from "../components/PropertyCarosal";
import PropertyCard from "../components/PropertyCard";
import Footer from '../components/home/footer'
import Nav from '../components/navbar'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
function PropertyDetails(props) {
    return (
        <div>
            <div className="pd6p navback-color" >
                    <Nav hasback={true} />
                </div>
            <PropertyCarosal />
            <div className="container text-left mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <h3>
                                Description
                </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vel illo accusamus numquam consequatur fuga doloremque tempore molestias nulla deleniti expedita aperiam at ipsum vitae, dicta, sint soluta cupiditate iure.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vel illo accusamus numquam consequatur fuga doloremque tempore molestias nulla deleniti expedita aperiam at ipsum vitae, dicta, sint soluta cupiditate iure.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vel illo accusamus numquam consequatur fuga doloremque tempore molestias nulla deleniti expedita aperiam at ipsum vitae, dicta, sint soluta cupiditate iure.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vel illo accusamus numquam consequatur fuga doloremque tempore molestias nulla deleniti expedita aperiam at ipsum vitae, dicta, sint soluta cupiditate iure.
                </p>

                        </div>
                        <div className='mt-3'>
                            <h3>
                                Property Details
            </h3>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <div className='propertyDec'>
                                    <div>
                                        Bedroom:
                                    </div>
                                        3
                                    </div>
                                <div className='propertyDec'>
                                    <div>
                                        Rooms:
                                    </div>
                                        3
                                    </div>
                                <div className='propertyDec'>
                                    <div>
                                        size:
                                    </div>
                                        3
                                    </div>
                                <div className='propertyDec'>
                                    <div>
                                        orienten:
                                    </div>
                                        3
                                    </div>
                            </div>

                        </div>
                        <div className='mt-3'>
                            <h3>
                                Facilities
                            </h3>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <div className='propertyDec'>
                                    Air Conditioning
                                    </div>
                                <div className='propertyDec'>
                                    Build in wardobes
                                    </div>
                                <div className='propertyDec'>
                                    Dishwasher
                                    </div>
                                <div className='propertyDec'>
                                    Fencing
                                    </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='rounded border p-2'>
<h3>
    Location
</h3>
<div className='myMap'>

</div>
                        </div>
                        <h4 className="mt-3">
                            Share
                        </h4>
                        <div className="mySharLinks">
<FaFacebookF/>
<FaTwitter/>
<FaInstagram/>
                        </div>
                    </div>
                </div>
                <div className='mt-3 mb-5'>
                    <h3 className='mb-3'>
                        Related Properties
</h3>
                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <PropertyCard />
                            </div>
                            <div className="col-md-4">
                                <PropertyCard />
                            </div>
                            <div className="col-md-4">
                                <PropertyCard />
                            </div>
                        </div>
                    </div>
                </div>
<Footer/>
            </div>
        </div>
    );
}

export default PropertyDetails;