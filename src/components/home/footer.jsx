import React from 'react';
import logo from '../../images/logovtq.png'
import {ImHome} from 'react-icons/im'
import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import {BiPaperPlane} from 'react-icons/bi';
const footer=() => {
    return (
    <Fade bottom>
    <div className="pd6p mt-5 pt-5">
    <div className="footer-root flex-row">
        <div className="footer-inner flex-col max-width-446 txt-left">
            <img src={logo} className="logo-footer" alt='img' />
            <p className="activty-lbl-cst-name-light mt-3">We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
            <p className="activty-lbl-cst-name-light"><ImHome/> Fair Housing & Equal Oppertunity</p>
        </div>
        <div className="footer-inner flex-col txt-left">
            <h2 className="color-blk heading-child2 ">Menu</h2>
            <a className="activty-lbl-cst-name-light" href='javascript:void(0)'>Explore</a>
            <a className="activty-lbl-cst-name-light" href='javascript:void(0)'> Blogs</a>
            <a className="activty-lbl-cst-name-light" href='javascript:void(0)'>Marketplace</a>
            <a className="activty-lbl-cst-name-light" href='javascript:void(0)'>Sign in</a>
            <a className="activty-lbl-cst-name-light" href='javascript:void(0)'>Add Listing</a>
        </div>
        <div className="footer-inner flex-col txt-left">
            <h2 className="color-blk heading-child2">Contact Us</h2>
            <a className="activty-lbl-cst-name-light" href='javascript:void(0)'>info@vietq.com</a>
            <a className="activty-lbl-cst-name-light" href='javascript:void(0)'>2nd Ave Street West, California
CA, USA</a>
            <a className="activty-lbl-cst-name-light" href='javascript:void(0)'>info@vietq.com</a>

        </div>
        <div  className="footer-inner flex-col txt-left">
            <h2 className="color-blk heading-child2">Follow us</h2>
            <div>
                <FaFacebookSquare size={30} color="#c2c2c2" className="mr-3"/>
                <FaTwitterSquare size={30} className="mr-3" color="#c2c2c2"/>
                <FaInstagramSquare size={30} color="#c2c2c2"/>
            </div>
            <h2 className="color-blk heading-child2 mt-3">Subscribe</h2>
            <div className='d-flex flex-column flex-md-row'>
            <input className="form-control max-360" placeholder="Your Email" />
            <button className="btn btn-info my-3 my-md-0 ml-md-3"><BiPaperPlane/></button>
            </div>
        </div>
    </div>
    </div>
    <div className='pd6p d-flex flex-column flex-md-row justify-content-between align-items-center bg-myDanger py-3 text-white mt-3'>
    <div>
        &copy; 2020 VietQ. All Rights Reserved
    </div>
    <div className='d-flex mt-3 mt-md-0'>
        <div className='mr-2'>
        Privacy Policy
        </div>
        |
        <div className='ml-2'>
            Terms of Services
        </div>
    </div>
        </div>
        </Fade>
    )
}
export default footer;