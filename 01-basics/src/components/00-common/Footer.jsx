import React from "react";

export const Footer = () => {
  return (
    <footer className="p-4 bg-dark text-light">
      <p className="text-center">
        &copy; {new Date().getFullYear()} TechproEducation, All rights reserved.
      </p>
    </footer>
  );
};
