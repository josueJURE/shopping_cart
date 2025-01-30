import { useShoppingCart } from "../context/UseShoppingCart"
import { Stack } from "react-bootstrap";

import data from "../data/items";


type CartTypesProps = {
    id : number
    quantity: number
}

export default function Cart({id, quantity}: CartTypesProps) {
    const {removeFromCart} = useShoppingCart()
    const item = data.find(i => i.id === id)
    if (item == null) return null

    return (
     
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{width: "125px", height:"75px", objectFit: "cover"}}/>
            <div className="me-auto">
            <div>{item.name} 
                {quantity > 1 && <span className="text-muted">{quantity}x</span>}


            </div>

            </div>
         

        </Stack>
    )
 
}
