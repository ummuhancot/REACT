import React, { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [count, setCount] = useState(0);

  // Child'dan parent'a data aktarimi icin stateler ve handlerlar kullanilir.
  // Child icerisinden parent'taki state'i degistirecek olan bir fonksiyon cagirilir.
  // Bu fonksiyon, parent icerisinde tanimlanir ve child'a props olarak aktarilir.
  // Bu fonksiyonun gorevi, belirli gereksinimler karsilandiktan sonra state'i uygun bir sekilde degistirmektir.
  const handleCount = (value) => {
    if (count === 0 && value < 0) {
      alert("Count cannot be negative");
      return;
    }
    setCount((prev) => prev + value);
  };
  return (
    <div className="text-center mt-5">
      <h1 className="fw-semibold">{count}</h1>
      <Child handleCount={handleCount} />
    </div>
  );
};
