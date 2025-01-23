import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

type CartItems = {
  id: number;
  quantity: number;
};

type CartQuantity = {
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export default function ShoppingCartProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartIetms, setCartItems] = useState<CartItems[]>([]);
  const [increase, setIncrease] = useState<CartQuantity>({ quantity: 0 });

  function getItemQuantity(id: number) {
    return cartIetms.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) === null) {
        return [...currentItems, { id, quantity: 1 }]; // must go over it one more time
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }; // must go over it one more time
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }; // must go over it one more time
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
        if(currentItems.find(item => item.id === id)) {
            return currentItems.filter(item => item.id !== id)
        } else {
            return currentItems
        }
    })
  }

//   function removeFromCart(id: number) {
//     setCartItems(currentItems => {
//         return currentItems.filter(item => item.id !== id)
//     })

      
        


  }

  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
