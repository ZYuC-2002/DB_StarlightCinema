import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const SimpleSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.10.101:5000/get_post_info");
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData[0]['movie_post']);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Link to={'/Modify'}>
            <img src={data.length > 0 ? data[0]['movie_post'] : ''} alt="" height={'500'} />
          </Link>
        </div>
        <div>
          <img src={data.length > 0 ? data[1]['movie_post'] : ''} alt="" height={'500'} />
        </div>
        <div>
          <img src={data.length > 0 ? data[2]['movie_post'] : ''} alt="" height={'500'} />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
