import React from 'react';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function FreeCourses({item}) {
    const filterData = list.courses.filter((course) => course.category.toLowerCase() === "free");
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <div>
            <h1 className='text-3xl font-bold my-4'>Free Offered Courses</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nulla voluptatem aperiam quaerat minima reiciendis dolor quos, tenetur at itaque quam eum amet odit corrupti necessitatibus sunt quas est. Obcaecati!</p>
            </div>
       
        <div>
        <Slider {...settings}>
      {filterData.map((item)=>(
        <Cards item={item} key={item.id}/>
      ))}
      </Slider>
        </div>
        </div>
        </>
    );
}

export default FreeCourses;
