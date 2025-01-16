// import React, { useContext } from 'react';
// import { ProductContext } from '../../components/context/ProductsContext';
// import './Cart.css'
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//     const { cartItems, products, increaseQuantity, decreaseQuantity, deleteItem } = useContext(ProductContext);
//     const cartData = [];
//     const navigate = useNavigate()


//     for (const itemId in cartItems) {
//         const productId = Number(itemId);
//         const product = products.find((p) => p._id === productId);

//         if (product) {
//             cartData.push({
//                 ...product,
//                 quantity: cartItems[itemId],
//             });
//         }
//     }

//     const calculateSubtotal = (cartItems, products) => {
//         let subtotal = 0;
//         for (const itemId in cartItems) {
//             const quantity = cartItems[itemId];
//             const product = products.find((product) => product._id === Number(itemId));
//             if (product) {
//                 const price = parseFloat(product.price.replace(/[$,]/g, ''));
//                 subtotal += price * quantity;
//             }
//         }
//         return subtotal.toFixed(2);
//     };

//     const subtotal = calculateSubtotal(cartItems, products);

//     return (
//         <div className='row gap-3 mx-3 my-3'>
//             {cartData.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <>
//                     <div className='bg-white col-8'>
//                         <h2 className='my-0 py-0'>Shopping Cart</h2>
//                         <p className='d-flex justify-content-end my-0 py-0'>Price</p>
//                         <hr />
//                         {cartData.map((item) => (
//                             <div key={item._id} className='row mb-3'>
//                                 <div className='col-2'>
//                                     <img src={item.image} alt={item.name} className='img-fluid' />
//                                 </div>
//                                 <div className='col-7 single--desc'>
//                                     <h6 className='text-body-emphasis'>{item.description}</h6>
//                                     {item.contains_gift ? (
//                                         <p>
//                                             Gift options are available{' '}
//                                             <span className='text-primary cursor-pointer'>Learn more</span>
//                                         </p>
//                                     ) : (
//                                         <p>
//                                             Gift options are not available{' '}
//                                             <span className='text-primary cursor-pointer'>Learn more</span>
//                                         </p>
//                                     )}
//                                     <p>Quantity: {item.quantity}</p>
//                                     <div className='d-flex gap-2'>
//                                         <button
//                                             className='btn bg-secondary-subtle'
//                                             onClick={() => decreaseQuantity(item._id)}>
//                                             Decrease
//                                         </button>
//                                         <button
//                                             className='btn bg-secondary-subtle'
//                                             onClick={() => increaseQuantity(item._id)}>
//                                             Increase
//                                         </button>
//                                         <button
//                                             className='btn bg-secondary-subtle'
//                                             onClick={() => deleteItem(item._id)}>
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className='col-3 text-end'>
//                                     <p className='fw-bold'>{item.price}</p>
//                                 </div>
//                             </div>
//                         ))}
//                         <hr />
//                         <div className='subtotal d-flex justify-content-end'>
//                             Subtotal ({Object.keys(cartItems).length} items): <b>${subtotal}</b>
//                         </div>
//                     </div>
//                     <div className='col bg-white proceed py-3'>
//                         <p>
//                             Subtotal ({Object.keys(cartItems).length} items): <b>${subtotal}</b>{' '}
//                         </p>
//                         {cartData.some((item) => item.contains_gift) && (
//                             <p className='text-danger'>✔ Congrats! You have a gift</p>
//                         )}
//                         <button onClick={()=>navigate('/orders')} className='btn btn-warning proceed-btn rounded-lg'>Proceed to checkout</button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cart;



import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../components/context/ProductsContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Cart = () => {
    const { cartItems, products, increaseQuantity, decreaseQuantity, deleteItem } = useContext(ProductContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const cartData = [];
    const navigate = useNavigate();
    const auth = getAuth();

    // Check user authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        // Cleanup on unmount
        return () => unsubscribe();
    }, [auth]);

    // Prepare cart data
    for (const itemId in cartItems) {
        const productId = Number(itemId);
        const product = products.find((p) => p._id === productId);

        if (product) {
            cartData.push({
                ...product,
                quantity: cartItems[itemId],
            });
        }
    }

    const calculateSubtotal = (cartItems, products) => {
        let subtotal = 0;
        for (const itemId in cartItems) {
            const quantity = cartItems[itemId];
            const product = products.find((product) => product._id === Number(itemId));
            if (product) {
                const price = parseFloat(product.price.replace(/[$,]/g, ''));
                subtotal += price * quantity;
            }
        }
        return subtotal.toFixed(2);
    };

    const subtotal = calculateSubtotal(cartItems, products);

    const handleCheckout = () => {
        if (isLoggedIn) {
            navigate('/orders'); // Proceed to checkout if user is logged in
        } else {
            navigate('/login'); // Redirect to login if not logged in
        }
    };

    return (
        <div className='row gap-3 mx-3 my-3'>
            {cartData.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className='bg-white col-8'>
                        <h2 className='my-0 py-0'>Shopping Cart</h2>
                        <p className='d-flex justify-content-end my-0 py-0'>Price</p>
                        <hr />
                        {cartData.map((item) => (
                            <div key={item._id} className='row mb-3'>
                                <div className='col-2'>
                                    <img src={item.image} alt={item.name} className='img-fluid' />
                                </div>
                                <div className='col-7 single--desc'>
                                    <h6 className='text-body-emphasis'>{item.description}</h6>
                                    {item.contains_gift ? (
                                        <p>
                                            Gift options are available{' '}
                                            <span className='text-primary cursor-pointer'>Learn more</span>
                                        </p>
                                    ) : (
                                        <p>
                                            Gift options are not available{' '}
                                            <span className='text-primary cursor-pointer'>Learn more</span>
                                        </p>
                                    )}
                                    <p>Quantity: {item.quantity}</p>
                                    <div className='d-flex gap-2'>
                                        <button
                                            className='btn bg-secondary-subtle'
                                            onClick={() => decreaseQuantity(item._id)}>
                                            Decrease
                                        </button>
                                        <button
                                            className='btn bg-secondary-subtle'
                                            onClick={() => increaseQuantity(item._id)}>
                                            Increase
                                        </button>
                                        <button
                                            className='btn bg-secondary-subtle'
                                            onClick={() => deleteItem(item._id)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className='col-3 text-end'>
                                    <p className='fw-bold'>{item.price}</p>
                                </div>
                            </div>
                        ))}
                        <hr />
                        <div className='subtotal d-flex justify-content-end'>
                            Subtotal ({Object.keys(cartItems).length} items): <b>${subtotal}</b>
                        </div>
                    </div>
                    <div className='col bg-white proceed py-3'>
                        <p>
                            Subtotal ({Object.keys(cartItems).length} items): <b>${subtotal}</b>{' '}
                        </p>
                        {cartData.some((item) => item.contains_gift) && (
                            <p className='text-danger'>✔ Congrats! You have a gift</p>
                        )}
                        <button onClick={handleCheckout} className='btn btn-warning proceed-btn rounded-lg'>
                            Proceed to checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
