"use client";

import Hero from "./Components/home/Hero";
import HoreOne from "./Components/home/HoreOne";
import NotisBord from "./Components/home/NotisBord";
import DepartmentGroups from "./Components/home/DepartmentGroups";

const Navbar = () => {
  return (
    <>
      <HoreOne />
      <Hero />
      <NotisBord />
      <DepartmentGroups />
    </>
  );
};

export default Navbar;
