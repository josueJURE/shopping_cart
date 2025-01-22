
import { Col, Row } from "react-bootstrap";
import storeItems_data from "../data/items.json";
import StoreItem from "../components/StoreItem"


export default function Store() {
  return (
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={4} className="g-3">
      {storeItems_data.map(item => {
        return <Col key={item.id}>
          <StoreItem {...item}/>
        </Col>
      })}
    
    
    </Row>
    </>
 
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
