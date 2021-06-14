import React from "react";

interface ImageProps {
  imageStyle: object;
  url: string;
  altData: string;
}

const Image: React.FC<ImageProps> = ({ imageStyle, url, altData }) => (
  <div className="overflow-hidden cursor-pointer rounded-2xl">
    <img
      style={imageStyle}
      className="object-cover duration-300 transform rounded-2xl hover:scale-110"
      src={url}
      alt={`${altData}_stay_image`}
    />
  </div>
);

export default Image;
