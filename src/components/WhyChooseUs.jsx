import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'bi-flower1', // Bootstrap Icon class
      title: 'Farm-Fresh Quality',
      description: 'We connect you directly to local farmers, ensuring the freshest produce from farm to table.',
    },
    {
      icon: 'bi-hand-thumbs-up', // Bootstrap Icon class
      title: 'Support Local Communities',
      description: 'Your purchases directly empower local farmers and contribute to sustainable agriculture.',
    },
    {
      icon: 'bi-truck', // Bootstrap Icon class
      title: 'Reliable & Timely Delivery',
      description: 'Enjoy hassle-free delivery right to your doorstep, on time, every time.',
    },
    {
      icon: 'bi-patch-check', // Bootstrap Icon class
      title: 'Quality Guaranteed',
      description: 'We stand by the quality of our products. If you\'re not satisfied, we\'ll make it right.',
    },
  ];

  const testimonials = [
    {
      quote: "Fasal Kart has transformed how I buy groceries. The produce is incredibly fresh, and I love supporting local farmers!",
      author: "Priya Sharma",
      city: "Delhi",
    },
    {
      quote: "Excellent quality and service. My family can taste the difference in freshness. Highly recommend!",
      author: "Amit Patel",
      city: "Mumbai",
    },
    {
      quote: "As a small business owner, Fasal Kart has become my go-to for bulk orders. The wholesale prices are unbeatable.",
      author: "Sneha Devi",
      city: "Bengaluru",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-5 border-bottom pb-2 text-center">Why Choose Fasal Kart?</h2>

      {/* Why Choose Us Features */}
      <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4 text-center mb-5">
        {features.map((feature, index) => (
          <div className="col" key={index}>
            <div className="p-3 bg-white rounded-3 shadow-sm h-100 d-flex flex-column justify-content-center align-items-center">
              <i className={`bi ${feature.icon} fs-1 text-primary mb-3`}></i> {/* Bootstrap Icon */}
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="text-muted small">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-5 border-bottom pb-2 text-center mt-5">What Our Customers Say</h2>

      {/* Testimonials Carousel (using a simple row for now for easier setup) */}
      <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
        {testimonials.map((testimonial, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center">
              <p className="card-text mb-3 fst-italic">"{testimonial.quote}"</p>
              <footer className="blockquote-footer mt-auto pt-2 border-top">
                {testimonial.author}, <cite title="Source Title">{testimonial.city}</cite>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;