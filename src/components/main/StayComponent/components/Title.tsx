import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <h3 className="text-sm font-semibold font-montserrat text-gray-750 md:text-base">
    {title}
  </h3>
);

export default Title;
