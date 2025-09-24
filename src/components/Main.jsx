import FoodCategories from "./FoodCategories";
import Fruits from "./Fruits"; // Still imported, but rendered conditionally by App.jsx
import Grains from "./Grains";   // Still imported, but rendered conditionally by App.jsx
import Vegetables from "./Vegetables"; // Still imported, but rendered conditionally by App.jsx
import WhyChooseUs from "./WhyChooseUs";
import FarmerCTA from "./FarmerCTA";
import FeaturedProducts from "./FeaturedProducts";


const Main = ({ setCurrentPage, onOpenQuantitySelectionModal, onAddToWishlist }) => {
  return (
  <>
    
    <FeaturedProducts
        onOpenQuantityModal={onOpenQuantitySelectionModal}
        onAddToWishlist={onAddToWishlist}
    />

    <div className="main-div">
    
      <FoodCategories setCurrentPage={setCurrentPage} />
    </div>

    
    <WhyChooseUs />
    <FarmerCTA setCurrentPage={setCurrentPage} />
  </>
  );
};
export default Main;