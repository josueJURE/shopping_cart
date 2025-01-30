
import { Offcanvas, Stack} from "react-bootstrap";
import { useShoppingCart } from "../context/UseShoppingCart";
import Cart from "./Cart";

type ShoppingCartProps = {
    isOpen: boolean
}

export default function ShoppingCart({isOpen} : ShoppingCartProps ) {

  const { closeCart, cartItems} = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
           {cartItems.map(item => 
            <Cart key={item.id} {...item}></Cart>
           )}
          

        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
