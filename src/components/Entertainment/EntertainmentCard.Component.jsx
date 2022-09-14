import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-full h-32  px-2">
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="Entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://www.themoviedb.org/t/p/w1280/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
    "https://www.themoviedb.org/t/p/w1280/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
    "https://www.themoviedb.org/t/p/w1280/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
    "https://www.themoviedb.org/t/p/w1280/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
    "https://www.themoviedb.org/t/p/w1280/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
    "https://www.themoviedb.org/t/p/w1280/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
    "https://www.themoviedb.org/t/p/w1280/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
    "https://www.themoviedb.org/t/p/w1280/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
    "https://www.themoviedb.org/t/p/w1280/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
  ];

  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll:4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image, index) => (
          <EntertainmentCard src={image}  key= {index}/>
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
