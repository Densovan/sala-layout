import React, { createContext, useEffect, useState } from "react";
import { themeChange } from "theme-change";

const GlobalContext = createContext();

function GlobalContextProvider(props) {
  return (
    <GlobalContext.Provider value={{}}>{props.children}</GlobalContext.Provider>
  );
}

export default GlobalContext;
export { GlobalContextProvider };
