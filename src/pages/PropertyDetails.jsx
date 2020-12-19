import React from 'react';
import PropertyCarosal from "../components/PropertyCarosal";
import MultiCarosal from '../components/MultiCarosal';
import Footer from '../components/home/footer'
import Nav from '../components/navbar'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { useHistory } from 'react-router-dom'
import {  useSelector } from 'react-redux'

function PropertyDetails(props) {

    const [item, setitem] = React.useState();
    const history = useHistory();
  const Exclusive=useSelector(x=>x.exclusive);
    React.useEffect(() => {

        if (props.location && props.location.state && props.location.state.item) {
            setitem(props.location.state.item);
        }
        else {

            history.replace('/')
        }
    }
        , []);

    return (
        <div>
            <div className="pd6p navback-color" >
                <Nav hasback={true} />
            </div>
            <PropertyCarosal title={item&& item.title ? item.title : ""} price={item&& item.price ? item.price : ""} description={item&&item.description ? item.description : ""} />
            <div className="container text-left mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <h3>
                                Description
                </h3>
                            <p>
                                {item&&item.description ? item.description : ""}
                            </p>

                        </div>
                        <div className='mt-3'>
                            <h3>
                                Property Details
            </h3>
                            <div className='d-flex flex-wrap justify-content-between'>
                              
                              {
                                  item&& item.attributes?item.attributes.map(x=>  <div className='propertyDec'>
                                  <div>
                                      {x.feature.name}:
                                  </div>
                                      {x.value}
                                  </div>):<></>
                              }
                              
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
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className='mt-3 mb-5'>
                    <h3 className='mb-3'>
                        Related Properties
</h3>
                    <div>
                        <MultiCarosal Exclusive={Exclusive}/>
                    </div>
                </div>
            </div>
                <Footer />
        </div>
    );
}

export default PropertyDetails;