import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
function PropertyCarosal({title,description,price}) {
  

    return (
        <Carousel>
            <Carousel.Item>
                <div className='CarouselOne'></div>
                <Carousel.Caption>
                    <div className='mybadge'>
                        Rent
                    </div>
                    <h3 className='CarouselHeading'>{title?title:""}</h3>
                    <p className='CarouselParagraph'>{description?description.slice(0,50)+"...":""}</p>
               <h3>
                   ${price}
               </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='Carouseltwo'></div>

            <Carousel.Caption>
            <div className='mybadge'>
                        Rent
                    </div>
                    <h3 className='CarouselHeading'>{title?title:""}</h3>
                    <p className='CarouselParagraph'>{description?description.slice(0,50)+"...":""}</p>
               <h3>
                   ${price}
               </h3>
                </Carousel.Caption>
           
            </Carousel.Item>
            <Carousel.Item>
            <div className='Carouselthree'></div>
            <Carousel.Caption>
            <div className='mybadge'>
                        Rent
                    </div>
                    <h3 className='CarouselHeading'>{title?title:""}</h3>
                    <p className='CarouselParagraph'>{description?description.slice(0,50)+"...":""}</p>
               <h3>
                   ${price}
               </h3>
                </Carousel.Caption>
           
            </Carousel.Item>
        </Carousel>
    )
}

export default PropertyCarosal;