import React from "react";

//KURAL 5: Eger parent div istemiyorsak, onun yerine React.Fragment kullanabiliriz.
//<React.Fragment></React.Fragment> veya <> </> kullanilabilir.
export const Jsx03 = () => {
  return (
    <>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    </>
  );
};
