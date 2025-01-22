import { Card } from "react-bootstrap";
import  formatCurrency from "../utilities/formatCurrency"

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <Card>
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
          <span className="ms-2 text-muted"> Price: {formatCurrency(price)}</span>
        </Card.Title>
        {/* <Card.Text>Price: ${price.toFixed(2)}</Card.Text> */}
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
