import React from "react";
export const Jsx04 = () => {
  //JavaScript kodlari yazabiliriz.
  const isAdmin = false;
  let content = "";
  if (isAdmin) {
    content = <div>Admin User</div>;
  } else {
    content = <div>Customer User</div>;
  }
  return <div>{content}</div>;
};
