import React from "react";

//KURAL 1 : JSX icerisinde sadece 1 adet parent eleman olmalidir.

//KURAL 2 : Elementlerin attributlari camelCase ile yazilmalidir.

//KURAl 3 : Bazi attributlar, Js icin özel anlamli oldugundan dolayi belirli attributelarin isimleri degisir. Ornek: class -> className, for -> htmlFor

export const Jsx01 = () => {
  return (
    <div>
      <div className="warning">Jsx01</div>
      <label htmlFor="name">First Name</label>
    </div>
  );
};
