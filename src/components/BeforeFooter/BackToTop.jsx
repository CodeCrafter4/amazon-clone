import React from 'react';
import './styles.css'

const BackToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className='back--to--top d-flex justify-content-center align-items-center text-white py-2 cursor-pointer'
      onClick={handleScrollToTop}
    >
      <p className='fw-bold text-center mb-0'>Back to top</p>
    </div>
  );
};

export default BackToTop;
