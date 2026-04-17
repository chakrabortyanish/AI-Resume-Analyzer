import React, {useState} from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);

  return (
    <AppContext.Provider value={{ loading, setLoading, data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
