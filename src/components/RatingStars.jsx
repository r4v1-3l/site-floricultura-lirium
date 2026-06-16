import './RatingStars.css'

import { Star } from "lucide-react";

export function RatingStars({ rating }) {
  return (
    <div className="card-rating">
      {[1, 2, 3, 4, 5].map((star) => {
        const fillPercent = Math.max(
          0,
          Math.min(100, (rating - (star - 1)) * 100)
        );

        return (
          <div key={star} className="star-wrapper">
            <Star size={16} className="star-empty" />

            <div
              className="star-fill"
              style={{ width: `${fillPercent}%` }}
            >
              <Star size={16} fill="#FFD700" stroke="#FFD700" />
            </div>
          </div>
        );
      })}

      <span>{rating.toFixed(1)}</span>
    </div>
  );
}