import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../images/logovtq.png'
import car from '../images/1.png';
import flower from '../images/2.png';
import hotel from '../images/3.png';
import rest from '../images/4.png';
import shop from '../images/5.png';
import TcCard from '../components/home/topCategoryCard';
import { BiCurrentLocation } from 'react-icons/bi';
import Heading1 from '../components/home/heading1';
import Heading5 from '../components/home/heading5';
import CityBox from '../components/home/cityBox';
import City1 from '../images/cities/city1.jpg'
import City2 from '../images/cities/city2.jpg'
import City3 from '../images/cities/city3.jpg'
import City4 from '../images/cities/city4.jpg'
import PropertyImg1 from '../images/property/property1.jpg'
import PropertyCard from '../components/home/propertyCard'
import ActivityCard from '../components/home/activityCard';
import img1 from '../images/activityImages/1.jpg';
import img2 from '../images/activityImages/2.jpg';
import img3 from '../images/activityImages/3.jpg';
import News from '../components/home/newscard'
import newsimg1 from '../images/news/4.jpg';
import newsimg2 from '../images/news/5.jpg';
import newsimg3 from '../images/news/6.jpg';
import Footer from '../components/home/footer'
const feat = [{ name: "Bed", val: "4" }, { name: "Bath", val: "1" }, { name: "Sqft", val: "200" }];
export default () => {
  return <><div className="bgimgcover">
    {//Top Section
    }
    <div className="pd6p">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          <Nav>
            <NavDropdown title="Explore" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features"> Blogs</Nav.Link>
            <Nav.Link href="#pricing">Marketplace</Nav.Link>
            <Nav.Link href="#pricing">Sign in</Nav.Link>
            <Nav.Link href="#pricing" className="btn btn-info themeBackgroundColor listingbtn">Add Listing</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="pb-8p">
        <h1 className="headtext">Explore Vietnam</h1>
        <h5 className="headtextchild mt-3 ">Let's uncover the best places to eat, drink, and shop nearest to you.</h5>
        <div className="mt-3 pt-3">
          <div className="flex-main flx-none flex-mainback pl-4  pd-custm-25">
            <div className="flex-main flex-width-55 pt-2 pb-2 wd-md100 brdb-737" ><p className="margin-auto font-weight-600">What</p><input placeholder="For Example Food, Service, Barber, hotel" className="form-control no-border searchBarText" /></div>
            <div className="flex-main flex-width-22 brdleft brd-cstm-737 pl-5rem hbtn-54 wd-md100 brdb-737 " ><p className="margin-auto font-weight-600">Where</p><input placeholder="Your City" className="form-control no-border searchBarText" /><button className="btn"><BiCurrentLocation /></button></div>
            <div className="flex-main flex-width-20 wd-md100 " ><button className="btn btn-info themeBackgroundColor listingbtn w-100 brdleftbtnnone hbtn-54 br-serch-10">Search</button></div>
          </div>
        </div>
        <h5 className="headtextchild mt-5 pt-3 ftsize-17rem">Still looking? here are some suggestions for you</h5>
        <div className="categoryContainer">
          <TcCard img={car} title="Automative" />
          <TcCard img={flower} title="Beauty & Spa" />
          <TcCard img={hotel} title="Hotels" />
          <TcCard img={rest} title="Restaurants" />
          <TcCard img={shop} title="Shopping" />
        </div>
      </div>
    </div>
  </div>
    {
      //happing Cities
    }

    <div >
      <Heading1 title="Happening Cities" />
      <Heading5 title="Cities You Must Explore This Summer" />
      <div className="pd6p pb-5">
        <div className="row">
          <div className="col-md-4 mt-3 mt-md-5"><CityBox img={City1} title="Ho Chi Minh" /></div>
          <div className="col-md-8 mt-3 mt-md-5"><CityBox img={City2} title="Hanoi" /></div>
        </div>
        <div className="row mt-md-5">
          <div className="col-md-8 mt-3 mt-md-5"><CityBox img={City3} title="Ho Chi Minh" /></div>
          <div className="col-md-4 mt-3 mt-md-5"><CityBox img={City4} title="Hanoi" /></div>
        </div>
      </div>
    </div>

    {
      //Exclusive section
    }
    <div className="exclusive-box mt-5 pt-4 pb-5">
      <Heading1 title="Exclusive" />
      <Heading5 title="Popular Exclusive Listings In Our Directory" />
      <div className="pd6p">
        <div className="row justify-content-center" >
          <div className="col-12 col-md-6 col-lg-4 my-3 my-md-5">
            <PropertyCard img={PropertyImg1} title="Diamond Appartments" location="London, UK" fetures={feat} price="1200" type={0} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-3 my-md-5">
            <PropertyCard img={PropertyImg1} title="Eaton Residences" location="2nd Ave, Miami" fetures={feat} price="55,000" type={1} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-3 my-md-5">
            <PropertyCard img={PropertyImg1} title="Villa with Pool" location="Broadway, Astoria" fetures={feat} price="20,000" type={1} />
          </div>
        </div>
      </div>
    </div>

    {//activities section
    }

    <div className="mt-5 pt-4 pb-5">
      <Heading5 title="What people are Viewing and Reviewing" />
      <div className="pd6p">
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-6 col-lg-4 px-md-1">
        <ActivityCard img={img1} desig="Admin" subdesig="Write A Review" title="Osteria De Busta" detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" read="Continue Reading" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 px-md-1">
        <ActivityCard img={img2} desig="Admin" subdesig="Write A Review" title="Giano Restaurant" detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" read="Continue Reading" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 px-md-1">
        <ActivityCard img={img3} desig="Admin" subdesig="Write A Review" title="Da Vinci" detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" read="Continue Reading" />
        </div>
      </div>
      </div>
    </div>

    {
      //Blog and News section
    }
    <div className="mt-5 pb-5 ">
      <Heading1 title="News & Tips" />
      <Heading5 title="Checkout Latest News And Articles From Our Blog" />
    <div className='pd6p'>
    <div className="row mt-5">
        <div className="col-12 col-md-6 col-lg-4 px-md-1">
        <News img={newsimg1} desig="Tony Lee" subdesig="Coffee, Uncategorized" title="Chemex coffee for two people" date="January 23, 2017" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 px-md-1">
        <News img={newsimg2} desig="Admin" subdesig="Coffee, Health & Care, Uncategorized" title="Reduce Unwanted Wrinkles" date="February 23, 2018" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 px-md-1">
        <News img={newsimg3} desig="Admin" subdesig="News, Uncategorized" title="Excited news about arrival fashion." date="January 23, 2017" />
        </div>
      </div>
    </div>
      </div>
    {
      //Footer section
    }
    <div className="pd6p mt-5 pt-5">
    <Footer/>
    </div>
    
  </>
}