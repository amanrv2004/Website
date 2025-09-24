import React from 'react';
import FeaturedProducts from "./FeaturedProducts";
import FoodCategories from "./FoodCategories";
import Fruits from "./Fruits";
import Grains from "./Grains";
import Vegetables from "./Vegetables";
import WhyChooseUs from "./WhyChooseUs";
import FarmerCTA from "./FarmerCTA";

const HomePageContent = ({ setCurrentPage, onOpenQuantitySelectionModal, onAddToWishlist }) => {
  return (
    <>
      {/* Featured Products section */}
      <FeaturedProducts
          onOpenQuantitySelectionModal={onOpenQuantitySelectionModal}
          onAddToWishlist={onAddToWishlist}
      />

      <div className="main-div">
        {/* Food Categories section */}
        <FoodCategories setCurrentPage={setCurrentPage} />
      </div>

      {/* All Product lists displayed on the homepage */}
      <Grains onOpenQuantitySelectionModal={onOpenQuantitySelectionModal} onAddToWishlist={onAddToWishlist} />
      <Fruits onOpenQuantitySelectionModal={onOpenQuantitySelectionModal} onAddToWishlist={onAddToWishlist} />
      <Vegetables onOpenQuantitySelectionModal={onOpenQuantitySelectionModal} onAddToWishlist={onAddToWishlist} />

      {/* Why Choose Us? and Farmer CTA sections */}
      <WhyChooseUs />
      <FarmerCTA setCurrentPage={setCurrentPage} />
    </>
  );
};

export default HomePageContent;