import { Card, Button } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";
import AddToCart from "./AddToCart";
import Remove from "./Remove";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 1;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        alt={name}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between algin-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">
          
            Price: {formatCurrency(price)}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "5rem" }}
            >
              <Button className="w-100">-</Button>
              <div className="fs-3">
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <Button className="w-100">+</Button>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "5rem" }}
              >
                <Button variant="danger" size="sm">Remove Item</Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

// const StoreItem: React.FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
//     return (
//       <Card>
//         <Card.Img variant="top" src={imgUrl} />
//         <Card.Body>
//           <Card.Title>{name}</Card.Title>
//           <Card.Text>${price.toFixed(2)}</Card.Text>
//         </Card.Body>
//       </Card>
//     );
//   };

//   export default StoreItem;
