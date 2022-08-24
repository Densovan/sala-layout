import React, { useEffect } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import MainLayout from "../components/main-layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <MainLayout />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
