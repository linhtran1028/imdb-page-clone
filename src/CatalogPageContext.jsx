import React, { createContext, useContext } from "react";
import { useState } from "react";

export const CatalogPageContext = createContext();

export const CatalogPageProvider = ({ children }) => {
  const [tab, setTab] = useState("movies");
  
  return (
    <CatalogPageContext.Provider value={{ tab, setTab }}>
      {children}
    </CatalogPageContext.Provider>
  );
};

export const useCatalogPageContext = () => {
  return useContext(CatalogPageContext);
};
