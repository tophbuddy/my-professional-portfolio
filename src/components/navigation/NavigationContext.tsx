'use client';

import React, { createContext, useContext, useState } from 'react';

type NavigationContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
