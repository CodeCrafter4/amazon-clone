import React, { useContext } from 'react';
import ColumnWithOneTop from './ColumnWithOneTop';
import { ProductContext } from '../context/ProductsContext';
import ColumnWithFour from './ColumnWithFour';
import ColumnWithSingle from './ColumnWithSingle';

const FirstRaw = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="row mx-2">
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithOneTop
          title="Top categories in Kitchen appliances"
          image1={products[0].image}
          p1={products[0].name}
          id1={products[0]._id}  
          image2={products[1].image}
          p2={products[1].name}
          id2={products[1]._id}  
          image3={products[2].image}
          p3={products[2].name}
          id3={products[2]._id}  
          image4={products[3].image}
          p4={products[3].name}
          id4={products[3]._id}  
          btm_text="Explore all products in Kitchen"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Shop for your home essentials"
          image1={products[4].image}
          name1={products[4].name}
          id1={products[4]._id}  
          image2={products[5].image}
          name2={products[5].name}
          id2={products[5]._id}  
          image3={products[6].image}
          name3={products[6].name}
          id3={products[6]._id}  
          image4={products[7].image}
          name4={products[7].name}
          id4={products[7]._id}  
          btm_text="Discover more in home"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Gaming accessories"
          image1={products[8].image}
          name1={products[8].name}
          id1={products[8]._id}  
          image2={products[9].image}
          name2={products[9].name}
          id2={products[9]._id}  
          image3={products[10].image}
          name3={products[10].name}
          id3={products[10]._id}  
          image4={products[11].image}
          name4={products[11].name}
          id4={products[11]._id}  
          btm_text="See more"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="New home arrivals under $50"
          image1={products[12].image}
          name1={products[12].name}
          id1={products[12]._id}  
          image2={products[13].image}
          name2={products[13].name}
          id2={products[13]._id}  
          image3={products[14].image}
          name3={products[14].name}
          id3={products[14]._id}  
          image4={products[15].image}
          name4={products[15].name}
          id4={products[15]._id}  
          btm_text="Shop the latest from Home"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Shop for your home essentials"
          image1={products[16].image}
          name1={products[16].name}
          id1={products[16]._id}  
          image2={products[17].image}
          name2={products[17].name}
          id2={products[17]._id}  
          image3={products[18].image}
          name3={products[18].name}
          id3={products[18]._id}  
          image4={products[19].image}
          name4={products[19].name}
          id4={products[19]._id}  
          btm_text="Discover more in home"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithFour
          title="Gaming accessories"
          image1={products[20].image}
          name1={products[20].name}
          id1={products[20]._id}  
          image2={products[21].image}
          name2={products[21].name}
          id2={products[21]._id}  
          image3={products[22].image}
          name3={products[22].name}
          id3={products[22]._id}  
          image4={products[23].image}
          name4={products[23].name}
          id4={products[23]._id}  
          btm_text="See more"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithSingle
          title="Get your game on"
          image1={products[24].image}
          id1={products[24]._id}  
          btm_text="Shop gaming"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex">
        <ColumnWithSingle
          title="Toys under $25"
          image1={products[25].image}
          id1={products[25]._id}  
          btm_text="Shop now"
        />
      </div>
    </div>
  );
};

export default FirstRaw;
