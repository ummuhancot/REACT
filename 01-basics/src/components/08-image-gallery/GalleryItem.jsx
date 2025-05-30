import React from "react";

export const GalleryItem = (props) => {
  return (
    <div className="gallery-item">
      <img
        className="image"
        src={`img/gallery/${props.image}`}
        alt={props.title}
      />
    </div>
  );
};
