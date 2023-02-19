import { createContext, useState } from 'react';

export const ActiveLinkContext = createContext();

export const ActiveLinkProvider = ({ children }) => {
  const [active, setActive] = useState(null);

  return (
    <ActiveLinkContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};
