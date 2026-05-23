import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reviews from "./pages/Reviews";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart"; 

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  
  const onAddToCart = (product) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Automatically slide the cart in
  };

  // Function for Plus/Minus Buttons inside the Cart
  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: Math.max(1, newQty) }; 
        }
        return item;
      })
    );
  };

  // Function to trash an item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      {/* 1. Navbar gets the count and the toggle trigger */}
      <Navbar 
        cartCount={cartItems.length} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      {/* 2. The Sidebar Cart - Stays here so it can slide over any page */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/catalog" element={<Catalog onAddToCart={onAddToCart} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;