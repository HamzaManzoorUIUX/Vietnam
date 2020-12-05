import React from 'react';
import Heading5 from '../components/home/heading5'
import TCorner from '../images/app/lfcr.png'
import BCorner from '../images/app/btcr.png';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import {Form} from 'react-bootstrap';
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai';
import logo from '../images/logovtq.png'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
export default () => {
    const classes = useStyles();
    return <div>
        <img src={TCorner} className="topCorner-img" />
        <img src={BCorner} className="btCorner-img" />
        <div className="center-element">
        <img src={logo} className="mb-4" />

            <Card className="px-md-5 px-3 pb-2 pt-5 mt-5 txt-algn-lft">

                <Heading5 classes="headlogin" title="Create New Account" />
              
              <div className="row mt-5">
                <div className="col-md-6">
                <Heading5 classes="headloginsub" title="First Name" />
                <input className="form-control" />
            
                </div>
                <div className="col-md-6">
                <Heading5 classes="headloginsub" title="Last Name" />
                <input className="form-control" />
            
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                <Heading5 classes="headloginsub" title="Email For Receiving Updates" />
                <input className="form-control" />
            
                </div>
                <div className="col-md-6">
                <Heading5 classes="headloginsub" title="Confirm Email Address" />
                <input className="form-control" />
            
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                <Heading5 classes="headloginsub" title="Password" />
                <input className="form-control" />
            
                </div>
                <div className="col-md-6">
                <Heading5 classes="headloginsub" title="Confirm Password" />
                <input className="form-control" />
            
                </div>
              </div>
               
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" className="mt-2 color-prmry2" label="I agree to the term & conditions of VietQ" />
                </Form.Group>
                <button className="btn btn-info themeBackgroundColor listingbtn w-100">Sign in</button>
                <p className="color-prmry2 pt-1 txt-algn-center">Or</p>
                <div className="dsp-flex dsp-justify-space-center">
                    <FaFacebook color="#3c5a9a" size="30" className="mr-1"/>
                    <AiFillInstagram color="#d82c7e" size="30" className="mr-1"/>
                    <AiFillTwitterCircle color="#1ea1f1" size="30"/>
                </div>
                <p className="pt-1 txt-algn-center"><span className="color-prmry2 ">Dont have an account?</span><span className="color-prmry4 h5">Create a New One</span></p>

            </Card>
        </div>

    </div>
}