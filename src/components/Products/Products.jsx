import React from "react";
import FirstRaw from "./FirstRaw";
import './Products.css'
import MultipleItems from "./TopSellerBooks";
import BetweenBooks from "./BetweenBooks";
import BestSellerBooks from "./BestSellerBooks";
import LastRow from "./LastRow";
import MovieItems from "./Movies/MovieItems";



const Products = () => {
  
  return (
    <div className="products">
     <FirstRaw/>
     <MultipleItems/>
     <BetweenBooks/>
     <MovieItems title={"Most wished for in Movies & TV"} category={"now_playing"}/>
     <BestSellerBooks/>
     <LastRow/>
     
    
    </div>
  );
};

export default Products;
