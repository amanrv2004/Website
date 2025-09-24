import grainsImg from "../assets/images/grain.avif";
import vegImg from "../assets/images/veg.avif";
import fruitsImg from "../assets/images/fruits.avif";
import oilSeedsImg from "../assets/images/oilseeds.avif"; 
import nutsImg from "../assets/images/nuts.avif";       
import spicesImg from "../assets/images/spices.avif";     

const foodData = [
  {
    image: grainsImg,
    value: "Grains",
  },
  {
    image: vegImg,
    value: "Vegetables",
  },
  {
    image: fruitsImg,
    value: "Fruits",
  },
  {
    image: oilSeedsImg, // Corrected variable name here
    value: "OilSeeds",
  },
  {
    image: nutsImg, // Corrected variable name here
    value: "Nuts",
  },
  {
    image: spicesImg, // Corrected variable name here
    value: "Spices and Herbs",
  },

];

const FoodCategories = ({ setCurrentPage }) => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Crop Product Categories</h2> {/* Updated heading as per previous request */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5"> {/* Adjusted cols for better layout with more items */}
        {foodData.map((item, index) => (
          <div className="col" key={index}>
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "450px", // Reverted height to a more reasonable value for better UI
                cursor: "pointer",
              }}
              onClick={() => setCurrentPage(item.value)}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3
                  className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                  style={{
                    color: "white",
                    WebkitTextStroke: "1px black",
                    textShadow: "2px 2px 4px black",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {item.value} {/* Display the category name on the card */}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;