

import React from "react";
import { Link } from "react-router-dom";

const ColumnWithFour = ({
  title,image1,name1,id1,image2,name2,id2,image3,name3,id3,image4,name4,id4,btm_text,
}) => {

  return (
    <div className="bg-white centering--class--top  container my-3 py-3">
      <p className="fw-bold">{title}</p>
      <div className="d-flex gap-2 centering--class text-center image_names">
        <div>
          <Link to={`/product/${id1}`}>
            <div>
              <img className="imgs img-fluid" src={image1} alt={name1} />
              <p>{name1}</p>
            </div>
          </Link>
          <Link to={`/product/${id2}`}>
            <div>
              <img className="imgs img-fluid" src={image2} alt={name2} />
              <p>{name2}</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={`/product/${id3}`}>
            <div>
              <img className="imgs img-fluid" src={image3} alt={name3} />
              <p>{name3}</p>
            </div>
          </Link>
          <Link to={`/product/${id4}`}>
            <div>
              <img className="imgs img-fluid" src={image4} alt={name4} />
              <p>{name4}</p>
            </div>
          </Link>
        </div>
      </div>
      <p className="last_p">{btm_text}</p>
    </div>
  );
};

export default ColumnWithFour;

