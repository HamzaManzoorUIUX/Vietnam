import React from 'react';
import Heading5 from '../components/home/heading5';
import { Form, Button } from 'react-bootstrap'
import Footer from '../components/home/footer'
import Nav from '../components/navbar';
import newsimg1 from '../images/news/4.jpg';
import newsimg2 from '../images/news/5.jpg';
import newsimg3 from '../images/news/6.jpg';
import News from '../components/home/newscard';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import 'mapbox-gl/dist/mapbox-gl.css';
import { BiCurrentLocation } from 'react-icons/bi';
import PropertyImg1 from '../images/property/property1.jpg'
import PropertyCard from '../components/home/propertyCard'
const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiYWlhaHNhbiIsImEiOiJja2h3MHh6OW4xamVrMzVsaHA5YndpazAwIn0.HVr7tA9bRUKmyQ8suFr6DA'
});
const position = [51.505, -0.09]


const feat = [{ name: "Bed", val: "4" }, { name: "Bath", val: "1" }, { name: "Sqft", val: "200" }];
export default () => {
    return <><div className="bgimgcovermap">
        <Nav hasback={true} />
        <Map
            style="mapbox://styles/mapbox/streets-v8"
            containerStyle={{
                height: '400px',
                width: '100%'
            }}

        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </Map>
    </div>

        <div className="mt-5 pt-3 pd6p">
            <div className="flex-main flx-none flex-mainback pl-4  pd-custm-25 brd ">
                <div className="flex-main flex-width-55 pt-2 pb-2 wd-md100 brdb-737" ><p className="margin-auto font-weight-600">What</p><input placeholder="For Example Food, Service, Barber, hotel" className="form-control no-border searchBarText" /></div>
                <div className="flex-main flex-width-22 brdleft brd-cstm-737 pl-5rem hbtn-54 wd-md100 brdb-737 " ><p className="margin-auto font-weight-600">Where</p><input placeholder="Your City" className="form-control no-border searchBarText" /><button className="btn"><BiCurrentLocation /></button></div>
                <div className="flex-main flex-width-20 wd-md100 " ><button className="btn btn-info themeBackgroundColor listingbtn w-100 brdleftbtnnone hbtn-54 br-serch-10">Search</button></div>
            </div>
        </div>
        <div className="footer-root mt-5 pb-4 pd6p">
            <p className="ft-size-125"> Search Result for<span className="font-weight-600"> Real Estate</span></p>

            <DropdownButton id="category-discovery" title="Real Estate">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </div>
        <div className="footer-root pd6p">
            <div className="dsp-flex">
                <p className=""> <span className="font-weight-600"> Advance Filters</span></p>
                <DropdownButton id="category-discoverydst" title="Category">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="category-discoverydst" title="City/State">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="category-discoverydst" title="Per Month">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="category-discoverydst" title="Rooms">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>

        </div>

        <div className="row pd6p">
            <div className="col-md-4 mt-5">

                <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />

            </div>
            <div className="col-md-4 mt-5">

                <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />

            </div>
            <div className="col-md-4 mt-5">

                <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />

            </div>
            <div className="col-md-4 mt-5">

                <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />

            </div>
            <div className="col-md-4 mt-5">

                <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />

            </div>
            <div className="col-md-4 mt-5">

                <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />

            </div>
            <div className="col-md-4 mt-5">

                <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />

            </div>
            
        
        </div>
        <div className="pd6p mt-5 pt-5">
            <Footer />
        </div>

    </>
}