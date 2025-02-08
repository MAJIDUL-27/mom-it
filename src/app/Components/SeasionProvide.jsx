"use client";
import { SessionProvider } from "next-auth/react";
const SeasionProvide = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SeasionProvide;
