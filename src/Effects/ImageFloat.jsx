import React from "react";
import Photo from "../images/photo.jpg";

function FloatingImage() {
  return (
    <div className="floating-image-container">
      <img src={Photo} alt="Dev look" className="floating-image" />
    </div>
  );
}

export default FloatingImage;
