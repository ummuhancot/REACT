import React from "react";
import images from "./data.json";
import { GalleryItem } from "./GalleryItem";
import "./ImageGallery.scss";

export const ImageGallery = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="images">
        {images.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
