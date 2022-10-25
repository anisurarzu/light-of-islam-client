import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import IMG from '../../images/new.png'
import img2 from '../../images/snack1.png'

const SliderShow = () => {
    
        var settings = {
          dots: true,
          infinite: true,
          speed:  10000,
          slidesToShow: 7,
          slidesToScroll: 7,
          initialSlide: 0,
          autoplay:true,
          autoplaySpeed:4000,
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
          <div className=' container '>
           
            <Slider {...settings}>
                
              
              <div className='bg-white   shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>

              <div className='bg-white  ml-1 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>

              <div className='bg-white  ml-2 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>
              
              <div className='bg-white  ml-3 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>

              <div className='bg-white  ml-4 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>
              <div className='bg-white  ml-5 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>
              <div className='bg-white  ml-6  shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>
            


              <div className='bg-white   shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>

              <div className='bg-white  ml-1 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>

              <div className='bg-white  ml-2 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>
              
              <div className='bg-white  ml-3 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>

              <div className='bg-white  ml-4 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>
              <div className='bg-white  ml-5 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>
              <div className='bg-white  ml-6 shadow-sm w-52'>
              <img  className='w-24 ml-auto mr-auto' src={img2} alt="" />
              </div>
            
              
              
              
              
            </Slider>
          </div>
        );
      
};

export default SliderShow;