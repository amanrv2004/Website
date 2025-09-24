import React from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import styles from './MyCarousel.module.css';

const MyCarousel = () => {
  return (
    <div id="myCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className={`d-block w-100 ${styles.carouselImage}`} alt="Slide 1" />
          <div className="container">
            <div className={`carousel-caption text-start ${styles.carouselCaption}`}>
              <h1>Farming Made Easy</h1>
              <p>Explore the best crops and tools from trusted sellers.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Shop Now</a></p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={slide2} className={`d-block w-100 ${styles.carouselImage}`} alt="Slide 2" />
          <div className="container">
            <div className={`carousel-caption ${styles.carouselCaption}`}>
              <h1>Organic & Sustainable</h1>
              <p>Bring quality to your field with Fasal Kart products.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Learn More</a></p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={slide3} className={`d-block w-100 ${styles.carouselImage}`} alt="Slide 3" />
          <div className="container">
            <div className={`carousel-caption text-end ${styles.carouselCaption}`}>
              <h1>Support Local Farmers</h1>
              <p>Buy directly from producers and grow together.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Join Us</a></p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={slide4} className={`d-block w-100 ${styles.carouselImage}`} alt="Slide 4" />
          <div className="container">
            <div className={`carousel-caption ${styles.carouselCaption}`}>
              <h1>Best Tools & Seeds</h1>
              <p>Top-rated supplies for successful farming.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Explore</a></p>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MyCarousel;