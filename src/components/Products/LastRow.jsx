import React, { useContext } from "react";
import ColumnWithFour from "./ColumnWithFour";
import { ProductContext } from "../context/ProductsContext";
import ColumnWithSingle from "./ColumnWithSingle";

const LastRow = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="row mx-2">
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Halloween finds under $10"
          image1={products[80].image}
          name1={products[80].name}
          id1={products[80]._id} 
          image2={products[81].image}
          name2={products[81].name}
          id2={products[81]._id} 
          image3={products[82].image}
          name3={products[82].name}
          id3={products[82]._id} 
          image4={products[83].image}
          name4={products[83].name}
          id4={products[83]._id} 
          btm_text="Shop now"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Level up your beauty routine"
          image1={products[84].image}
          name1={products[84].name}
          id1={products[84]._id} 
          image2={products[85].image}
          name2={products[85].name}
          id2={products[85]._id} 
          image3={products[86].image}
          name3={products[86].name}
          id3={products[86]._id} 
          image4={products[87].image}
          name4={products[87].name}
          id4={products[87]._id} 
          btm_text="Shop now"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Fantastic Finds for Home"
          image1={products[88].image}
          name1={products[88].name}
          id1={products[88]._id} 
          image2={products[89].image}
          name2={products[89].name}
          id2={products[89]._id} 
          image3={products[90].image}
          name3={products[90].name}
          id3={products[90]._id} 
          image4={products[91].image}
          name4={products[91].name}
          id4={products[91]._id} 
          btm_text="Shop now"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Score the top PCs & Accessories"
          image1={products[92].image}
          name1={products[92].name}
          id1={products[92]._id} 
          image2={products[93].image}
          name2={products[93].name}
          id2={products[93]._id} 
          image3={products[94].image}
          name3={products[94].name}
          id3={products[94]._id} 
          image4={products[95].image}
          name4={products[95].name}
          id4={products[95]._id} 
          btm_text="Shop now"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Level up your gaming"
          image1={products[96].image}
          name1={products[96].name}
          id1={products[96]._id} 
          image2={products[97].image}
          name2={products[97].name}
          id2={products[97]._id} 
          image3={products[98].image}
          name3={products[98].name}
          id3={products[98]._id} 
          image4={products[99].image}
          name4={products[99].name}
          id4={products[99]._id} 
          btm_text="Shop now"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Shop deals in Fashion"
          image1={products[100].image}
          name1={products[100].name}
          id1={products[100]._id} 
          image2={products[101].image}
          name2={products[101].name}
          id2={products[101]._id} 
          image3={products[102].image}
          name3={products[102].name}
          id3={products[102]._id} 
          image4={products[103].image}
          name4={products[103].name}
          id4={products[103]._id} 
          btm_text="Shop now"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Shop deals in Fashion"
          image1={products[104].image}
          name1={products[104].name}
          id1={products[104]._id} 
          image2={products[105].image}
          name2={products[105].name}
          id2={products[105]._id} 
          image3={products[106].image}
          name3={products[106].name}
          id3={products[106]._id} 
          image4={products[107].image}
          name4={products[107].name}
          id4={products[107]._id} 
          btm_text="Shop now"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithSingle 
          title='Level up your beauty routine' 
          image1={products[108].image} 
          id1={products[108]._id} 
          btm_text='Shop now' 
        />
      </div>
    </div>
  );
};

export default LastRow;
