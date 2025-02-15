import { useShoppingCart } from "../context/UseShoppingCart";
import { Button, Stack } from "react-bootstrap";

import data from "../data/items";
import formatCurrency from "../utilities/formatCurrency";
import { supabase } from "../utilities/supabase";
import { Database } from "../types/database.types";
import { useState } from "react";

type CartTypesProps = {
  id: number;
  quantity: number;
};

export default function Cart({ id, quantity }: CartTypesProps) {
  const [name, setName] =  useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  
  const { removeFromCart } = useShoppingCart();
  const item = data.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price * quantity)}
        </div>

        <Button
          variant="outline-danger"
          onClick={() => removeFromCart(item.id)}
        >Remove Items</Button>
      </div>
    </Stack>
  );

}
