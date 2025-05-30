import React from "react";

export const Jsx06 = () => {
  const users = [
    { id: 1, firstName: "John", lastName: "Doe", age: 25 },
    { id: 2, firstName: "Jane", lastName: "Doe", age: 30 },
    { id: 3, firstName: "Jim", lastName: "Beam", age: 35 },
    { id: 4, firstName: "Jack", lastName: "Daniels", age: 40 },
  ];
  //Burada butun iteration yontemleri kullanilabilir.
  // forEach, map, filter, reduce, some, every, find, findIndex
  //Ancak jsx icerisinde sadece map kullanilabilir.

  /*
  let stringUsers = "";

  users.forEach((user) => {
    stringUsers += `<li>${user.firstName}</li> <li>${user.lastName}</li>\n`;
  });

  document.getElementById("........").innerHTML = stringUsers;
*/

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName} {user.age}
        </li>
      ))}
    </ul>
  );
};
