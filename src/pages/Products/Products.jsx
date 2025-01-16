import React, { useContext} from 'react';
import { ProductContext } from '../../components/context/ProductsContext';
import { Link, useParams } from 'react-router-dom';
import './Products.css'
import star from '../../assets/star_icon.png'
import star_dull from '../../assets/star_dull_icon.png'

const Products = () => {
  const { _id } = useParams();
  const { products,addToCart } = useContext(ProductContext);

  const product = products.find((item) => item._id === parseInt(_id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="pt-3 bg-white">
      <div className='d-flex justify-content-around align-item-center top--top'>
        <div className=' small--images '>
          <div>
            <img className='mx-1' src={product.image} alt="" />
            <img className='mx-1' src={product.image} alt="" />
            <img className='mx-1' src={product.image} alt="" />
          </div>
        </div>
        <div>
          <p className='text-body-emphasis'>You {product.name} excepturi placeat eos...</p>
        </div>
        <div>
          <p className='fw-bold fs-2 text-danger'>{product.price} <sup>00</sup> </p>
        </div>
      </div>
      <hr />
      <div className='px-3 single--link'>
        <Link to='/'><p>Back to products</p></Link>
        <div className='row container'>
          <div className='col-5 d-flex justify-content-center '>
            <img className='sigle--image' src={product.image} alt="" />
          </div>
          <div className='col-7'>
            <h5>{product.name}</h5>
            <h6>{product.description}</h6>
            <div className='d-flex star--icons'>
              <small>4.0</small>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star_dull} alt="star_dull" />
              <small>14,320 ratings</small>
            </div>
            {product.contains_gift && <div className='best--seler'>Best Seller</div>}
            <button onClick={()=>addToCart(product._id)} className='add-btn'>ADD TO CART</button>
            <div className='about--item'>
              <h6>About this item</h6>
              <ul>
                <li>Most Comfortable And Relaxing: Equipped with headrest and lumbar pillow. When your neck feels sore from gaming or working with head down for a long time, the headrest will relieve your fatigue. When tired from maintaining a same sitting posture, please rest assured to lean back and charge your waist pillow, it will relax your tired waist energetically.</li>
                <li>More Stable Than Others: Common gaming chairs are equipped with plastic legs generally to save costs, but we still insist on applying the same material as the built-in metal frame. No fear of high or low temperature, no fear of the sunshine, no fear of wind, it will not rust and break. Whether child rolls on the chair or a pet jumps up excitedly, the sturdy metal legs will keep the chair stable firmly.</li>
                <li>Liberate Your Feet: Will you feel tired for sitting all the time? Sure. Then you can choose the chair with footrest to relax your feet. When you don’t want to straighten your back and sit, just take out the footrest, put your feet up, turn on your favorite music, and start enjoying the comfort! And don’t worry about clean, it is also made of high-quality PU leather, just wipe it with a soft cloth and it will shine as new.</li>
                <li>Worry-Free Purchase: A detailed instruction will be sent to you along with all accessories so that you can assemble the chair easily. Free replacement or refund within 30 days. Free replacement or repair within 1 year. If you have any questions or suggestions, please feel free to contact us, we will do our best to make our customers satisfied.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

