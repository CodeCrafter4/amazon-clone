// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "./OrderConfirmation.css"; // Optional: CSS styles for the page

// const OrderConfirmation = () => {
//     const navigate = useNavigate();
//     const [order, setOrder] = useState(null);

//     // Fetch order data (you could pass it via state or fetch it from Firestore)
//     useEffect(() => {
//         // You could retrieve order data from localStorage, context, or props
//         const storedOrder = JSON.parse(localStorage.getItem("recentOrder"));

//         if (storedOrder) {
//             setOrder(storedOrder);
//         } else {
//             toast.error("No recent order found!");
//             navigate("/");  // Redirect back to homepage or cart if no order is found
//         }
//     }, [navigate]);

//     if (!order) return <div>Loading...</div>;

//     return (
//         <div className="order-confirmation container">
//             <h1>Thank You for Your Purchase!</h1>
//             <p>Your order has been placed successfully. A confirmation email has been sent to {order.email}.</p>
//             <div className="order-summary bg-white px-2 py-3">
//                 <h2>Order Summary</h2>
//                 <div className="order-details">
//                     <p><strong>Order ID:</strong> {order.paypalDetails.id}</p>
//                     <p><strong>Name:</strong> {order.firstName} {order.lastName}</p>
//                     <p><strong>Email:</strong> {order.email}</p>
//                     <p><strong>Delivery Address:</strong> {order.street}, {order.city}, {order.state}, {order.zipcode}, {order.country}</p>
//                     <p><strong>Phone:</strong> {order.phone}</p>
//                 </div>
//                 <hr />
//                 <div className="cart-items">
//                     <h3>Items Ordered:</h3>
//                     {Object.keys(order.cartItems).map((itemId) => {
//                         const item = order.cartItems[itemId];
//                         const product = order.products.find(p => p._id === Number(itemId));
//                         return (
//                             <div key={itemId} className="item">
//                                 <p><strong>{product.name}</strong> x {item}</p>
//                                 <p>Price: ${parseFloat(product.price.replace(/[$,]/g, ""))}</p>
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <hr />
//                 <div className="totals">
//                     <p><strong>Subtotal:</strong> ${order.subtotal}</p>
//                     <p><strong>Delivery Fee:</strong> ${order.subtotal === 0 ? 0 : 2}</p>
//                     <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderConfirmation;

import React, { useEffect, useState } from "react";
import "./OrderConfirmation.css";

const OrderConfirmationPage = () => {
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        // Retrieve the order data from localStorage
        const storedOrder = localStorage.getItem("recentOrder");
        if (storedOrder) {
            setOrderData(JSON.parse(storedOrder));
        }
    }, []);

    if (!orderData) {
        return <div>Loading order details...</div>;
    }

    const {
        firstName,
        lastName,
        email,
        street,
        city,
        state,
        zipcode,
        country,
        phone,
        subtotal,
        total,
        cartItems,
        products,
    } = orderData;

    return (
        <div className="order-confirmation">
            <h1>Order Confirmation</h1>
            <p>Thank you for your purchase!</p>

            <div className="order-details">
                <h2>Order Details</h2>
                <p><b>Name:</b> {firstName} {lastName}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>Delivery Address:</b> {street}, {city}, {state}, {zipcode}, {country}</p>
                <p><b>Phone:</b> {phone}</p>

                <h3>Order Summary</h3>
                <p><b>Subtotal:</b> ${subtotal}</p>
                <p><b>Total:</b> ${total}</p>

                <h3>Items Ordered</h3>
                <ul>
                    {Object.keys(cartItems).map((itemId) => {
                        const product = products.find((product) => product._id === Number(itemId));
                        const quantity = cartItems[itemId];
                        return (
                            <li key={itemId}>
                                {product.name} x {quantity} - ${product.price}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
