import React from "react";

interface StayTypeProps {
  stayType: string;
}

const StayType: React.FC<StayTypeProps> = ({ stayType }) => (
  <span className="text-xs text-gray-400 md:text-sm font-montserrat">
    {stayType}
  </span>
);

export default StayType;
