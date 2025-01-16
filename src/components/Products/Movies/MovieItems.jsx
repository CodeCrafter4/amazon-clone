import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url(${rightArrow})`,
        backgroundColor:'white',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "50px",
        height: "50px",
        right: "-10px", 
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url(${leftArrow})`,
        backgroundSize: "contain",
        backgroundColor:'white',
        backgroundRepeat: "no-repeat",
        width: "50px",
        height: "50px",
        left: "-10px", 
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

const MovieItems = ({title,category}) => {
  const [apiData,setApiData] = useState([]);
  
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,  
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]  
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWY3ZjZkMzNiOGZhZDNlNjlhODM3ODJhMTM2NTA2NCIsIm5iZiI6MTcyMzY1MjQ2NC4wODc5ODUsInN1YiI6IjY2YmNkNWRkZTA3YzNmOTEwNGQwNTQ3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ODI3tFYvZ4qtl2y_2MT-dc5nRSgEdJwMmtssX0Mx82s'
    }
  };

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  
  },[])

  return (
    <div className="slider-container bg-white my-3 mx-3 py-3 px-3">
      <p className="fw-bold">{title}</p>
      <Slider {...settings}>
        {apiData.map((card,index) =>{
              return <Link to={`/player/${card.id}`} key={index} className="text-decoration-none text-primary-emphasis">
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} 
                className="imgs img-fluid px-2" alt="" />
                <p className="py-2">{card.original_title} </p>
              </Link>
            } )}
      </Slider>
    </div>
  )
}

export default MovieItems

