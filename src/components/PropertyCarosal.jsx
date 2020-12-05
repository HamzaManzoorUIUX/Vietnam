import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
function PropertyCarosal(props) {
  

    return (
        <Carousel>
            <Carousel.Item>
                <div className='CarouselOne'></div>
                <Carousel.Caption>
                    <div className='mybadge'>
                        Rent
                    </div>
                    <h3 className='CarouselHeading'>First slide label</h3>
                    <p className='CarouselParagraph'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               <h3>
                   $320,000
               </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='Carouseltwo'></div>

            <Carousel.Caption>
                    <div className='mybadge'>
                        Rent
                    </div>
                    <h3 className='CarouselHeading'>First slide label</h3>
                    <p className='CarouselParagraph'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               <h3>
                   $320,000
               </h3>
                </Carousel.Caption>
           
            </Carousel.Item>
            <Carousel.Item>
            <div className='Carouselthree'></div>
            <Carousel.Caption>
                    <div className='mybadge'>
                        Rent
                    </div>
                    <h3 className='CarouselHeading'>First slide label</h3>
                    <p className='CarouselParagraph'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               <h3>
                   $320,000
               </h3>
                </Carousel.Caption>
           
            </Carousel.Item>
        </Carousel>
    )
}

export default PropertyCarosal;