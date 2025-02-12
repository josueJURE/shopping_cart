import { Col, Row } from "react-bootstrap";
// import data from "../data/items";
import StoreItem from "../components/StoreItem";
import { useState, useEffect } from "react";
import { supabase } from "../utilities/supabase";
import { Database } from "../types/database.types";

type Item = Database["public"]["Tables"]["items"]["Row"];

export default function Store() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    async function getTodos() {
      const { data, error } = await supabase.from("items").select();

      if (error) {
        console.log(error);
      }

      if (data?.length) {
        setItems(data);
      }
    }

    getTodos();
  }, []);

  return (
    <>
      <h1>Store</h1>
      {!items.length ? <div>...Loading</div> : null}
      <Row md={2} xs={1} lg={4} className="g-3">
        {items.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          );
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
