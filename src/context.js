import React, { useState, useContext } from "react";
import { Children } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [isSideBarOpen, setSidebar] = useState(false);

  function openSideBar() {
    console.log("open");
    setSidebar(true);
  }
  function closeSideBar() {
    setSidebar(false);
  }

  return (
    <AppContext.Provider value={{ isSideBarOpen, openSideBar, closeSideBar }}>
      {children}
    </AppContext.Provider>
  );
}
function UseGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider, UseGlobalContext };
