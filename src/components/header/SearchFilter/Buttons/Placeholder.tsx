import React from "react";

interface PlaceholderProps {
  placeholder: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ placeholder }) => (
  <span className="font-extrabold font-mulish text-xxs text-gray-750">
    {placeholder}
  </span>
);

export default Placeholder;
