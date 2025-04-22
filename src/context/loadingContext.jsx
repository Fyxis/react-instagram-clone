import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const LoadingProvider = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <AppContext.Provider value={{ isNavigating, setIsNavigating }}>
      {children}
    </AppContext.Provider>
  );
};
