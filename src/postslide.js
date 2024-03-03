import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom';


export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      centerMode:true,
      variableWidth:true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Link to={'/Modify'}>
              <img src={process.env.PUBLIC_URL + "/scale.jpg"} alt="" height={'500'}/>
            </Link>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/kimitachiwadouikiruka.jpg"} alt="" height={'500'}/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/topgun.jpg"} alt="" height={'500'}/>
          </div>
        </Slider>
      </div>
    );
  }
}