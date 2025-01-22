import { Card } from "react-bootstrap";

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
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
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
