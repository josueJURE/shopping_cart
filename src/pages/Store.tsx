
import storeItems from "../data/items.json";
import Card from "react-bootstrap/Card";

export default function Store() {
  return (
    <div className="d-flex flex-wrap gap-3">
      {storeItems.map((storeItem) => (
        <Card key={storeItem.id}>
          <Card.Header>{storeItem.name}</Card.Header>
          <Card.Body>
            <Card.Title>{storeItem.price}</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
// {
//     "id": 1,
//     "name": "Book",
//     "price": 10.99,
//     "imgUrl": "/imgs/book.jpg"
//   },

// <Card>
// <Card.Header>Featured</Card.Header>
// <Card.Body>
//   <Card.Title>Special title treatment</Card.Title>
//   <Card.Text>
//     With supporting text below as a natural lead-in to additional content.
//   </Card.Text>
// </Card.Body>
// </Card>
