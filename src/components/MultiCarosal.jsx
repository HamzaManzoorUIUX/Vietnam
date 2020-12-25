import React from 'react';
import Carousel from "react-multi-carousel";
import PropertyCard from "./PropertyCard";
import "react-multi-carousel/lib/styles.css";

function MultiCarosal({ Exclusive }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 1"
            transitionDuration={500}
            arrows={false}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //   deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div className='p-2'>
                <PropertyCard img={"https://webzards.com/vietq/public/images/uploads/5fbf9d9f6b2431606393247.jpg"} title={"title1"} location={"abc"} fetures={[]} price={"2020"} type={0} />
            </div>
            <div className="p-2">
                <PropertyCard img={"https://www.react-reveal.com/assets/striped-cat-small.jpg"} title={"title2"} location={"abc"} fetures={[]} price={"2020"} type={0} />
            </div>
            <div className="p-2">
                <PropertyCard img={"https://webzards.com/vietq/public/images/uploads/5fbf9d9f6b2431606393247.jpg"} title={"title3"} location={"abc"} fetures={[]} price={"2020"} type={0} />
            </div>
            <div className="p-2">
                <PropertyCard img={"https://www.react-reveal.com/assets/striped-cat-small.jpg"} title={"title4"} location={"abc"} fetures={[]} price={"2020"} type={0} />
            </div>
            <div className="p-2">
                <PropertyCard img={"https://webzards.com/vietq/public/images/uploads/5fbf9d9f6b2431606393247.jpg"} title={"title5"} location={"abc"} fetures={[]} price={"2020"} type={0} />
            </div>
            <div className="p-2">
                <PropertyCard img={"https://www.react-reveal.com/assets/striped-cat-small.jpg"} title={"title6"} location={"abc"} fetures={[]} price={"2020"} type={0} />
            </div>
            <div className="p-2">
                <PropertyCard img={"https://webzards.com/vietq/public/images/uploads/5fbf9d9f6b2431606393247.jpg"} title={"title7"} location={"abc"} fetures={[]} price={"2020"} type={0} />
            </div>


        </Carousel>
    );
}

export default MultiCarosal;