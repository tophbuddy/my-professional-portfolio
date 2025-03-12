'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface INavigationContext {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

interface INavigationProviderProps {
  children: ReactNode;
}

const NavigationContext = createContext<INavigationContext>({
  isMenuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

export const NavigationProvider = ({ children }: INavigationProviderProps): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <NavigationContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): INavigationContext => {
  const context = useContext(NavigationContext);
  return context;
};
