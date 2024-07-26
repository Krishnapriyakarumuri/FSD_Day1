import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} color="gold" />
      ))}
      {hasHalfStar && <FaStarHalfAlt color="gold" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} color="gold" />
      ))}
    </div>
  );
};

export default Rating;
