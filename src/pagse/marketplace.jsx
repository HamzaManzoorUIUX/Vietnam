import React from 'react';
import Heading5 from '../components/home/heading5';
import { Form, Button } from 'react-bootstrap'
import Footer from '../components/home/footer'
import Nav from '../components/navbar';
import PropertyImg1 from '../images/property/property1.jpg'

import PropertyCard from '../components/home/propertyCard'
const feat = [{ name: "Bed", val: "4" }, { name: "Bath", val: "1" }, { name: "Sqft", val: "200" }];
export default () => {
    return <><div className="bgimgcovermarketPlace">
        {//Top Section
        }
        <div className="pd6p navback-color zIndex3" >
            <Nav hasback={true} />
        </div>
        <div className="pd6p zIndex3">
            <div className="pb-8p">
                <h1 className="headtext">Marketplace</h1>
                <h5 className="headtextchild mt-3 ">Home/Marketplace</h5>
            </div>
        </div>
    </div>
<div className="row m-0">
            <div className="col-12 col-md-8 col-lg-8">

                <div className="mt-5 pb-5 ">
                    <div className="revcardss mt-5">
                        <div className="col-md-6 col-lg-5">
                            <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
                <div className="mt-5 p-2 p-lg-4 border-simple">
                    <Heading5 classes="form-head-main-center" title="Search Properties" />
                    <input className="form-control" placeholder="Search" />
                </div>
                <div className="mt-5 p-2 p-lg-4 border-simple">
                    <Heading5 classes="form-head-main-center" title="Suggesions" />
                    <div className="dsp-flex dsp-flex-wrap">
                        <button className="btn btn-info themeBackgroundColor listingbtn mr-2 mt-2">Appartments</button>
                        <button className="btn btn-info themeBackgroundColor listingbtn mr-2 mt-2">Residencial</button>
                        <button className="btn btn-info themeBackgroundColor listingbtn mr-2 mt-2">Lifestyle</button>
                        <button className="btn btn-info themeBackgroundColor listingbtn mr-2 mt-2">Commercial</button>
                        <button className="btn btn-info themeBackgroundColor listingbtn mr-2 mt-2">Luxary</button>
                    </div>
                </div>
            </div>
        </div>
     

        <div className="pd6p mt-5 pt-5">
            <Footer />
        </div>

    </>
}