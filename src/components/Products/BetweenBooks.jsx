import React, { useContext } from "react";
import ColumnWithFour from "./ColumnWithFour";
import { ProductContext } from "../context/ProductsContext";

const BetweenBooks = () => {
  const { products } = useContext(ProductContext);
  
  return (
    <div className="row mx-2">
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Most-loved travel essentials"
          image1={products[44].image}
          name1={products[44].name}
          id1={products[44]._id} 
          image2={products[45].image}
          name2={products[45].name}
          id2={products[45]._id} 
          image3={products[46].image}
          name3={products[46].name}
          id3={products[46]._id} 
          image4={products[47].image}
          name4={products[47].name}
          id4={products[47]._id} 
          btm_text="Shop now"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Wireless Tech"
          image1={products[48].image}
          name1={products[48].name}
          id1={products[48]._id} 
          image2={products[49].image}
          name2={products[49].name}
          id2={products[49]._id} 
          image3={products[50].image}
          name3={products[50].name}
          id3={products[50]._id} 
          image4={products[51].image}
          name4={products[51].name}
          id4={products[51]._id} 
          btm_text="Shop now"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Gaming merchandise"
          image1={products[52].image}
          name1={products[52].name}
          id1={products[52]._id} 
          image2={products[53].image}
          name2={products[53].name}
          id2={products[53]._id} 
          image3={products[54].image}
          name3={products[54].name}
          id3={products[54]._id} 
          image4={products[55].image}
          name4={products[55].name}
          id4={products[55]._id} 
          btm_text="Shop now"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Shop deals in Fashion"
          image1={products[56].image}
          name1={products[56].name}
          id1={products[56]._id} 
          image2={products[57].image}
          name2={products[57].name}
          id2={products[57]._id} 
          image3={products[58].image}
          name3={products[58].name}
          id3={products[58]._id} 
          image4={products[59].image}
          name4={products[59].name}
          id4={products[59]._id} 
          btm_text="Shop now"
        />
      </div>
    </div>
  );
};

export default BetweenBooks;
