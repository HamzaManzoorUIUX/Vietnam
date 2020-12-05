import React from 'react';
import Heading5 from '../components/home/heading5';
import { Form, Button } from 'react-bootstrap'
import Footer from '../components/home/footer'
import Nav from '../components/navbar';
import newsimg1 from '../images/news/4.jpg';
import newsimg2 from '../images/news/5.jpg';
import newsimg3 from '../images/news/6.jpg';
import News from '../components/home/newscard'
const feat = [{ name: "Bed", val: "4" }, { name: "Bath", val: "1" }, { name: "Sqft", val: "200" }];
export default () => {
    return <><div className="bgimgcoverblog">
        {//Top Section
        }
        <div className="pd6p navback-color zIndex3" >
            <Nav hasback={true} />
        </div>
        <div className="pd6p zIndex3">
            <div className="pb-8p">
                <h1 className="headtext">Blogs</h1>
                <h5 className="headtextchild mt-3 ">Home/Blogs</h5>
            </div>
        </div>
    </div>


        <div className="row m-0">
            <div className="col-md-8">

                <div className="mt-5 pb-5 ">
                    <div className="revcardss mt-5">
                        <News img={newsimg1} desig="Tony Lee" subdesig="Coffee, Uncategorized" title="Chemex coffee for two people" date="January 23, 2017" />
                        <News img={newsimg2}  desig="Admin" subdesig="Coffee, Health & Care, Uncategorized" title="Reduce Unwanted Wrinkles" date="February 23, 2018" />
                        <News img={newsimg3} desig="Admin" subdesig="News, Uncategorized" title="Excited news about arrival fashion." date="January 23, 2017" />
                        <News img={newsimg1} desig="Tony Lee" subdesig="Coffee, Uncategorized" title="Chemex coffee for two people" date="January 23, 2017" />
                        <News img={newsimg2} desig="Admin" subdesig="Coffee, Health & Care, Uncategorized" title="Reduce Unwanted Wrinkles" date="February 23, 2018" />
                        <News img={newsimg3} desig="Admin" subdesig="News, Uncategorized" title="Excited news about arrival fashion." date="January 23, 2017" />

                    </div>
                </div>
            </div>
            <div className="ml-n5 col-md-4 pt-5">
                <div className="p-4 border-simple revcardd">
                    <Heading5 classes="form-head-main-center" title="Search Blogs" />
                    <input className="form-control" placeholder="Search" />
                </div>
                <div className="mt-5 p-4 border-simple revcardd">
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