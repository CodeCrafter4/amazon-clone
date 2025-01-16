import { createContext, useState, useEffect } from "react";
import { products } from "../../assets/assets";
import { toast } from "react-toastify";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  // Load cart from localStorage or start with an empty cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  // Save cart items to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };

      if (updatedCart[itemId]) {
        updatedCart[itemId] += 1;
      } else {
        updatedCart[itemId] = 1;
      }

      toast.success('Product Added');
      return updatedCart;
    });
  };

  // Increase item quantity
  const increaseQuantity = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };

      if (updatedCart[itemId]) {
        updatedCart[itemId] += 1;
      }

      return updatedCart;
    });
  };

  // Decrease item quantity
  const decreaseQuantity = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };

      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }

      return updatedCart;
    });
  };

  // Delete item from cart
  const deleteItem = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };
      delete updatedCart[itemId];
      return updatedCart;
    });
  };

  const value = {
    products,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    cartItems,
    setCartItems,
  };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
