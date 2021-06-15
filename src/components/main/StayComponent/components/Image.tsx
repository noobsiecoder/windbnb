import React from "react";

interface ImageProps {
  url: string;
  altData: string;
}

const Image: React.FC<ImageProps> = ({ url, altData }) => (
  <div className="overflow-hidden cursor-pointer rounded-2xl">
    <img
      className="object-cover w-full h-64 duration-300 transform rounded-2xl hover:scale-110"
      src={url}
      alt={`${altData}_stay_image`}
    />
  </div>
);

export default Image;
