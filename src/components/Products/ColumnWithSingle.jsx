import React from 'react';
import { Link } from 'react-router-dom';

const ColumnWithSingle = ({ title, image1, id1, btm_text }) => {
  return (
    <div className='bg-white container my-3 py-3'>
      <p className='fw-bold'>{title}</p>
      <Link to={`/product/${id1}`}>
        <img className="imgs img-fluid" src={image1} alt={title} />
      </Link>
      <p className='mt-3 last_p'>{btm_text}</p>
    </div>
  );
};

export default ColumnWithSingle;
