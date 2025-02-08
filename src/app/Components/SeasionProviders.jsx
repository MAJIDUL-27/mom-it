"use client";
import { SessionProvider } from "next-auth/react";
const SeasionProviders = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SeasionProviders;
