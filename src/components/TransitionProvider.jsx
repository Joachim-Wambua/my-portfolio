"use client";

import { createContext, useContext, useState } from "react";

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export default function TransitionProvider({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <TransitionContext.Provider value={{ isAnimating, setIsAnimating }}>
      {children}
    </TransitionContext.Provider>
  );
}
