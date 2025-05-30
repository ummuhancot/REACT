import React from "react";

export const Jsx05 = () => {
  const isAdmin = true;

  const discount = 0;

  //JSX icerisinde if veya switch kullanamayiz.
  //Bunun yerine ternary operator kullanabiliriz.
  return (
    <div>
      {isAdmin ? <h2>Admin User</h2> : <h2>Customer User</h2>}
      {!!discount && <h3>Discount: {discount}</h3>}
      {discount ? <h3>Discount: {discount}</h3> : null}
    </div>
  );
};
