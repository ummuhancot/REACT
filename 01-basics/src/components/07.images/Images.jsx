import React from "react";
import favicon from "../../assets/img/favicon.png";
import testimonial from "../../assets/img/testimonial-img1.jpg";
import work from "../../assets/img/work5.jpg";

export const Images = () => {
  return (
    <div>
      <h2>Static Images</h2>
      <p>
        Eger görseller public klasörü icerisinde ise ve herhangi bir
        optimizasyon gerekmiyorsa bu yöntem kullanilabilir
      </p>
      <img src="./vite.svg" alt="vite logo" />
      <h2>Dynamic Images</h2>
      <p>
        Eger görseller src klasörü icerisinde ise ve optimizasyon gerektiriyorsa
        bu yöntem kullanilabilir
      </p>
      <img src={favicon} alt="favicon" />
      <img src={testimonial} alt="testimonial" />
      <img src={work} alt="work" />
    </div>
  );
};
