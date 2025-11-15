import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [likes, setLikes] = useState([]);

  return (
    <StoreContext.Provider value={{ orders, setOrders, likes, setLikes }}>
      {children}
    </StoreContext.Provider>
  );
}
