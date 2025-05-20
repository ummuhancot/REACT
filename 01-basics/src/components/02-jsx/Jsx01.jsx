import React from "react";
// rafc
//KURAL 1: JSX icerisinde sadece 1 adet parent element olmalidir.
//KURAL 2: Elementlerin attribute'lari camel case olmak zorundadir.
//KURAL 3: Bazi attribute'lar, JavaScript icin ozel anlamli oldugundan dolayi belirli
//HTML attributelarinin isimleri degisir. Ornegin: class -> className, for -> hmtlFor

export const Jsx01 = () => {
  return (
    <div>
      <div className="warning">Jsx01</div>
      <label htmlFor="name">First name:</label>
    </div>
  );
};
