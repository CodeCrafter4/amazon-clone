import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PayPalButton from "../../components/PayPalButton/PayPalButton";
import { ProductContext } from "../../components/context/ProductsContext";
import { db } from "../../firebase";
import "./Orders.css";

const Orders = () => {
    const { products, cartItems, setCartItems } = useContext(ProductContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });
    const [isFormValid, setIsFormValid] = useState(false); // New state for form validation
    const navigate = useNavigate();

    // Function to calculate subtotal
    const calculateSubtotal = (cartItems, products) => {
        let subtotal = 0;
        for (const itemId in cartItems) {
            const quantity = cartItems[itemId];
            const product = products.find((product) => product._id === Number(itemId));
            if (product) {
                const price = parseFloat(product.price.replace(/[$,]/g, ""));
                subtotal += price * quantity;
            }
        }
        return subtotal.toFixed(2);
    };

    const subtotal = calculateSubtotal(cartItems, products);

    // Update form data
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Function to validate the form
    const validateForm = () => {
        if (!data.firstName || !data.lastName || !data.email || !data.street || !data.city || !data.state || !data.zipcode || !data.country || !data.phone) {
            toast.error("Please fill all required fields.");
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    };

    // Handle order submission and store to Firestore
    const handleOrderSubmission = async (details) => {
        if (!isFormValid) {
            toast.error("Please fill all required fields.");
            return;
        }

        const orderData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            street: data.street,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode,
            country: data.country,
            phone: data.phone,
            subtotal: subtotal,
            total: subtotal === 0 ? 0 : parseFloat(subtotal) + 2,
            cartItems: cartItems,
            paypalDetails: details,
            products: products  // Pass product data for easy display
        };

        try {
            // Store order in Firestore
            await addDoc(collection(db, "orders"), orderData);

            // Store order in localStorage
            localStorage.setItem("recentOrder", JSON.stringify(orderData));

            // Clear cart and form, then redirect
            setCartItems({});
            setData({
                firstName: "",
                lastName: "",
                email: "",
                street: "",
                city: "",
                state: "",
                zipcode: "",
                country: "",
                phone: ""
            });
            navigate("/order-confirmation");
        } catch (error) {
            console.error("Error processing order:", error);
            toast.error("There was an error processing your order. Please try again.");
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="place-order container my-3">
                <div className="place-order-left bg-white px-2 py-3">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <input
                            required
                            name="firstName"
                            onChange={onChangeHandler}
                            value={data.firstName}
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            required
                            name="lastName"
                            onChange={onChangeHandler}
                            value={data.lastName}
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <input
                        required
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder="Email address"
                    />
                    <input
                        required
                        name="street"
                        onChange={onChangeHandler}
                        value={data.street}
                        type="text"
                        placeholder="Street"
                    />
                    <div className="multi-fields">
                        <input
                            required
                            name="city"
                            onChange={onChangeHandler}
                            value={data.city}
                            type="text"
                            placeholder="City"
                        />
                        <input
                            required
                            name="state"
                            onChange={onChangeHandler}
                            value={data.state}
                            type="text"
                            placeholder="State"
                        />
                    </div>
                    <div className="multi-fields">
                        <input
                            required
                            name="zipcode"
                            onChange={onChangeHandler}
                            value={data.zipcode}
                            type="text"
                            placeholder="Zip code"
                        />
                        <input
                            required
                            name="country"
                            onChange={onChangeHandler}
                            value={data.country}
                            type="text"
                            placeholder="Country"
                        />
                    </div>
                    <input
                        required
                        name="phone"
                        onChange={onChangeHandler}
                        value={data.phone}
                        type="text"
                        placeholder="Phone"
                    />
                </div>
                <div className="place-order-right">
                    <div className="cart-total bg-white px-2 py-3">
                        <h2>Cart Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>${subtotal}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>${subtotal === 0 ? 0 : 2}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>${subtotal === 0 ? 0 : (parseFloat(subtotal) + 2).toFixed(2)}</b>
                            </div>
                        </div>
                        {/* Validate the form before showing PayPal */}
                        {!isFormValid ? (
                            <button className="validate-button btn bg-warning" onClick={validateForm}>
                                Validate and Proceed to Payment
                            </button>
                        ) : (
                            <PayPalButton
                                amount={subtotal === 0 ? 0 : (parseFloat(subtotal) + 2).toFixed(2)}
                                onSuccess={handleOrderSubmission}
                            />
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Orders;

