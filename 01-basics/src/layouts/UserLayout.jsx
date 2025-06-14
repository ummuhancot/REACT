import React from "react";
import { Header } from "../components/00-common/Header";
import { MainMenu } from "../components/00-common/MainMenu";
import { Footer } from "../components/00-common/Footer";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <MainMenu />
      <Outlet />
      <Footer />
    </div>
  );
};
