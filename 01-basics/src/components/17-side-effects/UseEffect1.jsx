import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { UseEffect2 } from "./UseEffect2";

export const UseEffect1 = () => {
  const [message, setMessage] = useState();
  const [error, setError] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  //useEffect'te ikinci parametre dependencies array'dir.
  //Eğer boş bir array verirsek, bu useEffect sadece component
  //mount olduğunda çalışır.
  useEffect(() => {
    console.log("MOUNTING: Buraya yazilacak kodlar sadece render'da calisir.");
  }, []);

  useEffect(() => {
    //Eger return icerisindeki bir bilgi kullanilacaksa, o zaman useEffect ile guncelleme yapilir.
    console.log(
      "UPDATING: Buraya yazilacak kodlar her render'da (re-render dahil) calisir."
    );
  });

  //Eger return icerisinde bir bilgi kullanilmiyorsa, o zaman useEffect kullanilmasina gerek yoktur.
  //   console.log(
  //     "UPDATING: Buraya yazilacak kodlar her render'da (re-render dahil) calisir."
  //   );

  useEffect(() => {
    const element = document.getElementById("message");
    element.innerHTML = message;
  });

  useEffect(() => {
    console.log(
      "UPDATING-DEPENDCY: Buraya yazilacak kodlar sadece dependecies array'deki verilen degerler degistiginde calisir."
    );
  }, [message, error]);

  return (
    <div className="mt-5 text-center">
      <div id="message"></div>
      <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
        <Button
          size="lg"
          variant="outline-dark"
          onClick={() => setMessage(Math.random())}
        >
          Set Message
        </Button>
        <Button
          size="lg"
          variant="outline-danger"
          onClick={() => setError("An error occurred!")}
        >
          Set Error
        </Button>
        <Button
          size="lg"
          variant="outline-primary"
          onClick={() => setShowComponent((previous) => !previous)}
        >
          Toggle Component
        </Button>
        {showComponent && <UseEffect2 />}
      </div>
    </div>
  );
};
