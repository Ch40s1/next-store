// navigationUtils.js
import { useState } from "react";
import { useCallback } from "react";

export const useNavigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    console.log('Before Click - isCartOpen:', isCartOpen);
    setIsCartOpen(!isCartOpen);
    console.log('After Click - isCartOpen:', !isCartOpen);
  };

  return { isCartOpen, handleCartClick };
};
