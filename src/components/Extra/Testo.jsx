import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "This product has transformed my life. I can't imagine a day without it!",
    author: "John Doe",
    rating: 5,
  },
  {
    text: "Incredible service and support! Highly recommended.",
    author: "Jane Smith",
    rating: 4,
  },
  {
    text: "A game changer for my business. Excellent results!",
    author: "Alice Johnson",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "20px",
            width: "20px",
            fill: index < rating ? "gold" : "lightgray",
          }}
          viewBox="0 0 20 20"
        >
          <path d="M10 15.273l-6.18 3.245 1.175-6.861L.49 6.908l7.09-1.028L10 0l2.42 5.88 7.09 1.028-4.505 4.749 1.175 6.861L10 15.273z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ text, author, rating }) => {
  const cardStyle = {
    backgroundColor: "#FF8C00",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",

    margin: "0 auto",
    transform: "scale(1)",
    transition: "transform 0.3s ease",
  };

  return (
    <div style={cardStyle}>
      <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
        {text}
      </p>
      <StarRating rating={rating} />
      <p style={{ fontSize: "14px", fontStyle: "italic", marginTop: "10px" }}>
        — {author}
      </p>
    </div>
  );
};

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const sectionStyle = {
    padding: "40px 0",

    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#333",
  };

  return (
    <section id="testimonial" style={sectionStyle}>
      <h2 style={headingStyle}>What Our Clients Say</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TestimonialCard
          text={testimonials[currentIndex].text}
          author={testimonials[currentIndex].author}
          rating={testimonials[currentIndex].rating}
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
