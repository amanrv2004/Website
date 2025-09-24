import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Orders from "./components/Orders";
import Grains from "./components/Grains";
import Vegetables from "./components/Vegetables";
import Fruits from "./components/Fruits";
import FoodCategories from "./components/FoodCategories";
import QuantityTypeModal from "./components/QuantityTypeModal";
import HomePageContent from "./components/HomePageContent";
import './App.css';

const App = () => {
  // Initialize currentPage based on URL hash first (for direct links/browser history),
  // then localStorage (for persistence across full refreshes), then default to 'home'.
  const [currentPage, setCurrentPage] = useState(() => {
    const hashPage = window.location.hash.substring(1); // Remove '#'
    if (hashPage) {
      return hashPage;
    }
    const savedPage = localStorage.getItem('currentPage');
    return savedPage ? savedPage : 'home';
  });

  // Effect to update URL hash whenever currentPage state changes
  useEffect(() => {
    // Only update hash if it's different from current state to avoid unnecessary history entries
    if (window.location.hash.substring(1) !== currentPage) {
      window.location.hash = currentPage;
    }
    // Always save current page to localStorage for persistence across refreshes
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  // Effect to listen for browser hash changes (e.g., from back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const newPage = window.location.hash.substring(1);
      // Update currentPage state only if hash has genuinely changed and is not the current page
      if (newPage && newPage !== currentPage) {
        setCurrentPage(newPage);
      } else if (!newPage && currentPage !== 'home') {
        // If hash becomes empty (e.g., navigating back to root before any hash was set)
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [currentPage]); // Dependency on currentPage ensures handleHashChange uses the current state


  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [productToAddToCart, setProductToAddToCart] = useState(null);

  const openQuantitySelectionModal = (product) => {
    setProductToAddToCart(product);
    setShowQuantityModal(true);
  };

  const closeQuantitySelectionModal = () => {
    setShowQuantityModal(false);
    setProductToAddToCart(null);
  };

  const handleAddToCart = (product, priceType) => {
    let finalPriceValue;
    let finalPriceUnit;

    const retailPriceNumeric = parseFloat(product.price.replace("₹", ""));

    if (priceType === 'retail') {
      finalPriceValue = retailPriceNumeric;
      finalPriceUnit = product.priceUnit;
    } else if (priceType === 'wholesale') {
      finalPriceValue = retailPriceNumeric * 100;
      finalPriceUnit = "per quintal";
    } else {
      finalPriceValue = retailPriceNumeric;
      finalPriceUnit = product.priceUnit;
    }

    const newItem = {
      ...product,
      price: `₹${finalPriceValue.toFixed(2)}`,
      priceUnit: finalPriceUnit,
      quantity: 1,
      type: priceType,
    };

    const existingItemIndex = cartItems.findIndex(item =>
      item.name === newItem.name && item.type === newItem.type
    );

    if (existingItemIndex > -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
    alert(`${product.name} (${priceType}) added to cart!`);
    closeQuantitySelectionModal();
  };

  const handleRemoveItem = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleIncrementQuantity = (indexToIncrement) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[indexToIncrement].quantity += 1;
      return updatedItems;
    });
  };

  const handleDecrementQuantity = (indexToDecrement) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (updatedItems[indexToIncrement].quantity > 1) {
        updatedItems[indexToIncrement].quantity -= 1;
      } else {
        return prevItems.filter((_, index) => index !== indexToIncrement);
      }
      return updatedItems;
    });
  };

  const handleAddToWishlist = (product) => {
    const isAlreadyInWishlist = wishlistItems.some(item => item.name === product.name);
    if (!isAlreadyInWishlist) {
      setWishlistItems((prevItems) => [...prevItems, product]);
      alert(`${product.name} added to wishlist!`);
    } else {
      alert(`${product.name} is already in your wishlist!`);
    }
  };

  const handleRemoveFromWishlist = (indexToRemove) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };


  const renderContent = () => {
    switch (currentPage) {
      case "products":
        // When "Products" is clicked, ONLY show FoodCategories
        return (
          <div className="main-div">
            <FoodCategories setCurrentPage={setCurrentPage} />
          </div>
        );
      case "Grains":
        return <Grains onOpenQuantitySelectionModal={openQuantitySelectionModal} onAddToWishlist={handleAddToWishlist} />;
      case "Vegetables":
        return <Vegetables onOpenQuantitySelectionModal={openQuantitySelectionModal} onAddToWishlist={handleAddToWishlist} />;
      case "Fruits":
        return <Fruits onOpenQuantitySelectionModal={openQuantitySelectionModal} onAddToWishlist={handleAddToWishlist} />;
      // New categories placeholders
      case "OilSeeds":
        return <div className="container py-5"><h2 className="text-center">Oil Seeds Products Coming Soon!</h2></div>;
      case "Nuts":
        return <div className="container py-5"><h2 className="text-center">Nuts Products Coming Soon!</h2></div>;
      case "Spices and Herbs":
        return <div className="container py-5"><h2 className="text-center">Spices & Herbs Products Coming Soon!</h2></div>;
      case "cart":
        return (
          <Cart
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
            onIncrementQuantity={handleIncrementQuantity}
            onDecrementQuantity={handleDecrementQuantity}
          />
        );
      case "wishlist":
        return (
          <Wishlist
            wishlistItems={wishlistItems}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            onAddToCart={(product) => handleAddToCart(product, 'retail')}
          />
        );
      case "orders":
        return <Orders />;
      case "profile":
        return <Profile />;
      case "signin":
        return <SignIn setCurrentPage={setCurrentPage} />;
      case "signup":
        return <SignUp setCurrentPage={setCurrentPage} />;
      case "home":
      default:
        return (
          <>
            <Header />
            <HomePageContent
              setCurrentPage={setCurrentPage}
              onOpenQuantitySelectionModal={openQuantitySelectionModal}
              onAddToWishlist={handleAddToWishlist}
            />
          </>
        );
    }
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="content-container">
        {renderContent()}
      </div>
      <Footer />

      <QuantityTypeModal
        show={showQuantityModal}
        onClose={closeQuantitySelectionModal}
        product={productToAddToCart}
        onConfirmAdd={handleAddToCart}
      />
    </>
  );
};

export default App;