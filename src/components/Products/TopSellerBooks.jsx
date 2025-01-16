import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductContext } from "../context/ProductsContext";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import { Link } from "react-router-dom";

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

function MultipleItems() {
  const { products } = useContext(ProductContext);
  const topSellerProducts = products.slice(26, 44);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,  
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]  
  };

  return (
    <div className="slider-container bg-white mx-3 py-3 px-3">
      <p className="fw-bold">Top Sellers in Books for you</p>
      <Slider {...settings}>
        {topSellerProducts.map((product) => (
          <div key={product._id} className="mx-2">
            <Link to={`/product/${product._id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image imgs img-fluid"
            />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;


