import "../../App.css";
import "./Cars.css";
import { Card, Button } from "react-bootstrap";
function Car(props) {
  const alertfun = (name, price) => {
    alert(`You have to pay
    ${price} to buy ${name} ! `);
  };
  return (
    <div className="Car">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.e.imgSrc} height="250px" />
        <Card.Body>
          <Card.Title>Compony : {props.e.name}</Card.Title>
          <Card.Text>Price : {props.e.price}</Card.Text>
          <Button
            variant="primary"
            onClick={() => alertfun(props.e.name, props.e.price)}
          >
            Puy Cars
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Car;
