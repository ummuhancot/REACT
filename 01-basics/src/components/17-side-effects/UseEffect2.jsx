import React, { useEffect } from "react";

export const UseEffect2 = () => {
  useEffect(() => {
    console.log("UseEffect2 component mounted");

    return () => {
      console.log("UseEffect2 component unmounted");
    };
  }, []);
  return <div>UseEffect2</div>;
};
