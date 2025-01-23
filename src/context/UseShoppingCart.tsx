import { createContext, useContext, ReactNode } from "react"

type ShoppingCartContextProviderProps = {
    children: ReactNode
}

const ShoppingCartContext = createContext({})

export default function UseShoppingCart() {
    return useContext(ShoppingCartContext)
 
}



export function ShoppingCartProvider({children}: ShoppingCartContextProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}

        </ShoppingCartContext.Provider>

    )

}


