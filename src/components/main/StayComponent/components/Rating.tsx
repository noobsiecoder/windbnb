import React from "react";

// React component - Icon
import { StarIcon } from "../../../icons/index";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => (
  <div className="flex gap-x-0.5 items-center">
    <StarIcon />
    <span className="text-xs font-medium text-gray-700 md:text-sm font-montserrat">
      {rating.toFixed(2)}
    </span>
  </div>
);

export default Rating;
