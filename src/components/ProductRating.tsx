import React from "react";

interface ProductRatingProps {
  rating: number;
}

const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (halfStar) {
      stars.push(<i key={fullStars} className="fas fa-star-half-alt"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={fullStars + i + 1} className="far fa-star"></i>);
    }

    return stars;
  };

  return <span className="rating-stars">{renderStars()}</span>;
};

export default ProductRating;
