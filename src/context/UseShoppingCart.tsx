import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () =>  void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  allItemsInCart: () =>  number;
  // cartItems: CartItems[];

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [increase, setIncrease] = useState<CartQuantity>({ quantity: 0 });

  console.log(cartIetms)

  // function openCart() {
  //   setIsOpen((prev) => !prev)
  // }

  const openCart = () =>  console.log(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartIetms.find((item) => item.id === id)?.quantity || 0;
  }

  function allItemsInCart() {
    return cartIetms.reduce(function(acc, obj) {return acc + obj.quantity}, 0);
  }


// spot the difference between this function and the one below:
//   function increaseCartQuantity(id: number) {
//     setCartItems((currentItems) => {
//       if (currentItems.find((item) => item.id === id) === null) {
//         return [...currentItems, { id, quantity: 1 }]; // must go over it one more time
//       } else {
//         return currentItems.map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity + 1 }; // must go over it one more time
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   }


function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }



  

  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }; // must go over it one more time
          } else {
            return item;
          }
        });
      }
    });
  }

  // use other function commented out below if that one doesn't work
  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems;
      }
    });
  }

  //   function removeFromCart(id: number) {
  //     setCartItems(currentItems => {
  //         return currentItems.filter(item => item.id !== id)
  //     })

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        allItemsInCart,
        openCart,
        closeCart


      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
