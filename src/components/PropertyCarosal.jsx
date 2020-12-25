import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-reveal/Fade';
function PropertyCarosal({title,description,price,Exclusive}) {
  console.log(Exclusive[0].images);
    // style={{backgroundImage:"url(abc.jpg)"}}
    return (
        <Carousel>
            {Exclusive[0].images.map(i=>{
                return <Carousel.Item>
                    <Fade right>
                <div className='CarouselOne' style={{backgroundImage:`url(${i.image})`}}></div>
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
                </Fade>
            </Carousel.Item>
            })}
        </Carousel>
    )
}

export default PropertyCarosal;