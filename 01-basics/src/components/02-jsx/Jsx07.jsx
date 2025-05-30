import React from "react";

export const Jsx07 = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const array2 = [...new Array(10)];

  const array3 = new Array(10).fill(0).map((_, i) => i + 1);

  //JSX icerisinde for dongusu yok. Bunun yerine map ile for dongusunu
  //implement etmemiz lazim.
  //Ilk yok spread kullanarak bos arrayi toplamak, ve indexleri kullanmak.

  console.log(array3);

  return (
    <div>
      {array3.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
};
