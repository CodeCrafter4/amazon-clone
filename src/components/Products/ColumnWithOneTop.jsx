import React from "react";
import { Link } from "react-router-dom";

const ColumnWithOneTop = ({ 
  title, 
  image1, 
  p1, 
  id1, 
  image2, 
  p2, 
  id2, 
  image3, 
  p3, 
  id3, 
  image4, 
  p4, 
  id4, 
  btm_text 
}) => {
  return (
    <div className='bg-white container py-3 my-3'>
      <p className='fw-bold'>{title}</p>

      <div>
        <Link to={`/product/${id1}`}>
          <img className="imgs img-fluid" src={image1} alt={p1} />
          <p>{p1}</p>
        </Link>
      </div>

      <div className='image_names d-flex gap-2 container text-center mx-auto'>
        <div>
          <Link to={`/product/${id2}`}>
            <img className="imgs img-fluid" src={image2} alt={p2} />
            <p>{p2}</p>
          </Link>
        </div>
        <div>
          <Link to={`/product/${id3}`}>
            <img className="imgs img-fluid" src={image3} alt={p3} />
            <p>{p3}</p>
          </Link>
        </div>
        <div>
          <Link to={`/product/${id4}`}>
            <img className="imgs img-fluid" src={image4} alt={p4} />
            <p>{p4}</p>
          </Link>
        </div>
      </div>

      <p className='last_p'>{btm_text}</p>
    </div>
  );
};

export default ColumnWithOneTop;
