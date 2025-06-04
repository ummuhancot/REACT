import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const UseEffect3 = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(null);

  //Sadece counter degeri degisirse title setlenecek.
  //Bu durumda useEffect'in ikinci parametresine [counter] degerini
  //gonderiyoruz. Bu sayede sadece counter state'i degistiginde
  //useEffect tetiklenecek ve title guncellenecek.
  //Eger error state'i degisirse useEffect tetiklenmeyecek.
  useEffect(() => {
    document.title = `You have clicked ${counter} times`;
    console.log("Title guncellendi");
  }, [counter]);

  return (
    <div className="mt-4 text-center">
      <h1>You have clicked {counter} times</h1>
      <Button
        variant="outline-dark"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Count
      </Button>
      <Button
        variant="outline-danger"
        onClick={() => setError((prev) => "Error " + Math.random())}
      >
        Error
      </Button>
    </div>
  );
};
